<template>
  <div class="flex box1 justify-between mb-3">
    <div :class="state.isFree ? 'hover' : 'box2'" @click="changeIsFree1">
      全部卡片（{{ cardsNum.entry_num }}）
    </div>
    <div :class="state.isFree ? 'box2' : 'hover'" @click="changeIsFree1">
      重点卡片（{{ cardsNum.collect_entry_num }}）
    </div>
  </div>

  <ul v-if="state.isFree">
    <li
      class="mb-4"
      v-for="(item, index) in cardsInfo.items"
      :key="index"
      :value="item.value"
    >
      <van-swipe-cell>
        <span class="text-xs"> {{ item.sort }}</span>
        <van-cell :border="false" class="word-card">
          <div class="flex justify-between">
            <div class="front-text">
              <span class="text-xl font-semibold">{{ item.front }}</span>
            </div>
            <div class="flex">
              <img
                :src="
                  item.is_collect
                    ? require('@/assets/collectIcon.png')
                    : require(`@/assets/wordcard1.png`)
                "
                @click="cardCollect(item.id, index, 0)"
              />
            </div>
          </div>
          <div class="word-translate">
            {{ item.back }}
          </div>
        </van-cell>
        <template #right>
          <div class="ml-6 mt-10" v-if="state.user.id === item.user_id">
            <router-link
              :to="{
                path: '/change',
                query: {
                  id: item.id,
                },
              }"
            >
              <van-button square type="danger" class="word-button button-mr">
                <img src="@/assets/WordButton1.png" alt="" />
              </van-button>
            </router-link>
            <van-button
              square
              type="primary"
              class="word-button test1"
              @click="cardDel(item.id)"
            >
              <img src="@/assets/WordButton2.png" alt="" />
            </van-button>
          </div>
        </template>
      </van-swipe-cell>
    </li>
  </ul>
  <ul v-else>
    <li
      class="mb-4"
      v-for="(item, index) in cardCol.items"
      :key="index"
      :value="item.value"
    >
      <van-swipe-cell>
        <span class="text-xs"> {{ item.sort }}</span>
        <van-cell :border="false" class="word-card">
          <div class="flex justify-between">
            <div>
              <span class="text-xl font-semibold">{{ item.front }}</span>
            </div>
            <div class="flex">
              <img
                class="mr-4"
                :src="
                  item.is_collect
                    ? require('@/assets/collectIcon.png')
                    : require(`@/assets/wordcard1.png`)
                "
                @click="cardCollect(item.id, index, 1)"
              />
            </div>
          </div>
          <div class="word-translate">
            {{ item.back }}
          </div>
        </van-cell>
        <template #right v-if="state.user.id === item.user_id">
          <div class="ml-6 mt-10">
            <router-link
              :to="{
                path: '/change',
                query: {
                  id: item.id,
                },
              }"
            >
              <van-button square type="danger" class="word-button button-mr">
                <img src="@/assets/WordButton1.png" alt="" />
              </van-button>
            </router-link>
            <van-button square type="primary" class="word-button test">
              <img
                src="@/assets/WordButton2.png"
                alt=""
                @click="cardDel(item.id)"
              />
            </van-button>
          </div>
        </template>
      </van-swipe-cell>
    </li>
  </ul>
</template>
<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import { defineProps } from "vue";
import { infor, cards, collectCard, delCard } from "@/api/api";
import { getUser } from "@/utils/helpers";
import { Notify } from "vant";
const bookId = defineProps(["value"]);
const cardsInfo = ref("");
const cardsNum = ref("");
const cardCol = ref("");

var state = reactive({
  isFree: true,
  user: getUser(),
});

const getInfo = async () => {
  try {
    const resp = await cards(bookId.value, {
      page: 1,
      limit: 5,
    });
    cardsInfo.value = resp.data;

    const colCard = await cards(bookId.value, {
      type: "collect",
    });
    cardCol.value = colCard.data;

    const inforResp = await infor(bookId.value);
    cardsNum.value = inforResp.data;
  } catch (err) {
    console.log(err);
  }
};

const changeIsFree1 = () => {
  state.isFree = !state.isFree;
};
const cardCollect = async (id, i, type) => {
  try {
    await collectCard(id);
    isCol(i, type);
  } catch (err) {
    console.log(err);
  }
};
const isCol = async (i, type) => {
  if (type == 0) {
    cardsInfo.value.items[i].is_collect = !cardsInfo.value.items[i].is_collect;
    if (cardsInfo.value.items[i].is_collect) {
      cardsNum.value.collect_entry_num = cardsNum.value.collect_entry_num + 1;
      cardCol.value.items.push(cardsInfo.value.items[i]);
      Notify({
        message: " 收藏成功",
        color: "#FFFFFF",
        background: "#12BFA2",
      });
    } else {
      for (let index = 0; index < cardsNum.value.collect_entry_num; index++) {
        if (cardCol.value.items[index] == cardsInfo.value.items[i]) {
          cardCol.value.items.splice(index, 1);
        }
      }
      cardsNum.value.collect_entry_num = cardsNum.value.collect_entry_num - 1;
      console.log(cardCol.value.items);
      Notify("取消收藏");
    }
  } else {
    cardCol.value.items[i].is_collect = !cardCol.value.items[i].is_collect;

    if (!cardCol.value.items[i].is_collect) {
      for (let index = 0; index < cardsNum.value.collect_entry_num; index++) {
        if (cardCol.value.items[index] == cardCol.value.items[i]) {
          cardCol.value.items.splice(index, 1);
        }
      }
      cardsNum.value.collect_entry_num = cardsNum.value.collect_entry_num - 1;
      Notify("取消收藏");
    }
  }
};
const cardDel = async (id) => {
  try {
    await delCard(id);
  } catch (err) {
    console.log(err);
  }
};

getInfo();
</script>
<style scoped>
.box1 {
  background: #ffffff;
  border-radius: 1rem;
  padding: 0.25rem;
}
.box2 {
  /* background: #ffffff; */
  border-radius: 1rem;
  text-align: center;
  padding: 0.6875rem 0;
  flex: 1;
  color: #000000;
}
.hover {
  background: #12bfa2;
  border-radius: 1rem;
  text-align: center;
  padding: 0.6875rem 0;
  flex: 1;
  color: #ffffff;
}
.word-card {
  background: #ffffff;
  border-radius: 1rem;
}
.word-translate {
  background: #f5f6fa;
  border-radius: 0.375rem;
  padding-left: 1rem;
  margin-top: 0.5rem;
}
.word-button {
  width: 3rem;
  height: 3rem;
  padding: 0;

  background-color: transparent;
  border: 0;
}
.button-mr {
  margin-right: 1rem;
}
.front-text {
  width: 17.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<template>
  <div class="px-4 pt-4">
    <div class="flex justify-between">
      <div>
        <van-search
          v-model="dataSearch.search"
          background="#ffffff"
          class="search"
          @search="searchCard"
        />
      </div>
      <div>
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          :close-on-click-action="false"
          placement="bottom-end"
          @select="direction"
        >
          <template #reference>
            <van-button type="primary" class="select-button">
              <img
                src="@/assets/sort-descending.png"
                alt=""
                class="select-photo"
              />
            </van-button>
          </template>
        </van-popover>
      </div>
    </div>
    <ul v-if="dataSearch.isShow && !dataSearch.isDirection">
      <li class="mb-4" v-for="(item, index) in cardsInfo.items" :key="index">
        <van-swipe-cell>
          <span class="text-xs"> {{ index + 1 }}</span>
          <van-cell :border="false" class="word-card">
            <div class="flex justify-between">
              <div>
                <span class="text-xl font-semibold">{{ item.front }}</span>
              </div>
              <div>
                <img
                  :src="
                    item.is_collect
                      ? require('@/assets/collectIcon.png')
                      : require(`@/assets/wordcard1.png`)
                  "
                  @click="cardCollect(item.id, index)"
                />
              </div>
            </div>
            <div class="word-translate">
              {{ item.back }}
            </div>
          </van-cell>
        </van-swipe-cell>
      </li>
    </ul>
    <ul v-if="dataSearch.isDirection">
      <li
        class="mb-4"
        v-for="(item, index) in dataSearch.direction.items"
        :key="index"
      >
        <van-swipe-cell>
          <span class="text-xs"> {{ index + 1 }}</span>
          <van-cell :border="false" class="word-card">
            <div class="flex justify-between">
              <div>
                <span class="text-xl font-semibold">{{ item.front }}</span>
              </div>
              <div>
                <img
                  :src="
                    item.is_collect
                      ? require('@/assets/collectIcon.png')
                      : require(`@/assets/wordcard1.png`)
                  "
                  @click="cardCollect(item.id, index)"
                />
              </div>
            </div>
            <div class="word-translate">
              {{ item.back }}
            </div>
          </van-cell>
        </van-swipe-cell>
      </li>
    </ul>
    <ul v-else>
      <li
        class="mb-4"
        v-for="(item, index) in dataSearch.searchWord.items"
        :key="index"
      >
        <van-swipe-cell>
          <span class="text-xs"> {{ index + 1 }}</span>
          <van-cell :border="false" class="word-card">
            <div class="flex justify-between">
              <div>
                <span class="text-xl font-semibold">{{ item.front }}</span>
              </div>
              <div>
                <img
                  :src="
                    item.is_collect
                      ? require('@/assets/collectIcon.png')
                      : require(`@/assets/wordcard1.png`)
                  "
                  @click="cardCollect(item.id)"
                />
              </div>
            </div>
            <div class="word-translate">
              {{ item.back }}
            </div>
          </van-cell>
        </van-swipe-cell>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { cards, collectCard } from "@/api/api";
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { Notify } from "vant";
const route = useRoute();
const dataSearch = reactive({
  searchWord: [],
  search: "",
  isShow: true,
  direcrtion: [],
  isDirection: 0,
});
const cardsInfo = ref({
  items: [],
});
// const cardsNum = ref("");

let getInfoParams = {
  page: 1,
  limit: 10,
};
let isLoading = false;
const getInfo = async () => {
  try {
    const resp = await cards(route.query.id, getInfoParams);
    cardsInfo.value.items = cardsInfo.value.items.concat(resp.data.items);
    cardsInfo.value.total = resp.data.total;
    isLoading = false;
    // const num = await infor(route.query.id);
    // cardsNum.value = num.data;
  } catch (err) {
    console.log(err);
  }
};

const searchCard = async () => {
  try {
    const resp = await cards(route.query.id, { search: dataSearch.search });
    dataSearch.searchWord = resp.data;
    console.log(dataSearch.searchWord);
    if (dataSearch.searchWord.items) {
      dataSearch.isShow = !dataSearch.isShow;
    }
  } catch (err) {
    console.log(err);
  }
};

const cardCollect = async (id, i) => {
  try {
    await collectCard(id);
    isCol(i);
  } catch (err) {
    console.log(err);
  }
};
const isCol = async (i) => {
  if (!cardsInfo.value.items[i].is_collect) {
    Notify({
      message: "收藏成功",
      color: "#FFFFFF",
      background: "#12BFA2",
    });
  } else {
    Notify("取消收藏");
  }
};
const showPopover = ref(false);
const actions = [{ text: "首字母排序", icon: "add-o" }];
const direction = async () => {
  try {
    const resp = await cards(route.query.id, { direction: "asc" });
    dataSearch.direction = resp.data;
    console.log(dataSearch.direction.items);
    if (dataSearch.direction) {
      dataSearch.isDirection = !dataSearch.isDirection;
      console.log(dataSearch.isDirection);
    }
  } catch (err) {
    console.log(err);
  }
};
const scroll = () => {
  if (cardsInfo.value.items.length === cardsInfo.value.total) {
    return;
  }

  // 距离底部200px时加载一次
  let bottomOfWindow =
    document.documentElement.offsetHeight -
      document.documentElement.scrollTop -
      window.innerHeight <=
    200;
  if (bottomOfWindow && !isLoading) {
    isLoading = true;
    getInfoParams.page++;
    getInfo();
  }
};
getInfo();
window.onscroll = () => {
  scroll(cardsInfo);
};
</script>
<style scoped>
.search {
  border-radius: 0.75rem;
  background-color: white;
  width: 100%;
  height: 3rem;
  overflow: hidden;
  padding: 0;
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

.select-button {
  width: 1.25rem;
}
.select-photo {
  width: 1.25rem;
  height: 1.25rem;
}
.search[data-v-c0875c5e] {
  width: 19rem;
}
</style>
<style>
.van-search__content {
  background: #ffffff;
}
.van-button__content {
  width: 1.25rem;
}
.van-button--primary {
  background: #f0f4f5;
  border: 0;
}
.van-popover__action {
  width: 9rem;
}
.van-button--normal {
  padding: 0;
}
</style>

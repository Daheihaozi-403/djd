<template>
  <div class="flex box1 justify-between mb-3">
    <div :class="state1.isFree ? 'hover' : 'box2'" @click="changeIsFree1">
      全部卡片（{{ cardsInfo.total }}）
    </div>
    <div :class="state1.isFree ? 'box2' : 'hover'" @click="changeIsFree1">
      重点卡片（{{ cardsInfo.total }}）
    </div>
  </div>

  <ul>
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
            <div>
              <span class="text-xl font-semibold">{{ item.front }}</span>
            </div>
            <div class="flex">
              <img class="mr-4" :src="require(`../../assets/wordcard1.png`)" />
              <img class="" :src="require(`../../assets/wordcard2.png`)" />
            </div>
          </div>
          <div class="word-translate">
            {{ item.back }}
          </div>
        </van-cell>
        <template #right>
          <div class="ml-6 mt-10">
            <van-button square type="danger" class="word-button button-mr">
              <img src="../../assets/WordButton1.png" alt="" />
            </van-button>
            <van-button square type="primary" class="word-button">
              <img src="../../assets/WordButton2.png" alt="" />
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
import { cards } from "@/api/api";
// 接收父组件传递过来的值
const bookId = defineProps(["value"]);
const cardsInfo = ref("");
const getInfo = async () => {
  try {
    const resp = await cards(bookId.value);
    cardsInfo.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

getInfo();
var state1 = reactive({
  isFree: true,
});
const changeIsFree1 = () => {
  state1.isFree = !state1.isFree;
};

// const newuser = [
//   {
//     num: "001",
//     word: "affiliate",
//     phonetic: "/ә’filieit/",
//     translate: "vt. 附属,接纳 vi. 有关",
//   },
//   {
//     num: "002",
//     word: "affiliate",
//     phonetic: "/ә’filieit/",
//     translate: "vt. 附属,接纳 vi. 有关",
//   },
//   {
//     num: "003",
//     word: "affiliate",
//     phonetic: "/ә’filieit/",
//     translate: "vt. 附属,接纳 vi. 有关",
//   },
//   {
//     num: "004",
//     word: "affiliate",
//     phonetic: "/ә’filieit/",
//     translate: "vt. 附属,接纳 vi. 有关",
//   },
//   {
//     num: "005",
//     word: "affiliate",
//     phonetic: "/ә’filieit/",
//     translate: "vt. 附属,接纳 vi. 有关",
//   },
//   {
//     num: "006",
//     word: "affiliate",
//     phonetic: "/ә’filieit/",
//     translate: "vt. 附属,接纳 vi. 有关",
//   },
// ];
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
</style>

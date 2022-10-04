<template>
  <div :class="myInfo.items ? 'flex mr-2 overflow-x-auto over-box' : 'mb-4'">
    <div
      v-for="(item, index) in booksRecommend"
      :key="index"
      :value="item.value"
      class="recommend-box"
    >
      <router-link
        :to="{
          path: '/sudy',
          query: {
            id: item.id,
          },
        }"
      >
        <div class="bg-white pt-4 pl-4 pr-2 rounded-2xl">
          <div class="flex mb-4 justify-between relative">
            <div class="flex">
              <div class="mr-4">
                <img :src="item.cover" alt="" class="cover" />
              </div>
              <div>
                <div class="text-sm font-semibold mb-1">
                  {{ item.name }}
                </div>
                <div class="text-xs mb-1">{{ item.recommend }}</div>
                <div class="flex">
                  <tag
                    color="#F4F8F5"
                    text-color="#868887"
                    class="tag mr-1 mb-1"
                    v-for="(item, index) in item.tags.split(',')"
                    :key="index"
                    :value="item.value"
                    >{{ item }}</tag
                  >
                </div>
              </div>
            </div>
            <div class="absolute -top-4 -right-2">
              <img src="../../assets/Group.png" v-if="item.price > 0" alt="" />
            </div>
          </div>
          <div class="bor-bot"></div>
          <div class="flex ml-2 mt-2 justify-between pb-2">
            <div class="flex">
              <img
                :src="item.user.avatar"
                alt=""
                class="content-center rounded-full mr-2 user-avatar"
              />
              <span
                class="text-xs font-normal content-center leading-6 color-gr"
                >{{ item.user.name }}</span
              >
            </div>
            <div
              class="text-xs font-medium content-center mr-2 leading-6 color-gr"
            >
              {{ item.entry_num }}个卡片
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { Tag } from "vant";
import { recommend, myBooks } from "@/api/api";

import { ref } from "vue";
const booksRecommend = ref("");
const myInfo = ref("");

const getBooks = async () => {
  try {
    const resp = await recommend();
    const text = await myBooks();
    booksRecommend.value = resp.data;
    myInfo.value = text.data;
  } catch (err) {
    console.log(err);
  }
};

getBooks();
</script>
<style scope>
.over-box {
  height: 10.375rem;
}
.recommend-box {
  width: 19rem;
  min-width: 19rem;
  height: 8.375rem;
  min-height: 8.375rem;
}
.over-box > .recommend-box {
  margin-right: 0.5rem;
}
.over-box > .recommend-box:nth-last-child(1) {
  margin-right: 0;
}
.cover {
  height: 4rem;
  width: 4rem;
  border-radius: 1rem;
}
.tag {
  height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.3rem;
}

.bor-bot {
  background: #edeff5;
  height: 1px;
}

.color-gr {
  color: #8c8c8c;
}
.user-avatar {
  height: 1.5rem;
  width: 1.5rem;
}
</style>

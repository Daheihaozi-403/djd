<template>
  <div v-if="booksRecommend.items">
    <div class="text-normal font-semibold ml-4 mb-2">我的学习集</div>
    <div
      v-for="(item, index) in booksRecommend.items"
      :key="index"
      class="mb-4"
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
                <div class="flex" v-show="item.tags">
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
import { myBooks } from "@/api/api";

import { ref } from "vue";
const booksRecommend = ref({});

const getBooks = async () => {
  try {
    const resp = await myBooks();
    booksRecommend.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

getBooks();
</script>

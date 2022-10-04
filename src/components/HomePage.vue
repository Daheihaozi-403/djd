<template>
  <div class="text-normal font-semibold text-center mt-4 mb-7">学习</div>
  <div class="mx-4">
    <div>
      <div
        v-if="!booksRecommend.items"
        class="flex bg-white rounded-2xl p-6 pr-5 justify-between mb-6 items-end"
      >
        <div class="">
          <div class="text-normal font-semibold mb-4">
            请先创建或者查找学习集
          </div>
          <router-link to="/create/infor">
            <div>
              <div class="text-base font-bold px-5 button-width">
                创建学习集
              </div>
            </div>
          </router-link>
        </div>
        <img src="@/assets/Frame.png" style="height: fit-content" alt="" />
      </div>
      <div v-else class="mb-4">
        <div class="bg-white p-4 rounded-2xl mb-4">
          <div class="flex mb-4 justify-between relative">
            <div class="flex">
              <div class="mr-4">
                <img :src="recentBook.book.cover" alt="" class="cover" />
              </div>
              <div>
                <div class="text-sm font-semibold mb-1">
                  {{ recentBook.book.name }}
                </div>
                <div class="text-xs mb-1">{{ recentBook.book.recommend }}</div>
                <div class="flex">
                  <div
                    class="tag-box mr-1 mb-1"
                    v-for="(item, index) in recentBook.book.tags.split(',')"
                    :key="index"
                  >
                    <span class="tag-text"> {{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bor-bot mb-4"></div>
          <div class="rounded-2xl p-4 schedule-box">
            <div class="flex justify-between">
              <van-progress
                :percentage="75"
                color="#1CC8AB"
                :show-pivot="false"
                track-color="white"
                stroke-width="0.5rem"
                class="schedule"
              />
              <span class="text-sm font-bold"
                >{{
                  (
                    (recentBook.know / (recentBook.know + recentBook.unknow)) *
                    100
                  ).toFixed(0)
                }}%</span
              >
            </div>
            <div class="flex justify-between my-3">
              <div class="flex">
                <img
                  src="@/assets/recentTime.png"
                  alt=""
                  class="recentIcon mr-2"
                />
                <span class="text-xs schedule-font">已学习3天5小时</span>
              </div>
              <div class="text-xs schedule-font">
                {{ recentBook.know }}/{{ recentBook.know + recentBook.unknow }}
              </div>
            </div>
            <router-link
              :to="{
                path: '/sudy',
                query: {
                  id: recentBook.book.id,
                },
              }"
            >
              <div class="schedule-button py-1">
                <span>开始学习</span><van-icon name="play" color="#12BFA2" />
              </div>
            </router-link>
          </div>
        </div>
        <div class=""></div>
      </div>
    </div>

    <div class="text-normal font-semibold ml-4 mb-2">推荐学习集</div>

    <div class="mb-16">
      <note-book />

      <div>
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
                    <img
                      src="@/assets/Group.png"
                      v-if="item.price > 0"
                      alt=""
                    />
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
      </div>
    </div>

    <TabbarBottom active1="homePage"></TabbarBottom>
  </div>
</template>

<script setup>
import NoteBook from "./common/NoteBook.vue";
import TabbarBottom from "./common/TabbarBottom.vue";
import { Tag } from "vant";
import { setUser } from "@/utils/helpers";
import { login, myBooks, recent } from "@/api/api";
import { ref } from "vue";

const recentBook = ref("");
const booksRecommend = ref("");
const goLogin = async () => {
  try {
    const resp = await login();
    setUser(resp.data);

    getBooks();
  } catch (err) {
    console.log(err);
  }
};
const getBooks = async () => {
  try {
    const text = await myBooks();
    const resp = await recent();
    booksRecommend.value = text.data;
    recentBook.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

goLogin();
</script>
<style scoped>
.button-width {
  border-radius: 1rem;
  background-color: #12bfa2;
  color: white;
  text-align: center;
  padding: 0.25rem 1rem;
  width: 7rem;
  min-width: 7rem;
  white-space: nowrap;
}
.cover {
  height: 4rem;
  width: 4rem;
  border-radius: 1rem;
}
.tag-box {
  height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.3rem;
  background-color: rgb(244, 248, 245);

  text-align: center;
}
.tag-text {
  color: rgb(134, 136, 135);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.5rem;
}
.bor-bot {
  background: #edeff5;
  height: 1px;
}
.schedule-box {
  background: #eaf9f0;
}
.schedule {
  width: 14rem;
  margin-top: auto;
  margin-bottom: auto;
}
.recentIcon {
  width: 0.8rem;
  height: 0.8rem;
}
.schedule-font {
  color: #5e6460;
}
.schedule-button {
  border: 0.0625rem solid #12bfa2;
  border-radius: 1rem;
  color: #12bfa2;
  text-align: center;
}
</style>

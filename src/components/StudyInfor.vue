<template>
  <div class="mx-4 mt-4">
    <div class="text-normal font-semibold text-center mb-7">学习集详情</div>

    <img :src="booksInfo.cover" alt="" class="mb-4 rounded-2xl" />
    <div class="infor-box mb-4">
      <div class="flex justify-between infor-box-title">
        <span> {{ booksInfo.name }}</span>
        <div class="flex">
          <img
            src="../assets/studyinforIcon1.png"
            alt=""
            class="icon-study mr-4"
          />
          <van-popover
            v-model:show="showPopover"
            :actions="actions"
            class="css-display"
            placement="bottom-end"
            @select="onSelect"
          >
            <template #reference>
              <van-button type="primary" class="bg-display">
                <img
                  src="../assets/studyinforIcon2.png"
                  alt=""
                  class="icon-study mr-4"
              /></van-button>
            </template>
          </van-popover>

          <img src="../assets/studyinforIcon3.png" alt="" class="icon-study" />
        </div>
      </div>
      <div class="infor-box-body pt-2">
        <p class="body-title mb-2">
          {{ booksInfo.recommend }}
        </p>
        <p class="body-p leading-5">
          {{ booksInfo.describe }}
        </p>
        <div class="flex mt-4">
          <tag
            class="body-p leading-4 mr-2 infor-tag mb-4"
            v-for="(item, index) in booksInfo.tags.split(',')"
            :key="index"
            :value="item.value"
            >{{ item }}</tag
          >
        </div>
      </div>
      <div class="flex justify-between user-box">
        <div class="flex">
          <img
            class="mr-4 user-photo rounded-full"
            :src="booksInfo.user.avatar"
          />
          <div class="maintainCarCon">
            <div class="text-xs leading-4 mb-1">
              {{ booksInfo.user.name }}
            </div>
            <div class="text-xs leading-4 color-gray">
              加入学习 {{ booksInfo.user.created_at_zh }}
            </div>
          </div>
        </div>
        <div class="text-xs leading-4 color-gray">
          创建于 {{ booksInfo.created_at_zh }}
        </div>
      </div>
      <div v-if="isTrue.isFree">
        <van-dialog v-model:show="show" title="标题" show-cancel-button>
          <img
            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
          />
        </van-dialog>
      </div>
    </div>
    <div class="join-user mb-6">
      <div class="flex justify-between mb-4">
        <span class="text-sm font-semibold">加入的用户</span>
        <router-link
          :to="{
            path: '/join',
            query: {
              id: route.query.id,
            },
          }"
          class="text-sm font-medium"
          >查看所有</router-link
        >
      </div>
      <ul class="flex justify-between">
        <li
          v-for="(item, index) in newUsers.items.slice(0, 5)"
          :key="index"
          class="new-user"
        >
          <img :src="item.avatar" />
          <div class="text-xs leading-5 text-center">{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <word-card :value="doc" />
    <div class="my-8">
      <div class="text-center font-medium mb-8 color-green">查看全部卡片</div>
      <div
        class="flex justify-center font-bold color-yellow button-bottom bg-yellow mb-4"
      >
        <img src="../assets/studybottom.png" alt="" class="button-img" />
        感谢作者
      </div>
      <div class="text-center font-bold text-white button-bottom bg-green">
        加入学习
      </div>
    </div>
  </div>
</template>
<script setup>
import WordCard from "./common/WordCard";
import { ref } from "vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { infor, users } from "@/api/api";

const route = useRoute();
const booksInfo = ref("");
const newUsers = ref("");
const getInfo = async () => {
  try {
    const resp = await infor(route.query.id);
    const user = await users(route.query.id);
    booksInfo.value = resp.data;
    newUsers.value = user.data;
  } catch (err) {
    console.log(err);
  }
};
getInfo();
const showPopover = ref(false);
const actions = [
  {
    text: "编辑",
    icon: "add-o",
    imageUrl: require("../assets/studyright.png"),
  },
  { text: "删除", icon: "delete", img: "../assets/studyright.png" },
];
var isTrue = reactive({
  isFree: false,
});

const onSelect = (action) => {
  if (action.text == "删除") {
    isTrue.isFree = !isTrue.isFree;
  }
};
const show = ref(false);
const doc = ref(route.query.id);
</script>
<style scoped>
.infor-box {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.25rem 1rem;
}
.infor-box-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 135%;
  padding-bottom: 0.75rem;
  border-bottom: 0.0625rem solid #edeff5;
}
.infor-box-body {
  border-bottom: 0.0625rem solid #edeff5;
}
.body-title {
  font-size: 1rem;
  line-height: 1.375rem;
}
.body-p {
  font-size: 0.75rem;

  color: #8c8c8c;
}
.icon-study {
  width: 1.625rem;
  height: 1.625rem;
}
.infor-tag {
  background: #f4f8f5;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
}
.user-box {
  padding-top: 1rem;
}
.new-user {
  height: 4.25rem;
  width: 3rem;
}
.user-photo {
  width: 2.5rem;
  height: 2.5rem;
}
.color-gray {
  color: #8c8c8c;
}
.join-user {
  padding: 1rem;
  background: #ffffff;
  border-radius: 1rem;
}
.color-green {
  color: #12bfa2;
}
.color-yellow {
  color: #ffb800;
}
.button-bottom {
  border-radius: 6.25rem;
  padding: 0.6875rem;
}
.button-img {
  width: 1rem;
  height: 0.625rem;
  margin: auto 0.75rem;
}
.bg-yellow {
  background: #f3eec4;
}
.bg-green {
  background: #12bfa2;
}
.bg-display {
  background-color: transparent;
  border: 0;
  padding: 0;
  height: 1.625rem;
  width: 1.625rem;
  border-radius: 50%;
  margin-right: 1rem;
  position: relative;
  top: -0.25rem;
}
.css-display {
  height: 1.625rem;
  padding: 0;
  margin: 0;
  position: absolute;
}
</style>
<style>
.van-popover__content {
  width: 19rem;
}
.van-popover__action {
  width: 100%;
}
</style>

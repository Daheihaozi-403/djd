<template>
  <div class="mx-4 mt-4">
    <div class="text-normal font-semibold text-center mb-7">学习集详情</div>
    <img src="../assets/studyinfortop.png" alt="" class="mb-4" />
    <div class="infor-box mb-4">
      <div class="flex justify-between infor-box-title">
        <span>英语6级学习集</span>
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
        <p class="body-title mb-2">英语考级保过最佳助力</p>
        <p class="body-p leading-5">
          英语6级学习级详细介绍内容，英语6级学习级详细介绍内容，英语6级学习级详细介绍内容，英语6级学习级详细介绍内容，英语6级学习级。
        </p>
        <div class="flex mt-4">
          <div class="body-p leading-4 mr-2 infor-tag mb-4">英语</div>
          <div class="body-p leading-4 mr-2 infor-tag mb-4">六级</div>
          <div class="body-p leading-4 mr-2 infor-tag mb-4">考级</div>
        </div>
      </div>
      <div class="flex justify-between user-box">
        <div class="flex">
          <img
            class="mr-4 user-photo"
            :src="require(`../assets/newuser.png`)"
          />
          <div class="maintainCarCon">
            <div class="text-xs leading-4 mb-1">创建者：小明</div>
            <div class="text-xs leading-4 color-gray">加入学习105天</div>
          </div>
        </div>
        <div class="text-xs leading-4 color-gray">创建于1个月前</div>
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
        <router-link to="/join" class="text-sm font-medium"
          >查看所有</router-link
        >
      </div>
      <ul class="flex justify-between">
        <li v-for="(item, index) in newUsers" :key="index">
          <div>
            <img
              class="user-photo"
              :src="require(`../assets/${item.icon}.png`)"
            />
            <div class="text-xs leading-5 text-center">{{ item.username }}</div>
          </div>
        </li>
      </ul>
    </div>
    <word-card></word-card>
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
const newUsers = [
  {
    icon: "userphoto",
    username: "Phillip",
  },
  {
    icon: "userphoto",
    username: "Phillip",
  },
  {
    icon: "userphoto",
    username: "Phillip",
  },
  {
    icon: "userphoto",
    username: "Phillip",
  },
  {
    icon: "userphoto",
    username: "Phillip",
  },
];
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

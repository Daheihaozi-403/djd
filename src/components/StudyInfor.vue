<template>
  <div class="mx-4 mt-4">
    <div class="text-normal font-semibold text-center mb-7">学习集详情</div>

    <img :src="booksInfo.cover" alt="" class="mb-4 rounded-2xl" />
    <div class="infor-box mb-4">
      <div class="flex justify-between infor-box-title">
        <span> {{ booksInfo.name }}</span>
        <div class="flex">
          <div v-if="state.idUser == state.idMy">
            <van-popover
              v-model:show="showPopover"
              :actions="actions"
              class="css-display"
              placement="bottom-end"
              @select="deleteBook"
            >
              <template #reference>
                <van-button type="primary" class="bg-display">
                  <img
                    src="@/assets/studyinforIcon1.png"
                    alt=""
                    class="icon-study"
                /></van-button>
              </template>
            </van-popover>
          </div>
          <img
            :src="
              state.isCollect
                ? require('../assets/collect.png')
                : require('../assets/studyinforIcon3.png')
            "
            alt=""
            class="icon-study ml-2"
            @click="collectBook"
          />
        </div>
      </div>
      <div
        class="infor-box-body pt-2"
        v-if="booksInfo.describe || booksInfo.recommend || state.bookTage"
      >
        <p class="body-title mb-2" v-if="booksInfo.recommend">
          {{ booksInfo.recommend }}
        </p>
        <p class="body-p leading-5" v-if="booksInfo.describe">
          {{ booksInfo.describe }}
        </p>
        <div class="flex mt-4" v-if="state.isFree">
          <tag
            class="body-p leading-4 mr-2 infor-tag mb-4"
            v-for="(item, index) in state.bookTage"
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
            :src="booksInfo.user?.avatar"
          />
          <div class="maintainCarCon">
            <div class="text-xs leading-4 mb-1">
              {{ booksInfo.user?.name }}
            </div>
            <div class="text-xs leading-4 color-gray">
              加入学习 {{ booksInfo.user?.created_at_zh }}
            </div>
          </div>
        </div>
        <div class="text-xs leading-4 color-gray">
          创建于 {{ booksInfo.created_at_zh }}
        </div>
      </div>
    </div>
    <div class="join-user mb-6" v-if="state.usersTrue">
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
          v-for="(item, index) in state.usersNum"
          :key="index"
          class="new-user"
        >
          <img :src="item.avatar" class="rounded-full" />
          <div class="text-xs leading-5 text-center user-name">
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
    <word-card :value="route.query.id" />
    <div class="my-8">
      <router-link
        :to="{
          path: '/card',
          query: {
            id: route.query.id,
          },
        }"
      >
        <div class="text-center font-medium mb-8 color-green">
          查看全部卡片
        </div></router-link
      >
    </div>
  </div>
</template>
<script setup>
import WordCard from "./common/WordCard";
import { ref } from "vue";
import { reactive } from "vue";
import { infor, users, delBooks, collect } from "@/api/api";
import { useRoute } from "vue-router";
import { Notify } from "vant";
import { getUser } from "@/utils/helpers";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const booksInfo = ref({});
const newUsers = ref({});

var state = reactive({
  isFree: true,
  usersTrue: true,
  bookTage: "",
  usersNum: [],
  isCollect: false,
  idUser: "",
  idMy: "",
});
const myId = async () => {
  try {
    const resp = await getUser();
    state.idMy = resp.id;
  } catch (err) {
    console.log(err);
  }
};

const getInfo = async () => {
  try {
    const resp = await infor(route.query.id);
    const user = await users(route.query.id);
    booksInfo.value = resp.data;
    newUsers.value = user.data;
    state.isCollect = booksInfo.value.is_collect;
    state.idUser = booksInfo.value.user_id;
    tagNone();
    userNone();
  } catch (err) {
    console.log(err);
  }
};
const tagNone = () => {
  if (booksInfo.value.tags) {
    state.bookTage = booksInfo.value.tags.split(",");
  } else {
    state.isFree = !state.isFree;
  }
};

const userNone = () => {
  if (newUsers.value.items) {
    state.usersNum = newUsers.value.items.slice(0, 5);
  } else {
    state.usersTrue = !state.usersTrue;
  }
};

const showPopover = ref(false);
const actions = [
  { text: "编辑", icon: "delete", num: 0 },
  { text: "删除", icon: "delete", num: 1 },
];

const deleteBook = async () => {
  if (!actions.num) {
    router.push({ path: "/change/book", query: { id: route.query.id } });
  } else {
    try {
      await delBooks(route.query.id);
      Notify({
        message: " 删除成功",
        color: "#FFFFFF",
        background: "#12BFA2",
      });
    } catch (err) {
      console.log(err);
    }
  }
};
const collectBook = async () => {
  try {
    state.isCollect = !state.isCollect;
    await collect(route.query.id);
  } catch (err) {
    console.log(err);
  }
};

getInfo();
myId();
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
  position: relative;
  top: -0.25rem;
}
.css-display {
  height: 1.625rem;
  padding: 0;
  position: absolute;
}
.user-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
<style>
.van-popover__content {
  width: 16rem;
}
.van-popover__action {
  width: 100%;
}
.van-popover__wrapper {
  width: 2rem;
}
.van-button__content {
  width: 2.25rem;
}
</style>

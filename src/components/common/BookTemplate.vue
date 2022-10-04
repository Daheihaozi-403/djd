<template>
  <div
    v-if="!myInfo.items"
    class="flex bg-white rounded-2xl p-6 pr-5 justify-between mb-6 items-end"
  >
    <div class="">
      <div class="text-normal font-semibold mb-4">请先创建或者查找学习集</div>
      <router-link to="/create/infor">
        <div>
          <van-button
            color="#12BFA2"
            round
            type="success"
            size="small"
            class="text-base font-bold px-5 button-width"
          >
            创建学习集</van-button
          >
        </div>
      </router-link>
    </div>
    <img src="../../assets/Frame.png" style="height: fit-content" alt="" />
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
            <img src="@/assets/recentTime.png" alt="" class="recentIcon mr-2" />
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

  <div class="text-normal font-semibold ml-4 mb-2">推荐学习集</div>
</template>
<script setup>
import { myBooks, recent } from "@/api/api";
import { ref } from "vue";

const myInfo = ref("");
const recentBook = ref("");
const getBooks = async () => {
  try {
    const text = await myBooks();
    const resp = await recent();
    myInfo.value = text.data;
    recentBook.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};
getBooks();
</script>
<style scope>
.button-width {
  width: 6rem;
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

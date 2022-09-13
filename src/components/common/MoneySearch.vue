<template>
  <div class="flex">
    <van-search v-model="value" background="#f0f4f5" class="money-search" />
    <!-- <van-popover
      v-model:show="showPopover"
      :actions="actions"
      :close-on-click-action="false"
      placement="bottom-end"
    >
      >
      <template #reference>
        <van-button type="primary">
          <img src="../../assets/sort-descending.png" alt="" />
        </van-button>
      </template>
    </van-popover> -->
    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      :close-on-click-action="false"
      placement="bottom-end"
    >
      <template #reference>
        <van-button type="primary"
          ><img
            src="../../assets/sort-descending.png"
            alt=""
            class="select-photo"
        /></van-button>
      </template>
    </van-popover>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const showPopover = ref(false);
const actions = [
  {
    text: "时间早-晚",
    icon: "https://hakaimg.com/i/2022/09/05/jvrshv.png",
  },
  { text: "时间晚-早", icon: "https://hakaimg.com/i/2022/09/05/jwgcyn.png" },
  { text: "只看收入", icon: "https://hakaimg.com/i/2022/09/05/pdcm0b.png" },
  { text: "只看支出", icon: "https://hakaimg.com/i/2022/09/05/pdnqf3.png" },
];
</script>

<style scope>
.money-search {
  border-radius: 0.75rem;
  background-color: white;
  width: 100%;
  height: 3rem;
  overflow: hidden;
  padding: 0;
}
.select-photo {
  height: 2rem;
  width: 2.3rem;
}
.van-button--primary {
  background-color: #f0f4f5;
  border: 0;
}
.van-popover__action {
  width: 8.125rem;
  height: 3.4375rem;
  border-radius: 0.5rem;
  margin: 0.625rem;
  border-bottom: 0.0625rem solid #edeff5;
}
.van-search__content {
  background-color: white;
}
/* root {
  --van-search-content-background-color: #ffffff;
} */
.van-popover__action-text {
  font-size: 1rem;
}
.hover {
  background-color: rgb(245, 103, 8);
  color: aquamarine;
}
</style>

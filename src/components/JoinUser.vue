<template>
  <div class="mx-4">
    <div class="text-normal font-semibold text-center mt-4 mb-7">
      加入的用户
    </div>

    <ul class="input">
      <li
        class="flex justify-between user-box mb-4"
        v-for="(item, index) in newuser"
        :key="index"
      >
        <div class="flex">
          <img
            class="mr-4 user-photo"
            :src="require(`../assets/${item.icon}.png`)"
          />
          <div class="maintainCarCon">
            <div class="text-xs leading-4 mb-1">{{ item.username }}</div>
            <div class="text-xs leading-4 color-gray">
              {{ item.time }}
            </div>
          </div>
        </div>
        <div class="text-xs leading-4 color-gray">{{ item.study }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const newuser = [
  {
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 2000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 3000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 4000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 5000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 6000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 7000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 8000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 9000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
  {
    value: 10000,
    icon: "newuser",
    username: "Julia",
    time: "加入学习105天",
    study: "已学习65%",
  },
];
</script>
<style scoped>
.user-box {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
}
.user-photo {
  width: 2.5rem;
  height: 2.5rem;
}
.color-gray {
  color: #8c8c8c;
}
</style>

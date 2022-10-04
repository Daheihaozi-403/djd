<template>
  <div class="mx-4">
    <div class="text-normal font-semibold text-center mt-4 mb-7">
      加入的用户
    </div>

    <ul class="input">
      <li
        class="flex justify-between user-box mb-4"
        v-for="(item, index) in newUsers.items"
        :key="index"
      >
        <div class="flex">
          <img class="mr-4 user-photo" :src="item.avatar" />
          <div class="maintainCarCon">
            <div class="text-xs leading-4 mb-1">{{ item.name }}</div>
            <div class="text-xs leading-4 color-gray">
              {{ item.join_day }}
            </div>
          </div>
        </div>
        <div class="text-xs leading-4 color-gray">{{ item.study_day }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { users } from "@/api/api";
import { useRoute } from "vue-router";
const route = useRoute();

const newUsers = ref("");

const getInfo = async () => {
  try {
    const user = await users(route.query.id);

    newUsers.value = user.data;
  } catch (err) {
    console.log(err);
  }
};
console.log(newUsers);
getInfo();
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

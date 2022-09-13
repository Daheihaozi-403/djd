<template>
  <div class="flex mb-6">
    <div class="my-photo">
      <img :src="myInfo.avatar" alt="" />
      <img src="../../assets/Group-26566.png" alt="" class="ellipse" />
      <img src="../../assets/Icon5.png" alt="" class="rectangle" />
    </div>
    <div class="pt-2">
      <div class="font-bold text-2xl">
        {{ myInfo.name }}
      </div>
      <div class="font-medium text-xs text-cgr">
        加入学习{{ myInfo.study_day }}天
      </div>
    </div>
  </div>
  <div class="my-money flex justify-between">
    <div class="flex opacity-100">
      <div class="mr-2">
        <img src="../../assets/Income.png" alt="" />
      </div>

      <div class="opacity-100 my-rmb">
        <p>¥4,500</p>
        <p>我的收入</p>
      </div>
    </div>
    <router-link to="/my/money">
      <div class="flex mt-2">
        <span class="mr-2">收支详情</span>
        <img src="../../assets/Arrow-Right.png" alt="" class="m-pho" /></div
    ></router-link>
  </div>
</template>
<script setup>
import { getUser } from "@/utils/helpers";
import { ref } from "vue";

const myInfo = ref("");
myInfo.value = getUser();
</script>
<style scope>
.my-photo {
  width: 4.1rem;
  height: 4.1rem;
  background-color: white;
  border-radius: 50%;
  margin-right: 1.5rem;
  position: relative;
}

.ellipse {
  position: absolute;
  top: 0;
}

.rectangle {
  position: absolute;
  bottom: 0;
  right: 0;
}

.text-cgr {
  color: #848687;
}

.my-money {
  width: 100%;
  background: #dcf6f1;
  padding-top: 1.25rem;
  padding-left: 1.15rem;
  padding-right: 0.875rem;
  border-radius: 1rem;
  height: 5rem;
}

.my-rmb {
  color: #12bfa2;
}

.my-rmb p:nth-child(1) {
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 120%;
}

.my-rmb p:nth-child(2) {
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 140%;
  color: #5dd1be;
}

.my-money span {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 100%;
  color: #12bfa2;
}

.m-pho {
  height: 1rem;
  width: 1rem;
}
</style>

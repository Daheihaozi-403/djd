<template>
  <div class="mx-4">
    <div class="text-normal font-semibold text-center mt-4 mb-7">
      创建学习集2
    </div>
    <create-tab class="mb-4" @changeIsFree1="clickEven" />
    <div v-if="!result">
      <div class="px-4 mb-1 text-xs">001</div>
      <card-infor class="mb-4" />
      <div class="px-4 mb-1 text-xs">002</div>
      <card-infor />
      <div>
        <div class="button-style1">
          <van-icon name="plus" size="0.5rem" />
        </div>
        <div class="px-4">
          <div class="button1 mb-4">存为草稿</div>
          <div class="button2 mb-10">保存发布</div>
        </div>
      </div>
    </div>
    <div v-if="result" class="mt-10">
      <img src="../assets/addphoto1.png" alt="" class="mb-16" />
      <div class="mb-4 text-center">复制链接在浏览器中打开</div>
      <input
        type="text"
        class="mb-6 input1"
        readonly="readonly"
        placeholder="http://localhost:8080/create/add#/create/card"
      />
      <div class="m-4 button3" @click="copy = !copy">
        <span v-if="!copy">复制链接</span>
        <span v-if="copy"
          ><van-icon name="success" color="#FFFFFF" class="mr-1" />已复制</span
        >
      </div>
      <div class="button4" @click="end = !end">
        <span v-if="!end">开始同步</span>
        <span v-if="end">正在同步中...</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import CreateTab from "./common/CreateTab";
import CardInfor from "./common/CardInfor";

import { ref } from "vue";
const result = ref("");
const clickEven = (val) => {
  console.log(val);
  result.value = val.content;
};
const copy = ref(0);
const end = ref(0);
</script>
<style scoped>
.button-style1 {
  width: 3.625rem;
  background: #ffffff;
  border-radius: 1rem;
  text-align: center;
  padding: 0.5rem 1.5rem;

  margin: 7.75rem auto 2.5rem auto;
  line-height: 0.5rem;
}
.button1 {
  width: 100%;
  background: #cfece8;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #12bfa2;
  padding: 0.6875rem 0;
}
.button2 {
  width: 100%;
  background: #12bfa2;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  padding: 0.6875rem 0;
}
.input1 {
  width: 100%;
  height: 2.5rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* padding: 0 1.125rem; */
}
.button3 {
  width: 10rem;
  background: #12bfa2;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  padding: 0.6875rem 0;
  margin-left: auto;
  margin-right: auto;
}
.button4 {
  width: 10rem;
  background: #cfece8;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #12bfa2;
  padding: 0.6875rem 0;
  margin-left: auto;
  margin-right: auto;
}
</style>

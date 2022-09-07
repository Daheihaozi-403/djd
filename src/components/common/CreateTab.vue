<template>
  <div class="flex box1 justify-between">
    <div :class="state1.isFree ? 'hover' : 'box2'" @click="changeIsFree1">
      添加卡片
    </div>
    <div :class="state1.isFree ? 'box2' : 'hover'" @click="changeIsFree1">
      批量添加
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { defineEmits } from "vue";

var state1 = reactive({
  isFree: true,
});

let param = {
  content: false,
};
const emit = defineEmits(["changeIsFree1"]);
const changeIsFree1 = () => {
  state1.isFree = !state1.isFree;
  param.content = !param.content;

  //传递给父组件
  emit("changeIsFree1", param);
};
</script>
<style scoped>
.box1 {
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  padding: 0.25rem;
}
.box2 {
  /* background: #ffffff; */
  border-radius: 1rem;
  text-align: center;
  padding: 0.6875rem 0;
  flex: 1;
}
.hover {
  background: #ffffff;
  border-radius: 1rem;
  text-align: center;
  padding: 0.6875rem 0;
  flex: 1;
}
</style>

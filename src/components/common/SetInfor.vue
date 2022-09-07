<template>
  <div class="font-title mb-4">学习集名称</div>
  <div class="mb-4">
    <input
      type="text"
      placeholder="8个字以内"
      class="input-style"
      maxlength="8"
    />
  </div>
  <div class="font-title mb-4">推荐语</div>
  <div class="mb-4">
    <input
      type="text"
      placeholder="一句话推荐，15字以内"
      class="input-style"
      maxlength="15"
    />
  </div>
  <div class="font-title mb-4">详细说明</div>
  <div class="mb-6">
    <input type="text" class="input-style1" />
  </div>
  <div class="font-title mb-4">学习集图片</div>
  <div class="mb-6 flex">
    <div class="relative overflow-hidden set-photo mr-4" @click="changephoto1">
      <img src="../../assets/archive(1).png" alt="" />
      <img
        src="../../assets/Iconsetphoto.png"
        alt=""
        :class="date.isFree1 ? '' : 'icon-setphoto'"
      />
    </div>
    <div class="relative overflow-hidden set-photo mr-4" @click="changephoto2">
      <img src="../../assets/archive(2).png" alt="" />
      <img
        src="../../assets/Iconsetphoto.png"
        alt=""
        :class="date.isFree2 ? '' : 'icon-setphoto'"
      />
    </div>
    <div class="relative overflow-hidden set-photo mr-4" @click="changephoto3">
      <img src="../../assets/archive3.png" alt="" />
      <img
        src="../../assets/Iconsetphoto.png"
        alt=""
        :class="date.isFree3 ? '' : 'icon-setphoto'"
      />
    </div>
    <div class="relative overflow-hidden set-photo mr-4" @click="changephoto4">
      <img src="../../assets/archive4.png" alt="" />
      <img
        src="../../assets/Iconsetphoto.png"
        alt=""
        :class="date.isFree4 ? '' : 'icon-setphoto'"
      />
    </div>
  </div>
  <div class="font-title mb-4">标签</div>
  <div class="mb-6 flex">
    <div class="button-style">英语</div>
    <div class="button-style">六级</div>
    <div class="button-style1 mt-1.5">
      <van-icon name="plus" size="0.62rem" />
    </div>
  </div>
  <div class="font-title mb-4">属性</div>
  <div class="flex mb-8 flex-1">
    <div
      :class="'button-style ' + (state.isFree ? 'hover' : '')"
      @click="changeIsFree"
    >
      免费
    </div>
    <div
      :class="'button-style ' + (!state.isFree ? 'hover' : '')"
      @click="changeIsFree"
    >
      付费
    </div>
    <input type="text" placeholder="0.00" class="input-style2 flex-grow" />
  </div>
  <div class="px-4">
    <div class="button1 mb-4">存为草稿</div>
    <div class="button2 mb-10">保存并创建学习集</div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

var state = reactive({
  isFree: true,
});
const changeIsFree = () => {
  state.isFree = !state.isFree;
};
var date = reactive({
  isFree1: true,
  isFree2: true,
  isFree3: true,
  isFree4: true,
});
const changephoto1 = () => {
  date.isFree1 = !date.isFree1;
};
const changephoto2 = () => {
  date.isFree2 = !date.isFree2;
};
const changephoto3 = () => {
  date.isFree3 = !date.isFree3;
};
const changephoto4 = () => {
  date.isFree4 = !date.isFree4;
};
</script>
<style scoped>
.font-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}
.input-style {
  width: 100%;
  padding: 0.625rem 1rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* color: #a0a2a3; */
}
.input-style1 {
  width: 100%;
  min-height: 7.5rem;
  padding: 0.625rem 1rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* color: #a0a2a3; */
}
.input-style2 {
  /* width: 8.44rem; */
  width: 100%;
  /* height: 2.375rem; */
  padding: 0.5rem 1rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* color: #a0a2a3; */
}
.set-photo {
  height: 4rem;
  width: 4rem;
}
.icon-setphoto {
  position: absolute;
  top: 0;
  right: 0;
}

.button-style {
  background: #ffffff;
  border-radius: 1rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-align: center;
  color: #8e8e93;
  padding: 0.625rem 2rem;
  margin-right: 0.5rem;
  white-space: nowrap;
}

.button-style.hover {
  color: white;
  background-color: #12bfa2;
}

.button-style1 {
  height: 1.625rem;
  background: #ffffff;
  border-radius: 1rem;
  text-align: center;
  padding: 0 1rem;
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
</style>

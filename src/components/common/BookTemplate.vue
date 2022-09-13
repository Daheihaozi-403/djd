<template>
  <div
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
  <div class="text-normal font-semibold ml-4 mb-2">推荐学习集</div>
</template>
<script setup>
// import { Button } from 'vant';

// export default {
//     [Button.name]: {
//         Button
//     }
// }
</script>
<style>
.button-width {
  width: 6rem;
}
</style>

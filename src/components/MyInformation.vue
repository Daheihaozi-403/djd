<template>
  <div class="mx-4">
    <div class="text-normal font-semibold text-center mt-4 mb-7">我的</div>
    <div class="mx-2 mb-6">
      <my-name></my-name>
    </div>
    <my-inforBox></my-inforBox>
    <TabbarBottom active1="myInformation"></TabbarBottom>
  </div>
</template>
<script setup>
import TabbarBottom from "./common/TabbarBottom";
import MyName from "./common/MyName";
import MyInforBox from "./common/MyInforBox";
</script>

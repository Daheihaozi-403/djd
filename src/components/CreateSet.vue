<template>
  <div class="mx-4">
    <div class="text-normal font-semibold text-center mt-4 mb-7">学习</div>
    <create-card />
    <create-book />
  </div>

  <tabbar-bottom active1="createSet"></tabbar-bottom>
</template>
<script setup>
// import { useRouter } from "vue-router";
import TabbarBottom from "./common/TabbarBottom.vue";
import CreateBook from "./common/CreateBook.vue";
import CreateCard from "./common/CreateCard.vue";
</script>

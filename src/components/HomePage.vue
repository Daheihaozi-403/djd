<template>
  <div class="text-normal font-semibold text-center mt-4 mb-7">学习</div>
  <div class="mx-4">
    <book-template />
    <router-link to="/sudy"> <note-book class="mb-4" /></router-link>
    <note-book class="mb-4" />
    <note-book class="mb-4" />

    <note-book class="mb-16"></note-book>
    <TabbarBottom active1="homePage"></TabbarBottom>
  </div>
</template>

<script setup>
import BookTemplate from "./common/BookTemplate";
import NoteBook from "./common/NoteBook.vue";
import TabbarBottom from "./common/TabbarBottom.vue";
import { setUser, getUser } from "@/utils/helpers";
import { login } from "@/api/api";
const goLogin = async (func) => {
  try {
    const resp = await login();
    setUser(resp.data);
    func();
  } catch (err) {
    console.log(err);
  }
};

const getData = () => {
  console.log("getData", getUser());
};

goLogin(getData);
</script>
<style scoped></style>

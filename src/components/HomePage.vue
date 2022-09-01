<template>
  <div class="text-normal font-semibold text-center mt-14 mb-7">学习</div>
  <div class="mx-4">
    <book-template />
    <note-book />
    <note-book />
    <note-book />
    <!-- <router-view /> -->
    <note-book class="mb-24"></note-book>
    <TabbarBottom active1="homePage"></TabbarBottom>
  </div>

</template>

<script>
import BookTemplate from './common/BookTemplate'
import { useRouter } from 'vue-router'
import NoteBook from './common/NoteBook.vue'
import TabbarBottom from './common/TabbarBottom.vue'
import { ref } from 'vue';
export default {
  components: {
    BookTemplate,
    NoteBook,
    TabbarBottom
  },
  setup() {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'home'
      })
    })
    const active = ref('homepage');
  
    return {
      toHome,
      active
    };


  },

}
</script>
<style  scoped>
</style>
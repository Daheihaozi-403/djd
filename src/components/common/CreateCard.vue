<template>
  <router-link to="/create/card">
    <div class="bg-white rounded-2xl p-6 mb-6">
      <div class="flex justify-between mb-4 b-box">
        <span style="color: #12bfa2" class="text-lg font-semibold"
          >创建卡片</span
        >

        <div class="create-box-icon">
          <img src="../../assets/Icon4.png" alt="" />
        </div>
      </div>
      <p class="text-xs text-color-grey">
        单词/句子/知识点，都可以创建为卡片；左滑右滑，随手记忆。
      </p>
    </div>
  </router-link>
</template>
<style scope>
.b-box {
  height: 1.75rem;
}
.create-box-icon {
  height: 1rem;
  width: 1rem;
  padding-top: 0.375rem;
}
.text-color-grey {
  color: #8c8c8c;
}
</style>

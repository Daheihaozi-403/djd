<template>
  <div class="box-1">
    <div class="flex justify-between mb-4">
      <div class="font1">正面</div>
      <input type="text" class="box-2" />
    </div>
    <div class="flex justify-between">
      <div class="font1">背面</div>
      <input type="text" class="box-2" />
    </div>
  </div>
</template>
<style scoped>
.box-1 {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
}
.font1 {
  line-height: 2.5rem;
}
.box-2 {
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  flex: 1rem;
  margin-left: 1rem;
  min-height: 2.5rem;
}
</style>

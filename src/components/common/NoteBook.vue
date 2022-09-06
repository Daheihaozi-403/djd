<template>
  <div class="bg-white pt-4 pl-4 pr-2 rounded-2xl">
    <div class="flex mb-4 justify-between relative">
      <div class="flex">
        <div class="mr-4">
          <img src="../../assets/Rectangle.png" alt="" />
        </div>
        <div>
          <div class="text-sm font-semibold mb-1">英语4级学习集</div>
          <div class="text-xs mb-1">英语考级保过最佳助力</div>
          <div>
            <tag color="#F4F8F5" text-color="#868887" class="tag mr-2"
              >英语</tag
            >
            <tag color="#F4F8F5" text-color="#868887" class="tag mr-2"
              >四级</tag
            >
            <tag color="#F4F8F5" text-color="#868887" class="tag mr-2"
              >考级</tag
            >
          </div>
        </div>
      </div>
      <div class="absolute -top-4 -right-2">
        <img src="../../assets/Group.png" alt="" />
      </div>
    </div>
    <div class="bor-bot"></div>
    <div class="flex ml-2 mt-2 justify-between pb-2">
      <div class="flex">
        <img
          src="../../assets/user-photo.png"
          alt=""
          class="content-center rounded-full mr-2"
        />
        <span class="text-xs font-normal content-center leading-6 color-gr"
          >创建者：张自彬</span
        >
      </div>
      <div class="text-xs font-medium content-center mr-2 leading-6 color-gr">
        200个卡片
      </div>
    </div>
  </div>
</template>
<script setup>
import { Tag } from "vant";
</script>
<style scope>
.tag {
  width: 40px;
  height: 24px;
  padding-left: 0.5rem;
  border-radius: 0.3rem;
}

.bor-bot {
  background: #edeff5;
  height: 1px;
}

.color-gr {
  color: #8c8c8c;
}
</style>

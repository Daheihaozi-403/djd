<template>
    <div class="bg-white mb-4 pt-4 pl-4 pr-2 rounded-2xl">
        <div class="flex mb-4 justify-between relative">
            <div class="flex ">
                <div class="mr-4">
                    <img src="../../assets/Rectangle.png" alt="">
                </div>
                <div>
                    <div class="text-sm font-semibold mb-1">英语4级学习集</div>
                    <div class="text-xs mb-1">英语考级保过最佳助力</div>
                    <div>
                        <tag color="#F4F8F5" text-color="#000000" class="mr-2" style="width: 40px;
height: 24px;background: #F4F8F5;color: #000000;opacity: 0.45;">英语</tag>
                        <!-- <van-tag color="#F4F8F5" text-color="#000000" class="mr-2" style="width: 40px;
height: 24px;background: #F4F8F5;color: #000000;opacity: 0.45;">四级</van-tag>
                        <van-tag color="#F4F8F5" text-color="#000000" class="mr-2" style="width: 40px;
height: 24px;background: #F4F8F5;color: #000000;opacity: 0.45;">考级</van-tag> -->


                    </div>
                </div>
            </div>
            <div class="absolute -top-4 -right-2">
                <img src="../../assets/Group.png" alt="">
            </div>
        </div>
        <div style="background: #EDEFF5; height: 1px;"></div>
        <div class="flex ml-2 mt-2 justify-between pb-2">
            <div class="flex">
                <img src="../../assets/user-photo.png" alt="" class="content-center rounded-full mr-2">
                <span class="text-xs font-normal content-center leading-6" style="opacity: 0.6;">创建者：张自彬</span>
            </div>
            <div class="text-xs font-medium content-center mr-2 leading-6" style="opacity: 0.6;">200个卡片</div>

        </div>
    </div>
</template>
<script setup>
import { Tag } from 'vant';

</script>
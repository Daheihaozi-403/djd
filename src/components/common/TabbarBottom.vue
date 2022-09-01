<template>
    <div>
        <van-tabbar v-model="active" active-color="#12BFA2" inactive-color="rgba(0, 0, 0, 0.25)">
            <van-tabbar-item name="homePage" to="/">
                <span>学习</span>
                <template #icon="props">
                    <van-image :src="props.active ?
                    require('../../assets/Icon1-1.png') : require('../../assets/Icon1.png')" />
                    <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="createSet" to="/createset">
                <span>创建</span>
                <template #icon="props">
                    <van-image :src="props.active ?
                    require('../../assets/Icon2-2.png') : require('../../assets/Icon2.png')" />
                    <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="myInformation" to="/myinformation">
                <span>我的</span>
                <template #icon="props">
                    <van-image :src="props.active ?
                    require('../../assets/Icon3-3.png') : require('../../assets/Icon3.png')" />
                    <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
    active1: String
})

const active = ref(props.active1)

</script>
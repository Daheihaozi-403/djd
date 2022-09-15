<template>
  <div class="text-normal font-semibold text-center mt-4 mb-7">收支详情</div>
  <div class="mx-4">
    <money-search />

    <div
      v-for="(item, index) in moneyInfo.items"
      :key="index"
      :value="item.value"
    >
      <div class="mt-6 mb-4">{{ item.created_at.substring(0, 10) }}</div>

      <div
        class="py-4 pl-5 pr-6 mb-4 flex bg-white rounded-2xl justify-between"
      >
        <div class="flex">
          <div class="pt-photo1">
            <img src="@/assets/paytime1.png" v-if="item.direction == 'out'" />
            <img src="@/assets/Vector.png" v-if="item.direction == 'in'" />
          </div>
          <div>
            <div class="font1">{{ item.title }}</div>
            <div class="flex">
              <div>
                <img
                  src="@/assets/paytime1-1.png"
                  alt=""
                  class="pt-photo2"
                  v-if="item.direction == 'out'"
                />
                <img
                  src="@/assets/paytime2-2.png"
                  alt=""
                  class="pt-photo2"
                  v-if="item.direction == 'in'"
                />
              </div>
              <div class="font2">{{ item.describe }}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="font3">{{ item.price }}</div>
          <div class="font4 text-right">
            {{ item.created_at.substring(11, 19) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MoneySearch from "./common/MoneySearch";
import { price } from "@/api/api";
import { ref } from "vue";
const moneyInfo = ref("");

const getPrice = async () => {
  try {
    const resp = await price();
    moneyInfo.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

getPrice();
</script>
<style scope>
.pt-photo1 {
  margin-right: 1.125rem;
}
.pt-photo2 {
  margin-top: 0.25rem;
  margin-right: 0.5rem;
}
.font1 {
  font-size: 1.125rem;
  font-weight: 600;
}
.font2 {
  font-weight: 400;

  font-size: 0.8125rem;
  color: #a3a4a5;
}
.font3 {
  font-weight: 600;
  text-align: right;
  font-size: 1.125rem;
}
.font4 {
  font-weight: 400;
  font-size: 0.8125rem;
  color: #a3a4a5;
}
</style>

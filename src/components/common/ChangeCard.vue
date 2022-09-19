<template>
  <div class="mx-4">
    <div class="text-normal font-semibold text-center mt-4 mb-7">修改卡片</div>

    <div class="box mb-4">
      <div class="flex justify-between mb-4">
        <div class="font">正面</div>
        <input
          type="text"
          class="input"
          :placeholder="card.front"
          :value="put.front"
        />
      </div>
      <div class="flex justify-between">
        <div class="font">背面</div>
        <input
          type="text"
          class="input"
          :placeholder="card.back"
          :value="put.back"
        />
      </div>
    </div>

    <div>
      <div class="px-4">
        <div class="save-button mb-4" @click="saveCard(put)">保存</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { cardInfor, cardChange } from "@/api/api";
import { ref } from "vue";
const route = useRoute();
const card = ref("");
const put = reactive({
  back: [],
  front: [],
});
const cardInfo = async () => {
  try {
    const resp = await cardInfor(route.query.id);
    card.value = resp.data;
    console.log(card);
  } catch (err) {
    console.log(err);
  }
};

const saveCard = async (put) => {
  try {
    let data = JSON.parse(JSON.stringify(put));
    data.back = data.back.join(",");
    data.front = data.front.join(",");
    await cardChange(card.value.id, data);
  } catch (err) {
    console.log(err);
  }
};

cardInfo();
</script>
<style scoped>
.box {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
}
.font {
  line-height: 2.5rem;
}
.input {
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  flex: 1rem;
  margin-left: 1rem;
  min-height: 2.5rem;
  padding: 0 1.5rem;
}
.save-button {
  width: 100%;
  background: #cfece8;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #12bfa2;
  padding: 0.6875rem 0;
}
</style>

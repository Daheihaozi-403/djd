<template>
  <div class="text-normal font-semibold text-center mt-4 mb-7">收支详情</div>
  <div class="mx-4">
    <money-search />
    <div class="mt-6 mb-4">2022/01/05</div>
    <pay-red class="mb-4" />
    <pay-green class="mb-4" />
    <pay-green class="mb-4" />
    <pay-red />
    <div class="mt-6 mb-4">2022/01/05</div>
    <pay-green class="mb-4" />
    <pay-green class="mb-4" />
    <pay-green class="mb-4" />
    <pay-green class="mb-4" />
  </div>
</template>
<script setup>
import MoneySearch from "./common/MoneySearch";
import PayRed from "./common/PayRed";
import PayGreen from "./common/PayGreen";
</script>
<style></style>

<template>
  <div class="font-title mb-4">学习集名称</div>
  <div class="mb-4">
    <input
      type="text"
      placeholder="8个字以内"
      class="input-style"
      maxlength="8"
      v-model="state.book.name"
    />
  </div>
  <div class="font-title mb-4">推荐语</div>
  <div class="mb-4">
    <input
      type="text"
      placeholder="一句话推荐，15字以内"
      class="input-style"
      maxlength="15"
      v-model="state.book.recommend"
    />
  </div>
  <div class="font-title mb-4">详细说明</div>
  <div class="mb-6">
    <textarea class="input-style1" v-model="state.book.describe"></textarea>
  </div>
  <div class="font-title mb-4">学习集图片</div>
  <div class="mb-6 flex" style="overflow: auto; width: 100%">
    <div
      v-for="(item, i) of state.photo"
      :v-model="state.photo[i]"
      :key="i"
      @click="changephoto(i)"
      class="set-photo mr-4 relative"
    >
      <img :src="item" class="object-none object-left-bottom book-photo" />
      <img
        src="../../assets/Iconsetphoto.png"
        alt=""
        :class="state.clickPhoto == i ? 'icon-setphoto' : 'hidden'"
      />
    </div>
  </div>
  <div class="font-title mb-4">标签</div>
  <div class="mb-6" style="overflow: auto; width: 100%; display: flex">
    <input
      style="min-width: 5rem; width: 5rem"
      type="text"
      v-for="(item, i) of state.book.tags"
      v-model="state.book.tags[i].value"
      :key="i"
      :readonly="item.readOnly"
      class="input-tage mb-2"
      @keyup.enter="inputRead(i)"
      @click.ctrl.left="clickDel(i)"
    />
    <div class="add-tag" @click="onAdd">
      <van-icon name="plus" size="0.62rem" />
    </div>
  </div>
  <div class="font-title mb-4">属性</div>
  <div class="flex mb-8 flex-1 attributes">
    <div
      :class="'button-style ' + (state.isFree ? 'hover' : '')"
      @click="changeIsFree"
    >
      免费
    </div>
    <div
      :class="'button-style ' + (!state.isFree ? 'hover' : '')"
      @click="changeIsFree"
    >
      付费
    </div>
    <input
      v-if="!state.isFree"
      type="number"
      placeholder="0.00"
      class="input-style2 flex-grow"
      v-model="state.book.price"
    />
  </div>
  <div class="px-4">
    <div class="button2 mb-10" @click="createBook">保存并创建学习集</div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { create } from "@/api/api";
import { Notify } from "vant";

var state = reactive({
  isFree: true,
  clickPhoto: 66,

  book: {
    name: "",
    recommend: "",
    describe: "",
    price: "",
    cover: "",
    tags: [],
  },
  photo: [
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/1.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/2.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/3.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/4.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/5.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/6.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/7.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/8.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/9.jpeg",
    "https://duo-jian-dan.oss-cn-qingdao.aliyuncs.com/covers/10.jpeg",
  ],
});
const changeIsFree = () => {
  state.isFree = !state.isFree;
};

const changephoto = (num) => {
  state.clickPhoto = num;
  state.book.cover = state.photo[num];
};

const onAdd = () => {
  state.book.tags.push({ value: "", readOnly: false });
};
const inputRead = (i) => {
  state.book.tags[i].readOnly = true;
};
const clickDel = (i) => {
  state.book.tags.splice(i, 1);
};

const createBook = async () => {
  try {
    if (state.book.name) {
      if (state.book.cover) {
        let data = JSON.parse(JSON.stringify(state.book));
        data.tags = data.tags.join(",");
        data.price = parseFloat(data.price);
        console.log(state.book);
        await create(data);
        window.location.replace("#/sudy?id=");
      } else {
        Notify("请选择学习集图片");
      }
    } else {
      Notify("请输入学习集名称");
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
<style scoped>
.font-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}
.input-style {
  width: 100%;
  padding: 0.625rem 1rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* color: #a0a2a3; */
}
.input-style1 {
  width: 100%;
  min-height: 7.5rem;
  padding: 0.625rem 1rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* color: #a0a2a3; */
}
.input-style2 {
  /* width: 8.44rem; */
  width: 100%;
  /* height: 2.375rem; */
  padding: 0.5rem 1rem;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  /* color: #a0a2a3; */
}
.set-photo {
  height: 4rem;
  width: 4rem;
  min-width: 4rem;
  min-height: 4rem;
}

.book-photo {
  height: 4rem;
  width: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  object-fit: cover;
}

.icon-setphoto {
  position: absolute;
  top: 0;
  right: 0;
}
.tage-box {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.button-style {
  background: #ffffff;
  border-radius: 1rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-align: center;
  color: #8e8e93;
  padding: 0.625rem 2rem;
  margin-right: 0.5rem;
  white-space: nowrap;
}
.input-tage {
  background: #ffffff;
  border-radius: 1rem;
  font-size: 0.75rem;
  text-align: center;
  color: #8e8e93;
  padding: 0.625rem 0.625rem;
  margin-right: 0.5rem;
  min-width: 2rem;
}
.button-style.hover {
  color: white;
  background-color: #12bfa2;
}

.add-tag {
  min-width: 2rem;
  height: 1.625rem;
  background: #ffffff;
  border-radius: 1rem;
  text-align: center;
  margin-top: 0.4rem;
}
.button1 {
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
.button2 {
  width: 100%;
  background: #12bfa2;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  padding: 0.6875rem 0;
}
.attributes {
  height: 2.375rem;
}
</style>

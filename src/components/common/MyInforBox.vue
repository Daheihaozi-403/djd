<template>
  <div>
    <div class="box-top py-5 px-9 flex justify-between mt-6">
      <div>
        <img src="../../assets/archive.png" alt="" class="marx-auto" />
        <div class="text-center font-bold text-lg">
          {{ myStudy.create_book_total }}
        </div>
        <div class="text-center text-xs font-normal text-color-gr">
          我创建的
        </div>
      </div>
      <div class="bor-right"></div>

      <div>
        <img src="../../assets/folder-add.png" alt="" class="marx-auto" />
        <div class="text-center font-bold text-lg">
          {{ myStudy.join_book_total }}
        </div>
        <div class="text-center text-xs font-normal text-color-gr">
          我加入的
        </div>
      </div>
      <div class="bor-right"></div>
      <div>
        <img src="../../assets/Group-26546.png" alt="" class="marx-auto" />
        <div class="text-center font-bold text-lg">
          {{ myStudy.collect_book_total }}
        </div>
        <div class="text-center text-xs font-normal text-color-gr">
          我的收藏
        </div>
      </div>
    </div>
    <div class="box-bot py-6 px-7 flex justify-between mt-3">
      <div class="flex">
        <img src="../../assets/question-mark-circle.png" alt="" class="mr-4" />
        <span>使用帮助</span>
      </div>
      <div>
        <img src="../../assets/Arrow-Right-gr.png" alt="" />
      </div>
    </div>
    <div class="box-bot py-6 px-7 flex justify-between mt-3">
      <div class="flex">
        <img src="../../assets/shield-check.png" alt="" class="mr-4" />
        <span>成为作者</span>
      </div>
      <div>
        <img src="../../assets/Arrow-Right-gr.png" alt="" />
      </div>
    </div>
    <div class="box-bot py-6 px-7 flex justify-between mt-3">
      <div class="flex">
        <img src="../../assets/document-text.png" alt="" class="mr-4" />
        <span>关于我们</span>
      </div>
      <div>
        <img src="../../assets/Arrow-Right-gr.png" alt="" />
      </div>
    </div>
    <div class="box-bot py-6 px-7 flex justify-between mt-3">
      <div class="flex">
        <img src="../../assets/chat-alt.png" alt="" class="mr-4" />
        <span>联系我们</span>
      </div>
      <div>
        <img src="../../assets/Arrow-Right-gr.png" alt="" />
      </div>
    </div>
    <div class="box-bot py-6 px-7 flex justify-between mt-3 mb-16">
      <div class="flex">
        <img src="../../assets/save.png" alt="" class="mr-4" />
        <span>退出登录</span>
      </div>
      <div>
        <img src="../../assets/Arrow-Right-gr.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { statistics } from "@/api/api";
// import { setStatistics, getStatistics } from "@/utils/helpers";
import { ref } from "vue";
const myStudy = ref("");
const toNum = async () => {
  try {
    const resp = await statistics();
    // setStatistics(resp.data);

    myStudy.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

toNum();
</script>
<style scope>
.box-top {
  width: 100%;
  height: 7.8rem;
  background: #ffffff;
  border-radius: 1rem;
}

.bor-right {
  width: 0.0625rem;
  background-color: #edeff5;
}
.marx-auto {
  margin: 0 auto;
}
.text-color-gr {
  color: #8c8c8c;
}
.box-bot {
  width: 100%;

  background: #ffffff;
  border-radius: 1rem;
}
</style>

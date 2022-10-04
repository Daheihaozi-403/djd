<template>
  <div>
    <div class="text-normal font-semibold text-center mt-4 mb-7">收支详情</div>
    <div class="mx-4">
      <div class="flex">
        <van-search
          background="#f0f4f5"
          class="money-search"
          v-model="state.search"
          @search="searchMoney"
        />

        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          :close-on-click-action="false"
          placement="bottom-end"
          @select="check"
        >
          <template #reference>
            <van-button type="primary"
              ><img src="@/assets/search-Icon.png" alt="" class="select-photo"
            /></van-button>
          </template>
        </van-popover>
      </div>
      <div v-if="state.isShow == 0">
        <div
          v-for="(item, index) in moneyInfo.items"
          :key="index"
          :value="item.value"
        >
          <div class="mt-6 mb-4" v-if="state.date[index].date">
            {{ state.date[index].date }}
          </div>

          <div
            class="py-4 pl-5 pr-6 mb-4 flex bg-white rounded-2xl justify-between"
          >
            <div class="flex">
              <div class="pt-photo1">
                <img
                  src="@/assets/paytime1.png"
                  v-if="item.direction == 'out'"
                />
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
                {{ state.date[index].time }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="state.isShow == 1">
        <div
          v-for="(item, index) in state.data.in"
          :key="index"
          :value="item.value"
        >
          <div class="mt-6 mb-4">{{ item.created_at.substring(0, 10) }}</div>

          <div
            class="py-4 pl-5 pr-6 mb-4 flex bg-white rounded-2xl justify-between"
          >
            <div class="flex">
              <div class="pt-photo1">
                <img
                  src="@/assets/paytime1.png"
                  v-if="item.direction == 'out'"
                />
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
      <div v-if="state.isShow == 2">
        <div
          v-for="(item, index) in state.data.out"
          :key="index"
          :value="item.value"
        >
          <div class="mt-6 mb-4">{{ item.created_at.substring(0, 10) }}</div>

          <div
            class="py-4 pl-5 pr-6 mb-4 flex bg-white rounded-2xl justify-between"
          >
            <div class="flex">
              <div class="pt-photo1">
                <img
                  src="@/assets/paytime1.png"
                  v-if="item.direction == 'out'"
                />
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
      <div v-if="state.isShow == 3">
        <div
          v-for="(item, index) in state.searchWord.items"
          :key="index"
          :value="item.value"
        >
          <div class="mt-6 mb-4" v-if="state.searchDate[index].date">
            {{ state.searchDate[index].date }}
          </div>

          <div
            class="py-4 pl-5 pr-6 mb-4 flex bg-white rounded-2xl justify-between"
          >
            <div class="flex">
              <div class="pt-photo1">
                <img
                  src="@/assets/paytime1.png"
                  v-if="item.direction == 'out'"
                />
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
    </div>
  </div>
</template>
<script setup>
import { price } from "@/api/api";
import { ref } from "vue";
import { reactive } from "vue";
import { Notify } from "vant";
const showPopover = ref(false);

var state = reactive({
  isShow: 0,
  data: {
    in: [],
    out: [],
  },
  date: [],
  push: true,
  search: "",
  searchWord: [],
  searchDate: [],
});
const actions = [
  {
    text: "查看全部",
    icon: "https://hakaimg.com/i/2022/09/05/pdcm0b.png",
    num: "0",
  },
  {
    text: "只看收入",
    icon: "https://hakaimg.com/i/2022/09/05/pdcm0b.png",
    num: "1",
  },
  {
    text: "只看支出",
    icon: "https://hakaimg.com/i/2022/09/05/pdnqf3.png",
    num: "2",
  },
];

const moneyInfo = ref("");

const getPrice = async () => {
  try {
    const resp = await price();
    moneyInfo.value = resp.data;
    for (let index = 0; index < moneyInfo.value.items.length; index++) {
      if (moneyInfo.value.items[index].direction == "in") {
        state.data.in.push(moneyInfo.value.items[index]);
      } else {
        state.data.out.push(moneyInfo.value.items[index]);
      }

      state.date.push({
        date: moneyInfo.value.items[index].created_at.substring(0, 10),
        time: moneyInfo.value.items[index].created_at.substring(11, 19),
      });
    }

    for (let index = 0; index < state.date.length; index++) {
      for (let i = 0; i < index; i++) {
        if (state.date[index].date == state.date[i].date) {
          state.date[index].date = "";
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
const searchMoney = async () => {
  try {
    const resp = await price({ search: state.search });
    state.searchWord = resp.data;
    console.log(state.searchWord.items);
    for (let index = 0; index < state.searchWord.items.length; index++) {
      state.searchDate.push({
        date: state.searchWord.items[index].created_at.substring(0, 10),
        time: state.searchWord.items[index].created_at.substring(11, 19),
      });
    }
    for (let index = 0; index < state.searchDate.length; index++) {
      for (let i = 0; i < index; i++) {
        if (state.searchDate[index].date == state.searchDate[i].date) {
          state.searchDate[index].date = 0;
        }
      }
    }
    if (state.searchWord.items) {
      state.isShow = 3;
    } else {
      Notify("无查询结果");
    }
  } catch (err) {
    console.log(err);
  }
};
const check = (action) => {
  state.isShow = action.num;
};

getPrice();
</script>
<style scope>
.money-search {
  border-radius: 0.75rem;
  background-color: white;
  width: 100%;
  height: 3rem;
  overflow: hidden;
  padding: 0;
}
.select-photo {
  height: 1.5rem;
  width: 2rem;
}
.van-button--primary {
  background-color: #f0f4f5;
  border: 0;
}
.van-popover__action {
  width: 8.125rem;
  height: 3.4375rem;
  border-radius: 0.5rem;
  margin: 0.625rem;
  border-bottom: 0.0625rem solid #edeff5;
}
.van-search__content {
  background-color: white;
}
/* root {
  --van-search-content-background-color: #ffffff;
} */
.van-popover__action-text {
  font-size: 1rem;
}
.hover {
  background-color: rgb(245, 103, 8);
  color: aquamarine;
}
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

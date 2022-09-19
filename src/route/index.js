import * as VueRouter from "vue-router";

// import Vue from 'vue';
// import { Button } from 'vant';
// Vue.use(Button);
// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const HomePage = () =>
    import ("../components/HomePage");
const CreateSet = () =>
    import ("../components/CreateSet");
const MyInformation = () =>
    import ("../components/MyInformation");
const MyMoney = () =>
    import ("../components/MyMoney");
const CreateInfor = () =>
    import ("../components/CreateInfor");
const CreateAdd = () =>
    import ("../components/CreateAdd");
const CardAdd = () =>
    import ("../components/CardAdd");
const JoinUser = () =>
    import ("../components/JoinUser");
const StudyInfor = () =>
    import ("../components/StudyInfor");
const ChangeCard = () =>
    import ("@/components/common/ChangeCard");
const AllCard = () =>
    import ("../components/AllCard");
// 2. 定义一些路由r
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { name: "HomePage", path: "/", component: HomePage },
    { name: "CreateSet", path: "/create", component: CreateSet },
    { name: "MyInformation", path: "/my", component: MyInformation },
    { name: "MyMoney", path: "/my/money", component: MyMoney },

    { name: "CreateInfor", path: "/create/infor", component: CreateInfor },
    { name: "CreateAdd", path: "/create/add", component: CreateAdd },
    { name: "CardAdd", path: "/create/card", component: CardAdd },
    { name: "JoinUser", path: "/join", component: JoinUser },
    { name: "StudyInfor", path: "/sudy", component: StudyInfor },
    { name: "ChangeCard", path: "/change", component: ChangeCard },
    { name: "AllCard", path: "/card", component: AllCard },
    // { path: '/about', component: HomePage },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});
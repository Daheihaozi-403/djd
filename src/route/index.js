import * as VueRouter from 'vue-router';

// import Vue from 'vue';
// import { Button } from 'vant';
// Vue.use(Button);
// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const HomePage = () =>
    import ("../components/HomePage")
const CreateSet = () =>
    import ("../components/CreateSet")
const MyInformation = () =>
    import ("../components/MyInformation")
const MyMoney = () =>
    import ("../components/MyMoney")
    // 2. 定义一些路由
    // 每个路由都需要映射到一个组件。
    // 我们后面再讨论嵌套路由。
const routes = [
    { name: "HomePage", path: '/', component: HomePage },
    { name: "CreateSet", path: '/create', component: CreateSet },
    { name: "MyInformation", path: '/my', component: MyInformation },
    { name: "MyMoney", path: '/my/money', component: MyMoney },

    // { path: '/about', component: HomePage },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
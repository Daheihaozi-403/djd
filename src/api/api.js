import axios from "@/utils/http";
// 获取列表
export function login() {
    return axios.get("/user/wechat/login-test"); //返回的时promies对象，所以直接return出去就好了
}
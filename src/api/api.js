import axios from "@/utils/http";

export function login() {
    return axios.get("/user/wechat/login-test");
}
export function statistics() {
    return axios.get("/study/statistics");
}
export function money() {
    return axios.get("/deal/statistics");
}
export function recommend() {
    return axios.get("/study/books/recommend");
}
export function infor(id) {
    return axios.get(`/study/books/${id}`); //获取学习集详情
}
export function delBooks(id) {
    return axios.delete(`/study/books/${id}`);
}
export function price() {
    return axios.get("/deal/money");
}
export function users(id) {
    return axios.get("/study/books/" + id + "/users");
}
export function cards(id, params) {
    return axios.get("/study/books/" + id + "/entries", {
        params,
    }); //获取学习集的卡片
}
export function create(data) {
    return axios.post("/study/books", data);
}
export function myBooks() {
    return axios.get("/study/books");
}
export function collect(id, data) {
    return axios.post("/study/books/" + id + "/collect", data);
}
export function collectCard(id, data) {
    return axios.post("/study/entries/" + id + "/collect", data);
}
export function cardInfor(id) {
    return axios.get(`/study/entries/${id}`); //获取卡片详情
}
export function cardChange(id, data) {
    return axios.put(`/study/entries/${id}`, data); //修改卡片
}
export function delCard(id) {
    return axios.delete(`/study/entries/${id}`);
    //删除卡片;
}
export function recent() {
    return axios.get(`/study/books/recent`);
} //获取最近学习的学习集
export function createCard(data) {
    return axios.post("/study/entries", data);
}
export function myCreate() {
    return axios.get("/study/books/create");
}
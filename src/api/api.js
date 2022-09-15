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
    return axios.get(`/study/books/${id}`);
}
export function price() {
    return axios.get("/deal/money");
}
export function users(id) {
    return axios.get("/study/books/" + id + "/users");
}
export function cards(id) {
    return axios.get("/study/books/" + id + "/entries");
}
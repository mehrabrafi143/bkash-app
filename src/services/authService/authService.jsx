import queryString from "query-string";
import { apiEndpoint } from "../config.json";
import http from "../http";
import axios from "axios";

// const api = apiEndpoint + "/authenticate";
// const headers = {
//   "Content-Type": "application/json"
// };

export async function login(data) {
  console.log(data);
  try {
    // const { data: res } = await axios.post(api, data, {
    //   headers: headers
    // });
    // console.log(res);
    localStorage.setItem("username", data.username);
    return "";
  } catch (error) {
    return "Username and password don't match!";
  }
}

export function logout() {
  localStorage.removeItem("username");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getUserName() {
  return localStorage.getItem("username");
}

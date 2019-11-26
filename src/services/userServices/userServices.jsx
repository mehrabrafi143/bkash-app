import http from "../http";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/user/all";

export function GetUsers() {
  return http.get(api);
}

export function GetUser(id) {
  return http.get(apiEndpoint + "/user/" + id);
}

export function AddUserFun(data) {
  return http.post(apiEndpoint + "/user/userCreation", data);
}

export function UpdateUser(data) {
  data.active = true;
  return http.post(apiEndpoint + "/user/update", data);
}

export function UpdateUserFun(data) {
  return http.post(apiEndpoint + "/user/update", data);
}

export function DeleteUser(id) {
  return http.delete(apiEndpoint + "/user/userDeletion/" + id);
}

export function GetInActiveEmployees() {
  return http.get(apiEndpoint + "/user/inactiveUsers");
}

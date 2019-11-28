import http from "../http";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/user/findAllActive";

export function GetActiveUsers() {
  return http.get(api);
}

export function GetUser(id) {
  return http.get(apiEndpoint + "/user/findById/" + id);
}

export function GetUserWithRole(id) {
  return http.get(apiEndpoint + "/user/userDetails/" + id);
}

export function AddUserFun(data) {
  return http.post(apiEndpoint + "/user/addUser", data);
}

export function UpdateUser(data) {
  return http.put(apiEndpoint + "/user/update", data);
}

export function DeactivateUser(id) {
  return http.put(apiEndpoint + "/user/userDeactivation/" + id);
}

export function GetInActiveUsers() {
  return http.get(apiEndpoint + "/user/findAllInactive");
}

export function ActivateUser(id) {
  return http.put(apiEndpoint + "/user/userActivation/" + id);
}

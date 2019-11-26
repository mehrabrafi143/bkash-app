import http from "../http";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/role/all";

export function GetRoles() {
  return http.get(api);
}

export function GetRole(id) {
  return http.get(apiEndpoint + "/role/" + id);
}

export function AddRole(data) {
  return http.post(apiEndpoint + "/role/roleCreation", data);
}

export function UpdateRole(data) {
  return http.put(apiEndpoint + "/role/updateRoleCreation", data);
}

export function DeleteRole(id) {
  return http.delete(apiEndpoint + "/role/delete/" + id);
}

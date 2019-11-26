import http from "../http";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/role/all";

export function GetRoles() {
  return http.get(api);
}

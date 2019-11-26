import http from "../http";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/task/distinctTaskList";

export function GetTasks() {
  return http.get(api);
}

export function GetTasksByRoleId(id) {
  return http.get(apiEndpoint + "/task/taskByRoleId/" + id);
}

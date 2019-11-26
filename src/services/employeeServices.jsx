import http from "./http";
const api = "http://localhost:55948/api/employee";
export function GetEmployees() {
  return http.get(api);
}

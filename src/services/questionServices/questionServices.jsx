import http from "../http";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/question";

export function GetQuestions() {
  return http.get(api + "/all");
}

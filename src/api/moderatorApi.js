import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/moderators/";

export function getModerators() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

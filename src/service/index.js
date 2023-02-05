import axios from "axios";

export default function restService(
  url = "",
  method = "GET",
  data = {},
  headers = {}
) {
  return axios({
    url,
    method,
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      ...{
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      ...headers,
    },
    withCredentials: true,
    redirect: "follow",
    data: data,
  });
}

import { axiosClient } from "../../app/axiosClient";

export function fetchCreateUser(req) {
  return axiosClient
    .post("/user", req)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

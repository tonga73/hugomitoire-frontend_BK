import { axiosClient } from "../../app/axiosClient";

export function fetchUsers() {
  return axiosClient
    .get("/users")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

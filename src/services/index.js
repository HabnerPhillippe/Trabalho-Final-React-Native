import axios from "axios";

export const Api = axios.create({
  baseURL: "https://reactnative-e.herokuapp.com/reactnative/",
  auth: {
    username: "reactnative",
    password: "2022",
  },
});

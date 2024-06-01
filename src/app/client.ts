import axios from "axios";
import { baseUrl } from "./baseUrl";
import toast from "react-hot-toast";

const client = axios.create({
  baseURL: baseUrl,
});
client.interceptors.response.use(
  (res) => res,
  (err) => {
    toast.error("somthing went wrong...!");
  }
);
export default client;

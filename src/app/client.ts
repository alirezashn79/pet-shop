import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { baseUrl } from "./baseUrl";

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config) => {
    if (config.url === "/change-password/" || config.url?.includes("/order")) {
      config.headers["Authorization"] =
        `Bearer ${Cookies.get("JWT_Token_Access")}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;

    if (originalConfig.url === "/change-password/" && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await client.post("/accounts/api/refresh/", {
            refresh: Cookies.get("JWT_Token_Refresh"),
          });
          toast.success(rs.data.access);
          Cookies.set("JWT_Token_Access", rs.data.access, {
            path: "/",
            secure: true,
            expires: 1,
          });
          return client(originalConfig);
        } catch (err) {
          toast.error("نیاز به ورود مجدد است.");

          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default client;

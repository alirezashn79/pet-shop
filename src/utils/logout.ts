import Cookies from "js-cookie";
export default function logout() {
  Cookies.remove("JWT_Token_Access");
  Cookies.remove("JWT_Token_Refresh");
}

import Cookies from "js-cookie";

export const deleteToke = () => {
  Cookies.remove("AccessToken");
  window.location.reload();
};

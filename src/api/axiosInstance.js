import axios from "axios";
import { BASE_API_URL} from "./config"
import secureLocalStorage from "react-secure-storage";


export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export const setAuthToken = () => {
  let token = localStorage.getItem("refresh-token");
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}









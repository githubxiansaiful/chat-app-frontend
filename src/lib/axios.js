import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://kitty-chat-backend-pied.vercel.app/api/",
    withCredentials: true
});
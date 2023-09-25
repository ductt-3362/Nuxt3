import { api } from "@/apis/axios";

// export const registerApi = (param) => api.post("/users", param);
export const loginApi = (param) => useFetch("/login", param);

import axiosInstance from "./axios";
const apiUser = {
  createUser: (data) => {
    return axiosInstance.post("/auth/local/register", data);
  },

  loginUser: (data) => {
    return axiosInstance.post("/auth/local", data);
  },
};
export default apiUser;

import axiosInstance from "./axios";
const apiUser = {
  createUser: (data) => {
    return axiosInstance.post("/auth/local/register", data);
  },

  loginUser: (data) => {
    return axiosInstance.post("/auth/local", data);
  },

  getAll: () => {
    return axiosInstance.get("/users").then((res) => res.data);
  },

  // getDetailUserById: (id) => {
  //   return axiosInstance.get(`/users/${id}`);
  // },

  getUserById: (id) => {
    return axiosInstance.get(`/users/${id}`);
  },
};
export default apiUser;

import axiosInstance from "./axios";

const apiBrand = {
  //lấy tất cả thương hiệu
  getAll: () => {
    return axiosInstance.get("/brands").then((res) => res.data);
  },
};
export default apiBrand;

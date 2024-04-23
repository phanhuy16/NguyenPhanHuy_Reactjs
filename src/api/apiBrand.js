import axiosInstance from "./axios";

const apiBrand = {
  //lấy tất cả thương hiệu
  getAll: () => {
    return axiosInstance.get("/brands").then((res) => res.data);
  },
  //thêm
  createBrand: (brand) => {
    return axiosInstance.post("/brands", brand).then((res) => res.data);
  },
  //api lấy 1
  getBrandById: (id) => {
    return axiosInstance.get(`/brands/${id}`);
  },
  //sửa 1
  editBrand: (id, brand) => {
    return axiosInstance.put(`/brands/${id}`, brand);
  },
  //xóa  1
  delBrandById: (id) => {
    return axiosInstance.delete(`/brands/${id}`);
  },
};
export default apiBrand;

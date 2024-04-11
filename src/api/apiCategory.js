import axiosInstance from "./axios";

const apiCategory = {
  getAll: () => {
    return axiosInstance.get("/categories").then((res) => res.data);
  },
  //thêm danh mục
  createCategory: (category) => {
    return axiosInstance.post("/categories", category).then((res) => res.data);
  },
  //api lấy 1 danh mục
  getCategoryById: (id) => {
    return axiosInstance.get(`/categories/${id}`);
  },
  //api sửa danh mục
  editCategory: (id, category) => {
    return axiosInstance.put(`/categories/${id}`, category);
  },
  //api xoá danh mục
  delCategory: (id) => {
    return axiosInstance.delete(`/categories/${id}`);
  },
};

export default apiCategory;

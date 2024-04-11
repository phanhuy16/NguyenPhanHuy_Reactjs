import axiosInstance from "./axios";

const apiProduct = {
  //lấy tất cả sản phẩm
  getAll: () => {
    return axiosInstance.get("/products/?populate=*").then((res) => res.data);
  },
  getNewest: () => {
    return axiosInstance
      .get("/products?sort[0]=createdAt:desc&pagination[limit]=5&populate=*")
      .then((res) => res.data);
  },
  getPromotion: () => {
    return axiosInstance
      .get(
        "/products?filters[is_on_sale][$eq]=true&pagination[limit]=6&populate=*"
      )
      .then((res) => res.data);
  },
  getDetailProductBySlug: (slug) => {
    return axiosInstance
      .get(`/products?filters[slug][$eq]=${slug}&populate=*`)
      .then((res) => res.data);
  },
  getProductByCatSlug: (slug) => {
    return axiosInstance
      .get(`/products?filters[category][slug][$eq]=${slug}&populate=*`)
      .then((res) => res.data);
  },
  //lấy sản phẩm phân trang
  getProductPagination: (page, limit) => {
    return axiosInstance
      .get(
        `/products?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=*`
      )
      .then((res) => res.data);
  },
  //thêm sản phẩm
  createProduct: (data) => {
    return axiosInstance.post("/products", data);
  },
  //sửa sản phẩm
  updataProduct: (id, data) => {
    return axiosInstance.put(`/products/${id}`, data);
  },
};

export default apiProduct;

// import IndexAdmin from "../backend";
import CategoryAdd from "../backend/page/category/add";
import CategoryEdit from "../backend/page/category/edit";
import CategoryList from "../backend/page/category/list";
import ProductAdd from "../backend/page/products/add";
import ProductEdit from "../backend/page/products/edit";
import ProductList from "../backend/page/products/list";

const BackendRoute = [
  // { path: "/admin", component: IndexAdmin },
  { path: "/admin/category", component: CategoryList },
  { path: "/admin/addCategory", component: CategoryAdd },
  { path: "/admin/editCategory/:id", component: CategoryEdit },
  { path: "/admin/editproduct/:slug", component: ProductEdit },
  { path: "/admin/products/:page", component: ProductList },
  { path: "/admin/addproduct", component: ProductAdd },
];

export default BackendRoute;

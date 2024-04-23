import AddBrand from "../backend/page/brand/add";
import EditBrand from "../backend/page/brand/edit";
import ListBrand from "../backend/page/brand/list";
import CategoryAdd from "../backend/page/category/add";
import CategoryEdit from "../backend/page/category/edit";
import CategoryList from "../backend/page/category/list";
import ProductAdd from "../backend/page/products/add";
import ProductEdit from "../backend/page/products/edit";
import ProductList from "../backend/page/products/list";
import DetailUser from "../backend/page/users/detailUser";
import ListUser from "../backend/page/users/listUser";

const BackendRoute = [
  { path: "/admin/category", component: CategoryList },
  { path: "/admin/addCategory", component: CategoryAdd },
  { path: "/admin/editCategory/:id", component: CategoryEdit },
  { path: "/admin/editproduct/:slug", component: ProductEdit },
  { path: "/admin/products/:page", component: ProductList },
  { path: "/admin/addproduct", component: ProductAdd },
  { path: "/admin/listuser", component: ListUser },
  { path: "/admin/detailuser", component: DetailUser },
  { path: "/admin/brands", component: ListBrand },
  { path: "/admin/addbrands", component: AddBrand },
  { path: "/admin/editbrands/:id", component: EditBrand },
];

export default BackendRoute;

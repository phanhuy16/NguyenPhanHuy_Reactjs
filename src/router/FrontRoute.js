import Abouts from "../frontend/page/about/Abouts";
import Contacts from "../frontend/page/contact/Contacts";
import Home from "../frontend/page/home/Home";
import Medicine from "../frontend/page/medicine/Medicine";
import News from "../frontend/page/news/News";
import Products from "../frontend/page/product/product";
import ProductsDetail from "../frontend/page/product/productDetail";
import ProductsByCat from "../frontend/page/product/productsByCat";
import LoginUser from "../frontend/page/user/login";
import Register from "../frontend/page/user/register";
import NotFound from "../frontend/page/NotFound";
import LogoutUser from "../frontend/page/user/logout";
import Cart from "../frontend/page/cart/cart";
import CheckOut from "../frontend/page/cart/checkout";

const FrontRoute = [
  { path: "/", component: Home },
  { path: "/about", component: Abouts },
  { path: "/medicine", component: Medicine },
  { path: "/news", component: News },
  { path: "/contact", component: Contacts },
  { path: "/products", component: Products },
  { path: "/product-detail/:slug", component: ProductsDetail },
  { path: "/products-by-cat/:slug", component: ProductsByCat },
  { path: "/register", component: Register },
  { path: "/login", component: LoginUser },
  { path: "/logout", component: LogoutUser },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: CheckOut },
  { path: "*", component: NotFound },
];
export default FrontRoute;

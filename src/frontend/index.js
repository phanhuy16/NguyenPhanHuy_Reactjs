import "./asset/css/bootstrap.css";
import "./asset/css/responsive.css";
import "./asset/css/style.css";
import "./asset/css/style.scss";
import Header from "./components/Header";
// import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

import { Link, Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";
const IndexAdmin = () => {
  return (
    <>
      <div className="">
        <nav className="navigate">
          <div className="navigate-brand">
            <span className="fs-1 text-info fw-bold">Admin</span>
          </div>
          <div className="navigate-menu">
            <ul className="navigate-nav">
              <li className="navi-item">
                <Link to="#" className="navi-link">
                  Danh sách quản lý
                </Link>
                <ul className="dropdownn-item">
                  <li>
                    <Link to="/admin/category">Danh mục</Link>
                  </li>
                  <li>
                    <Link to="/admin/products/1">Sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="/admin/listuser">Người dùng</Link>
                  </li>
                  <li>
                    <Link to="#">Đơn hàng</Link>
                  </li>
                  <li>
                    <Link to="/admin/brands">Nhà cung cấp</Link>
                  </li>
                </ul>
              </li>
              <li className="navi-item">
                <Link to="#" className="navi-link">
                  Projects
                </Link>
              </li>
              <li className="navi-item">
                <Link to="#" className="navi-link">
                  Calendar
                </Link>
              </li>
              <li className="navi-item">
                <Link to="#" className="navi-link">
                  Reports
                </Link>
              </li>
            </ul>
          </div>
          <div className="navigate-profile">
            <FaUserCircle />
            <ul className="dropdownn-menu">
              <li>
                <Link to="#">Settings</Link>
              </li>
              <li>
                <Link to="#">Login</Link>
              </li>
              <li>
                <Link to="#">Sign out</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container py-5">
        <Outlet />
      </div>
      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>{" "}
    </>
  );
};
export default IndexAdmin;

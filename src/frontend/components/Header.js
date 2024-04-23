import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/useContext";
import { useContext, useEffect, useState } from "react";
import apiCategory from "../../api/apiCategory";
import "../asset/css/product.scss";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useContext(UserContext);
  const getData = useSelector((state) => state.cart.carts);
  if (user) {
    var username = user.username;
  } else {
    // var username = "";
  }

  const [subMenu, setSubMenu] = useState([]);

  useEffect(() => {
    apiCategory.getAll().then((res) => {
      try {
        const menuData = res.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.category_name,
            slug: item.attributes.slug,
            parent: item.attributes.parent_id,
          };
        });
        setSubMenu(menuData);
      } catch (error) {
        console.log(error.message);
      }
    });
  }, []);

  return (
    <>
      <header className="header_section" style={{ backgroundColor: "#11e6f4" }}>
        <div className="container">
          <div className="top_contact-container">
            <div className="tel_container">
              <a href="h">
                <img
                  src={require("../asset/images/telephone-symbol-button.png")}
                  alt=""
                />{" "}
                Call : +01 1234567890
              </a>
            </div>
            <div className="social-container">
              <a href="h">
                <img
                  src={require("../asset/images/fb.png")}
                  alt=""
                  className="s-1"
                />
              </a>
              <a href="h">
                <img
                  src={require("../asset/images/twitter.png")}
                  alt=""
                  className="s-2"
                />
              </a>
              <a href="h">
                <img
                  src={require("../asset/images/instagram.png")}
                  alt=""
                  className="s-3"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <NavLink className="navbar-brand" to="/">
              <img src={require("../asset/images/logo.png")} alt="" />
              <span>Medion</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      {" "}
                      About{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/medicine">
                      {" "}
                      Medicine{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                      {" "}
                      Products{" "}
                    </NavLink>
                    <ul className="submenu">
                      {subMenu.map((submenu, index) => {
                        return submenu.parent === 0 ? (
                          <li key={index} className="parent-li">
                            <Link to={`/products-by-cat/${submenu.slug}`}>
                              {submenu.name}
                            </Link>
                            <ul className="sub">
                              {subMenu.map((sub, index) => {
                                return sub.parent === submenu.id ? (
                                  <li key={index}>
                                    <Link to={`/products-by-cat/${sub.slug}`}>
                                      {sub.name}
                                    </Link>
                                  </li>
                                ) : null;
                              })}
                            </ul>
                          </li>
                        ) : (
                          <li key={index}>
                            <Link to={``}>{submenu.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/news">
                      {" "}
                      News{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                </ul>
                <form className="form-inline">
                  <input type="search" placeholder="Search" />
                  {/* <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button> */}
                </form>
                <NavLink to="/cart" className="shopping-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span className="badge text-light">{getData.length}</span>
                </NavLink>
                <div className="login_btn-contanier ml-0 ml-lg-5 user">
                  <NavLink to="/login">
                    <img src={require("../asset/images/user.png")} alt="" />
                    <span>{username}</span>
                    <ul className="position-absolute list-user">
                      {user ? (
                        <li className="nav-item item-user">
                          <NavLink className="nav-link link" to="/logout">
                            Đăng xuất
                          </NavLink>
                        </li>
                      ) : (
                        <li className="nav-item item-user">
                          <NavLink className="nav-link link" to="/login">
                            Đăng nhập
                          </NavLink>
                        </li>
                      )}
                      <li className="nav-item item-user">
                        <NavLink className="nav-link link" to="/register">
                          Đăng ký
                        </NavLink>
                      </li>
                    </ul>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

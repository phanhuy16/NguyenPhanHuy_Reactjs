import { useDispatch, useSelector } from "react-redux";
import cartReducer from "../../../redux/reducers/cartReducer";
import CartItem from "./cartItem";
import { CLEAR, TOTAL } from "../../../redux/action/cartAction";
import { NavLink, useNavigate } from "react-router-dom";
import "../../asset/css/product.scss";
import UserContext from "../../context/useContext";
import { useContext } from "react";

const Cart = () => {
  const { user } = useContext(UserContext);
  const getDataCart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    if (!user || !user.username) {
      navigate("/login");
    } else {
      // Nếu đã đăng nhập, chuyển hướng đến trang thanh toán
      navigate("/checkout");
    }
  };

  console.log("Data cart: ", getDataCart);
  dispatch(TOTAL());

  const clearCart = () => {
    dispatch(CLEAR());
  };

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <div className="container-fluid p-5">
        <h1 className="text-center mb-4 text-info fw-bold">Giỏ hàng</h1>
        <table className="table table-bordered my-5">
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xoá</th>
          </tr>
          {getDataCart.map((e) => {
            return <CartItem item={e} />;
          })}
          <tr>
            <th colSpan={4}>Tổng tiền</th>
            <th colSpan={2}>{totalAmount}</th>
          </tr>
        </table>
        <div className="d-flex justify-content-end align-items-center">
          <div className="btn">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => clearCart()}
            >
              Xóa giỏ hàng
            </button>
          </div>
          <button type="button" className="btn" onClick={handleCheckout}>
            <NavLink className="btn btn-info" to="/checkout">
              Thanh Toán
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;

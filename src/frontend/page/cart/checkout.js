import { useContext } from "react";
import UserContext from "../../context/useContext";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { user } = useContext(UserContext);
  const getDataCart = useSelector((state) => state.cart.carts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return user && user.username ? (
    <div className="cart row container-fluid p-5">
      <div className="col-md-6">
        <h3 className="text-center mb-4 text-info fw-bold">
          Thông tin khách hàng
        </h3>
        <form>
          <form className="row g-3">
            <div className="col-md-6 mb-3">
              <label htmlFor="inputUseNamel4" className="form-label">
                Họ tên
              </label>
              <input
                type="text"
                className="form-control"
                id="inputuser4"
                value={user.username}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={user.email}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputEmail4" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="inputuser4"
                value={user.phone}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder=""
                value={user.address}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-outline-primary">
                Sign in
              </button>
            </div>
          </form>
        </form>
      </div>
      <div className="col-md-6">
        <h3 className="text-center mb-5 text-info fw-bold">
          Thông tin sản phẩm
        </h3>
        <table className="table table-bordered">
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
          </tr>
          {getDataCart.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.quantity}</td>
                <td>{e.price * e.quantity}</td>
              </tr>
            );
          })}
          <tr>
            <th colSpan={3}>Tổng tiền</th>
            <th>{totalAmount}</th>
          </tr>
        </table>
      </div>
    </div>
  ) : (
    <div>
      <h1>Thanh toan</h1>
    </div>
  );
};

export default CheckOut;

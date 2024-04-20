import { imageURL } from "../../../api/config";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { REMOVE } from "../../../redux/action/cartAction";
import "../../asset/css/product.scss";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(REMOVE(item));
  };
  return (
    <>
      <tr className="cart-item">
        <td className="cart-item-image">
          <img
            style={{ width: "100px" }}
            src={imageURL + props.item.image}
            alt="Anh"
          />
        </td>
        <td className="cart-item-item">{props.item.name}</td>
        <td className="cart-item-item">{props.item.price}</td>
        <td className="cart-item-item">{props.item.quantity}</td>
        <td className="cart-item-item">
          {props.item.price * props.item.quantity}
        </td>
        <td className="cart-item-actions">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => removeItem(props.item)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};
export default CartItem;

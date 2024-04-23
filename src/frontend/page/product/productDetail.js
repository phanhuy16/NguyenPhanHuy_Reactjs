import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import React from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../../redux/action/cartAction";
import { MdAddShoppingCart } from "react-icons/md";

const ProductDetail = () => {
  const { slug } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [cartMessage, setCartMessage] = useState("");

  const [amountItem, setAmountItem] = useState(1);
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    setAmountItem(amountItem + 1);
  };

  const decreaseQuantity = () => {
    if (amountItem > 1) {
      setAmountItem(amountItem - 1);
    }
  };

  useEffect(() => {
    apiProduct.getDetailProductBySlug(slug).then((res) => {
      try {
        const productAttributes = res.data[0].attributes;
        const product = {
          id: res.data[0].id,
          name: productAttributes.product_name,
          price: productAttributes.price,
          sale: productAttributes.sale_price,
          slug: productAttributes.slug,
          image: productAttributes.image.data.attributes.url,
          description: productAttributes.description,
        };
        setProductDetail(product);
      } catch (err) {
        console.log("Error: ", err.message);
      }
    });
  }, [slug]);

  const handleAddToCart = (amountItem) => {
    setCartMessage("Product added to cart!");
    setTimeout(() => {
      setCartMessage("");
    }, 2000);
    const product = {
      ...productDetail,
      amount: amountItem,
    };
    dispatch(ADD(product));
  };

  return (
    <>
      {productDetail && (
        <div className="detail">
          <div className="img-detail">
            <img
              src={imageURL + productDetail.image}
              alt={productDetail.name}
            />
          </div>
          <div className="detail-content">
            <NavLink to="/" className="link-home">
              Trang chủ
            </NavLink>
            <h2 className="detail-title">{productDetail.name}</h2>
            <h5 className="detail-price">
              <del>
                <sup>đ</sup>
                {productDetail.price}
              </del>
              <strong>
                <sup>đ</sup>
                {productDetail.sale}
              </strong>
            </h5>
            <p className="detail-text">{productDetail.description}</p>
            <span>
              <div className="quantity">
                <button className="m-0" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  className="count"
                  type="text"
                  placeholder={amountItem}
                  value={amountItem}
                  onChange={(e) => setAmountItem(e.target.value)}
                />
                <button className="m-0" onClick={increaseQuantity}>
                  +
                </button>
                <button
                  className="add-cart"
                  onClick={() => handleAddToCart(amountItem)}
                >
                  <MdAddShoppingCart style={{ marginRight: "5px" }} />
                  Thêm giỏ hàng
                </button>
                <span className="notification">
                  {cartMessage && <div id="cart-message">{cartMessage}</div>}
                </span>
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;

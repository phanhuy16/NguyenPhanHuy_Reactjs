import { NavLink } from "react-router-dom";
import { imageURL } from "../../../api/config";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../asset/css/product.scss";

const ProductItem = (props) => {
  return (
    <>
      <div className="item" key={props.key}>
        <NavLink
          to={`/product-detail/${props.product.slug}`}
          className="product-container"
        >
          <div className="card">
            <img
              src={imageURL + props.product.image}
              className="card-img-top"
              alt={props.product.name}
            />
            <div className="card-body">
              <div>
                <h5 className="card-title">{props.product.name}</h5>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <p className="price">Price: {props.product.price}$</p>
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProductItem;

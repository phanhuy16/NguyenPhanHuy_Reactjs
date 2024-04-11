import ProductItem from "../product/productItem";
import apiProduct from "../../../api/apiProduct";
import { useEffect, useState } from "react";
import Discount from "../../components/Discount";
export default function Medicine() {
  const [promotionProducts, setPromotionProducts] = useState([]);
  useEffect(() => {
    apiProduct.getPromotion().then((res) => {
      try {
        const promotionProductsData = res.data.map((product) => {
          return {
            id: product.attributes.id,
            name: product.attributes.product_name,
            price: product.attributes.price,
            slug: product.attributes.slug,
            image: product.attributes.image.data.attributes.url,
          };
        });
        setPromotionProducts(promotionProductsData);
        // console.log(newProduts);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);
  return (
    <>
      <div className="layout_padding-top">
        <Discount />
        <div className="container-fluid">
          <h1 className="text-uppercase fw-bold text-center my-5">
            Sản phẩm khuyến mãi
          </h1>
          <div class="layout-card">
            {promotionProducts.map((product, index) => {
              return <ProductItem key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

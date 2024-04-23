import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "../product/productItem";

const ProductsByCat = () => {
  const { slug } = useParams();
  const [productsByCat, setProductsByCat] = useState([]);

  useEffect(
    () => {
      apiProduct.getProductByCatSlug(slug).then((res) => {
        try {
          const products = res.data.map((item) => {
            return {
              id: item.id,
              name: item.attributes.product_name,
              price: item.attributes.price,
              slug: item.attributes.slug,
              image: item.attributes.image.data.attributes.url,
            };
          });

          setProductsByCat(products);
        } catch (error) {
          console.log("Error: ", error.message);
        }
      });
    },
    [slug],
    [productsByCat]
  );

  return (
    <>
      <section className="layout_padding">
        <div className="container-fluid">
          <h2 className="text-uppercase fw-bold text-center mb-5">
            Sản phẩm của chúng tôi
          </h2>
          <div className="layout-card">
            {productsByCat.map((product, index) => {
              return (
                <>
                  <ProductItem key={index} product={product} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsByCat;

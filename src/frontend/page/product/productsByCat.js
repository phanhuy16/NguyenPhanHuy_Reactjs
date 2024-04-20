import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "../product/productItem";

const ProductsByCat = () => {
  const { slug } = useParams();
  const [productsByCat, setProductsByCat] = useState([]);

  useEffect(() => {
    apiProduct.getDetailProductBySlug(slug).then((res) => {
      try {
        const data = res.data;
        const products = data.map((item) => {
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
  }, [slug]);

  return (
    <>
      <div className="'row px-5 products">
        <h1>Sản phẩm của chúng tôi</h1>
        {productsByCat.map((product, index) => {
          return (
            <>
              <ProductItem key={index} product={product} />
            </>
          );
        })}
      </div>
    </>
  );
};
export default ProductsByCat;

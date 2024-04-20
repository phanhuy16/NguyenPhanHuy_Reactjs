import React, { useState, useEffect } from "react";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "./productItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiProduct.getAll().then((res) => {
      try {
        // console.log("res", res.data);
        const productData = res.data.map((product) => {
          return {
            id: product.id,
            name: product.attributes.product_name,
            price: product.attributes.price,
            slug: product.attributes.slug,
            image: product.attributes.image.data.attributes.url,
          };
        });
        setProducts(productData);
      } catch (err) {
        console.log("Error: ", err.message);
      }
    });
  }, []);

  return (
    <>
      <section className="layout_padding">
        <div className="container-fluid">
          <h2 className="text-uppercase fw-bold text-center mb-5">
            Tất cả sản phẩm
          </h2>
          <div className="layout-card">
            {products.map((product, index) => {
              return (
                <>
                  <ProductItem key={index} product={product} />
                </>
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
            <a className="btn-link" href="h">
              See more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;

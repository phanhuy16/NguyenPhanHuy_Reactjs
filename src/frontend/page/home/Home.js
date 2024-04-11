import Client from "../../components/Client";
import AboutUs from "../../components/AboutUs";
import Discount from "../../components/Discount";
import Feature from "../../components/Feature";
import Contact from "../../components/Contact";
import Slider from "../../components/Slider";
import { useState, useEffect } from "react";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "../product/productItem";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

export default function Home() {
  const [newProduts, setnewProduts] = useState([]);
  const [promotionProducts, setPromotionProducts] = useState([]);
  useEffect(() => {
    apiProduct.getNewest().then((res) => {
      try {
        const newProdutsData = res.data.map((product) => {
          return {
            id: product.attributes.id,
            name: product.attributes.product_name,
            price: product.attributes.price,
            slug: product.attributes.slug,
            image: product.attributes.image.data.attributes.url,
          };
        });
        setnewProduts(newProdutsData);
        // console.log(newProduts);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  //--------------------------------------------------------
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
      <div className="hero_area">
        <Slider />
      </div>
      <Feature />
      <Discount />
      <section className="layout_padding">
        <div className="container-fluid">
          <h2 className="text-uppercase fw-bold text-center mb-5">
            Sản phẩm mới nhất
          </h2>
          <div className="layout_padding2">
            <div class="layout-card">
              {newProduts.map((product, index) => {
                return <ProductItem key={index} product={product} />;
              })}
            </div>
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
      </section>
      <AboutUs />
      <Client />
      <Contact />
    </>
  );
}

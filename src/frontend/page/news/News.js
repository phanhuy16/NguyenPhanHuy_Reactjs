import Discount from "../../components/Discount";
import Feature from "../../components/Feature";

export default function News() {
  return (
    <>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="custom_heading-container ">
            <h2>News</h2>
          </div>

          <div className="img-box">
            <img
              src={require("../../asset/images/about-medicine.png")}
              alt=""
            />
          </div>
          <div className="detail-box">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </p>
            <div className="d-flex justify-content-center">
              <a href="h">Read More</a>
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <div className="layout_padding-bottom">
        <Discount />
      </div>
    </>
  );
}

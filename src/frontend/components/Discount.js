export default function Discount() {
  return (
    <>
      <section className="discount_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-5 offset-md-2">
              <div className="detail-box">
                <h2>
                  You get <br />
                  any medicine <br />
                  on
                  <span>10% discount</span>
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by
                </p>
                <div>
                  <a href="h">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-5">
              <div className="img-box">
                <img src={require("../asset/images/medicines.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

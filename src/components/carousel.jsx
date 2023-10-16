import "./CSS/carousel.css";
function Carousel() {
  return (
    <section className="caro">
      <div
        id="carousel-2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="6000"
      >
        <ol className="carousel-indicators">
          <li data-target="#carousel-2" data-slide-to="0" className="active" ></li>
          <li data-target="#carousel-2" data-slide-to="1"></li>
          <li data-target="#carousel-2" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
        <div className="item active">
            <a>
              <img
                src={require("./Assests/Images/banner/banner-4.jpg")}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </a>
          </div>
          <div className="item">
            <a>
              <img
                src={require("./Assests/Images/banner/banner-1.jpg")}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </a>
          </div>
          <div className="item">
            <a>
              <img
                src={require("./Assests/Images/banner/banner-7.jpg")}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </a>
          </div>

          <div className="item">
            <a>
              <img
                src={require("./Assests/Images/banner/banner-8.jpg")}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </a>
          </div>

          
          <div className="item">
            <a>
              <img
                src={require("./Assests/Images/banner/banner-5.jpg")}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </a>
          </div>
          <div className="item">
            <a>
              <img
                src={require("./Assests/Images/banner/banner-6.jpg")}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </a>
          </div>
          
          
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-2"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-2"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
export default Carousel
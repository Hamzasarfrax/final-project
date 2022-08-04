import React from "react";
import "../style/card.css";
import Image from "react-bootstrap/Image";
import Slider from "react-slick";

const card = () => {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-card" data-aos="zoom-in">
        <div className="container ">
          <div className="row">
            <Slider {...settings} className="mx-5  py-5 position-card">
              <div>
                <img
                  src={require("../images/Cart-01.png")}
                  className="image-fluid w-75 col-md  slidr-img animation"
                />
                <div className="container">
                  <div className="row">
                    <div className="col ">
                      <button className="btn btn-primary batn-opacity">
                        Details
                      </button>

                      <button className="btn btn-primary mx-4 batn-opacity ">
                        Apply Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={require("../images/Cart-02.png")}
                  className="image-fluid w-75  col-md animation"
                />

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary batn-opacity">
                        Details
                      </button>
                      <button className="btn btn-primary mx-2 batn-opacity ">
                        Apply Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={require("../images/Cart-03.png")}
                  className="image-fluid w-75  col-md animation"
                />

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary batn-opacity">
                        Details
                      </button>
                      <button className="btn btn-primary mx-2 batn-opacity ">
                        Apply Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={require("../images/Cart-04.png")}
                  className="image-fluid w-75  col-md animation"
                />

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary batn-opacity">
                        Details
                      </button>
                      <button className="btn btn-primary mx-2 batn-opacity ">
                        Apply Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={require("../images/Cart-05.png")}
                  className="image-fluid w-75  col-md animation"
                />

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary batn-opacity">
                        Details
                      </button>
                      <button className="btn btn-primary mx-2 batn-opacity ">
                        Apply Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={require("../images/Cart-06.png")}
                  className="image-fluid w-75  col-md animation"
                />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary batn-opacity">
                        Details
                      </button>
                      <button className="btn btn-primary mx-2 batn-opacity ">
                        Apply Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;

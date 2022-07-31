import React from 'react'
import Slider from "react-slick";
import flagslider from '../style/flagslider.module.css';
const Flagslider = () => {
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>

<div className={flagslider.flag}>
<div className='container'>
    <div className="row">
        <div className='col'>

<Slider  {...settings} className={flagslider.arrow }  >
          <div>
            <img src={require("../images/Airlines Logo-01.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-02.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-03.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-04.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-05.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-06.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-07.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-08.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-09.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-10.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-11.png")} className="w-50 flag-img"/>
          </div>
          <div>
          <img src={require("../images/Airlines Logo-12.png")} className="w-50 flag-img"/>
          </div>
        </Slider>
        </div>
        </div>
        </div>
        </div>










    </div>
  )
}

export default Flagslider;
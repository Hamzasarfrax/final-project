import React,{useState} from 'react'
// import Slider from 'react-silk';
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel';
import carousl from '../style/carousl.css';
import silk from'../style/silk.module.css';
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
const Carsoul = () => {
  const [show, setShow] = useState();
  
  const [image, setimage] = useState();
  

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      
    };



  return (
    <>
    <Slider {...settings} className={silk.margin}>
    

        <div className='container-fluid'  expand="lg" >
          <div className='row'>

           <div className='col-md text-white'>
<h1 className='text-center text'>
  welcome to travel wave
</h1>

           </div>
      


           </div>
          </div>
     
      
{/* this is second */}

        <div className='container-fluid'  expand="lg" >
          <div className='row'>

           <div className='col-md text-white'>
           <h1 className='text-center text'>
  welcome to travel wave
</h1>
           </div>






          </div>
        </div>




{/* 
this is third slide */}
        <div className='container-fluid'  expand="lg" >
          <div className='row'>

           <div className='col-md text-white'>
           <h1 className='text-center text'>
  welcome to travel wave
</h1>
           </div>


  


          </div>
        </div>
      
            
        </Slider>
     
    </>
  )
}

export default Carsoul;
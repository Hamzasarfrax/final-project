import React,{useState} from 'react'
import about from "../style/about.css";
const About = () => {
  const [show, setShow] = useState();
  return (
    <div>
        
    
        <div className='container about-us about-page my-5'>
  <div className='row'>
    <div className='col-sm'>
<h1 className='text-center about colr'> <span className='colar'>About</span>  us</h1>

    </div>
  </div>
</div>









<div className='logo-info about-logo-info '>
<div class="container">
  <div class="row">

    <div className='col-sm'>
<div className='text-center'>
<img src={require("../images/one-logo.png")}  className="my-2 logo-animate"/></div>
<div className='text-center'>
<img src={require("../images/stand-logo.png")}  className=" stand-animate"/></div>

<h3 className='info-main text-center'>travel wave private limited </h3>
<p className='text-center'>(DREAM | EXPLORE | DISCOVER )</p>
<br></br>

<p className='text-center '>
  
Travel Wave (Pvt) Ltd is the leading name in Travel and Tourism industry, Since 2018, Travel Wave (Pvt.) Ltd. has been committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you and to facilitate your travel needs. Whether you're looking to get assistance in your Visa Process or wish to plan holiday packages or want to go abroad or required to have a travelling partner for your needs, Travel Wave is there with you help you out. We would love to serve you!
   </p>




    </div>
  </div>
  </div>
  </div>



{/* 
<p className=''>





Travel Wave (Pvt) 
Ltd is the leading name in Travel and Tourism industry,
 Since 2018, Travel Wave (Pvt.) Ltd. has been committed to 
 bringing our clients the best in value and quality travel 
 arrangements. We are passionate about travel and sharing the 
 world's wonders with you and to facilitate your travel needs. 
 Whether you're looking to get assistance in your Visa Process or
  wish to plan holiday packages or want to go abroad or required to 
  have a travelling partner for your needs, Travel Wave is there with
   you help you out. We would love to serve you!




</p> */}

    </div>
  )
}

export default About;
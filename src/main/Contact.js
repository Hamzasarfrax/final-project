import React,{useState,useRef} from 'react'
import Flagslider from '../main/Flagslider';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {Button, Navbar, Nav} from 'react-bootstrap';
import   "../style/contact.css";  
const Contact = () => {

  return (
    <div className='contact-page'>
        
     

        <div className="map-img" >

<div className='container my-5'>
  <div className='row'>
    <div className='col-sm'>
    
<h1 className='text-center my-5 colr data-pick'>Contact <span className='colar'>us</span>  </h1>

    </div>
  </div>
</div>



{/* this is sock type and contact page */}


{/* this is contact and animate w\orld div */}
<div className='data-pick'>

<div className='container ' >

  <div className='row'>

 
    <div className='col-md '>
    <div className='sock trans'>
      <h1 className='text-center py-4'>
      Lets Explore The World
      </h1>
<div className='rotae-world text-center'>

  <img src={require("../images/world.png")} alt="log0"  className='animate-world w-50 my-4 opacity'/>
</div>

    </div>
    </div>

{/* thsi si contact us page wlaa data */}


    <div className='col-md form-data transform  '>
      <div className=' my-5'>
<Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control type="name" placeholder="Name" className='form-main' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control type="number" placeholder="Phone"  className='form-main'/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control type="email" placeholder="Email" className='form-main' />
  </Form.Group>


  <Form.Select aria-label="Default select example" className='form-main mb-3' >
  <option>Select</option>
  <option value="1">Visa</option>
  <option value="2">Flight</option>
  <option value="3">Package</option>
  <option value="3">General</option>
</Form.Select>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control as="textarea" type="message" placeholder="Messsage" className='form-main MAX-WID'/>
  </Form.Group>
  
  
  <Button variant="primary" type="submit" className='form-btn'>
    Submit
  </Button>


  <p className='py-5'>Got Questions ? Call us 24/7
Call Us: 03 111 123 002</p>
</Form>
</div>



  </div>

</div>

</div>
</div>
</div>






<Flagslider/>



<div className='container news-bg'>
  <div className='row'>
    <div className='col-sm'>
<h1 className="text-center my-5">News Letter's</h1>
< p className="text-center my-5">
  
TMB is all set to introduce best quality coconut bats soon, for more information .....
  
   </p>

    </div>

    <div className='col-sm news-pick-up'>
<div className='news-input'>
      <Form.Control type="email" placeholder="Email" className="baton-of-news w-75 " />
      <button className='btn btn-primary subcribe-batn '>subscribe</button>
   
      </div>
</div>


  </div>
</div>




















        
        </div>
  )
}

export default Contact;
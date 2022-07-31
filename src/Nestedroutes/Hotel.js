import React,{useRef,useState} from 'react'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";
import DatePicker from 'react-date-picker';
import hotels from '../Nestedroutes/hotels.css';
import search from '../Nestedroutes/search.css';
import {Button} from 'react-bootstrap';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'

const Hotel = () => {
  const [value, onChange] = useState();
  const [count, setCount] = useState(1);
  const [count2, setCountb] = useState(1);
  const [count3, setCountc] = useState(1);
  const [show, notshow] = useState();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
const inputRef=useRef(null)
function data(e){
  onChange(e.target.value)

}
function change(){



  inputRef.current.value="hamza"
}






function increment() {

  if (count < 10) {

    setCount(count + 1)
  }
  else {
    setCount(0)

  }

}


function increment2() {

  if (count2 < 10) {

    setCountb(count2 + 1)
  }
  else {
    setCountb(0)

  }

}



function increment3() {

  if (count3 < 10) {

    setCountc(count3 + 1)
  }
  else {
    setCountc(0)

  }

}

function decrement() {

  if (count > 1) {
    setCount(count - 1)
  }
  else {
    setCount(0)

  }

}


function decrement2() {

  if (count2 > 1) {
    setCountb(count2 - 1)
  }
  else {
    setCountb(0)

  }

}

function decrement3() {

  if (count3 > 1) {
    setCountc(count3 - 1)
  }
  else {
    setCountc(0)

  }

}







function togle() {

  return (

    <>

{/* <Form onSubmit={handleSubmit(onSubmit)}> */}
      <div className='check'>

        <div className='container home-hotels'>
          <div className='row'>
            <div className=''>

              <div className='col'>

        
              </div>
              <div className='col'>
                <div className='data-hotel-input'>

                <h5 className='text-white'>Adults <span>11+Years</span></h5>

                <button onClick={() => increment()} className="hotel-home-batn"  > <CgMathPlus className='icon-hotel-btn' /></button>

                <span> <p className='text-white hotel-home-batn hotel-counter'>{count}</p></span>
                <button onClick={(e) => decrement()} className="hotel-home-batn"> <CgMathMinus className='icon-hotel-btn' /></button>
              </div>



              <div className='col'>

                <h5 className='text-white'>Children <span>2-Years</span></h5>

                <button onClick={(e) => increment2()} className="hotel-home-batn" > <CgMathPlus className='icon-hotel-btn' /></button>

                <span> <p className='text-white hotel-home-batn hotel-counter'>{count2}</p></span>
                <button onClick={(e) => decrement2()} className="hotel-home-batn"> <CgMathMinus className='icon-hotel-btn' /></button>
              </div>





              <div className='col'>
                <h5 className='text-white'>Infants <span>0-23-months</span></h5>
                <button onClick={(e) => increment3()} className="hotel-home-batn"> <CgMathPlus className='icon-hotel-btn' /></button>

                <span> <p className='text-white hotel-home-batn hotel-counter'>{count3}</p></span>
                <button onClick={(e) => decrement3()} className="hotel-home-batn"> <CgMathMinus className='icon-hotel-btn' /></button>
              </div>




            </div>
          </div>
        </div>
        </div>
      </div>

      {/* </Form> */}

    </>

  )

}









  return (
    <div className='check'>


      <div className='container '>
        <div className='row'>
          <div className='hotelsdata'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className='col-xl-3 col-lg-4 col-12 col-sm-12 col-md-4 d-inline-block '>

   
          <Form className="d-flex     " >
        <Form.Control
          type="search"
          placeholder=" Search Country"
          className=" radius  "
          aria-label="Search"
        />

      </Form>

          </div>

          <div className='col-xl-2 col-lg-4 col-12 col-md-4 col-sm-12 d-inline-block mx-5 '>

     
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="hade">Check In</Form.Label>
    <Form.Control type="date" placeholder="Enter email" name="hamza"
    
    className='  align-check-in mx-2 '
    {...register("hamza")} onClick={change}/>

  </Form.Group>

            
</div>



<div className='col-xl-2  col-lg-4  col-md-4 col-12  col-sm-12 d-inline-block '>


<div className=''>
<Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label className="checheading hade">Check Out</Form.Label>
    <Form.Control type="date" placeholder="Enter email" name="hamza"
    
    className='checkout '
    {...register("hamza")} onClick={change}/>

  </Form.Group>
              </div>
       
</div>



<div className='col-xl-5  col-lg-4  col-md-4 col-sm-12 d-inline-block'>

  <Form.Group className="" controlId="formBasicEmail">
    <Form.Label className="mx-5 hade">No Of Traveler's  {show ? togle() : ""}</Form.Label>
    <Form.Control type="text" placeholder={`Traveler's ${count + count2 + count3}`} name="khan" 
    className="no-travels mx-5 "
    {...register("khan")} 
    
    onClick={() => notshow(!show)} 
    />
  {show ? togle() : ""}
  </Form.Group>

            
</div>


<button className='btn btn-primary hotelsbatn' type='submit'>submit</button>
</Form>
</div>



        </div>
      </div>
    </div>
  )
}

export default Hotel;
import React, { useState,useRef } from 'react'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-date-picker';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { ToggleButton } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useForm } from "react-hook-form";
const Flights = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const [value, onChange] = useState();

  const [count, setCount] = useState(1);
  const [count2, setCountb] = useState(1);
  const [count3, setCountc] = useState(1);
  const [show, notshow] = useState();
  const [get, setget] = useState();
  const [value1, setValue] = useState(["first class", "bussiness", "economt"]);
  
  
  
  let  inputRef=useRef(null);
  let  inputbRef=useRef(null);
  let  inputcRef=useRef(null);


function thanks(){

}

  function handleinput(){



 
    inputRef.current.value= `Traveler's ${count + count2 + count3}  ${get}`
  }

  function handleinputb(){



 
    inputRef.current.value=`Traveler's ${count + count2 + count3} ${get}`
  }
  function handleinputc(){



 
    inputRef.current.value=`Traveler's ${count + count2 + count3} ${get}`
  }


  
  
  
  
  
  function data(e) {

    setget(e.target.value);

  }

  function control(e) {


    e.preventDefault();
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

          <div className='container home-flights'>
            <div className='row'>
              <div className=''>

                <div className='col'>

                  <h1 className='text-white'>Class{get}</h1>
                  <ToggleButtonGroup type="checkbox"  className="focus" >
                    <ToggleButton id="tbg-btn-1" value={`${"Economy "} `} onChange={data} className="d-inline batn-of-flights " name="first"     onClick={handleinput}>
                    Economy Class
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={`${"  First "} `} onChange={data} className="d-inline batn-of-flights border " name="bussiness" onClick={handleinputb}>
                     First  Class
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-3" value={`${" Bussiness "} `} onChange={data} className="d-inline batn-of-flights " name="economy"  onClick={handleinputc}>
                       Bussiness Class
                    </ToggleButton>
                  </ToggleButtonGroup>
                  {/* <Form.Control type="text" placeholder="Travel from"    className="d-inline batn-of-flights " onClick={data}  />
<button className='batn-of-flights btn ' type='checkbox'   > first class</button>
<button className='batn-of-flights btn ' type='checkbox' onClick={data}  > economy</button>
<button className='batn-of-flights btn ' type='checkbox' onChange={data}  > bussiness</button> */}

                </div>
                <div className='col'>

                  <h5 className='text-white'>Adults <span>11+Years</span></h5>

                  <button onClick={() => increment()} className="flights-home-batn"  > <CgMathPlus className='icon-flights-btn' /></button>

                  <span> <p className='text-white flights-home-batn counter'>{count}</p></span>
                  <button onClick={(e) => decrement()} className="flights-home-batn"> <CgMathMinus className='icon-flights-btn' /></button>
                </div>



                <div className='col'>

                  <h5 className='text-white'>Children <span>2-Years</span></h5>

                  <button onClick={(e) => increment2()} className="flights-home-batn" > <CgMathPlus className='icon-flights-btn' /></button>

                  <span> <p className='text-white flights-home-batn counter'>{count2}</p></span>
                  <button onClick={(e) => decrement2()} className="flights-home-batn"> <CgMathMinus className='icon-flights-btn' /></button>
                </div>





                <div className='col'>
                  <h5 className='text-white'>Infants <span>0-23-months</span></h5>
                  <button onClick={(e) => increment3()} className="flights-home-batn"> <CgMathPlus className='icon-flights-btn' /></button>

                  <span> <p className='text-white flights-home-batn counter'>{count3}</p></span>
                  <button onClick={(e) => decrement3()} className="flights-home-batn"> <CgMathMinus className='icon-flights-btn' /></button>
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


      <div className='container flights-data'>
        <div className='row'>
      
            <Form onSubmit={handleSubmit(onSubmit)}>
<div className="col-xl-3 col-lg-2   display  "> 


              <Form.Control type="text" placeholder="Travel from" className=" lenght-from" {...register("travelfrom")} name="travelfrom"  required/>

              </div>

              <div className="   col-lg-2 display"> 

              <Form.Control type="text" placeholder="Travel to" className="lenght " name="travelto" {...register("travelto")} required/>
              
              </div>
              <div className="col-lg-2 display"> 
              
              <div className=' flights-date '>
               
              
              <Form.Control type="date" placeholder="Travel from" className=" width space" {...register("travelfrom")} name="travelfrom"  required/>


              </div>
              </div>
              <div className="col-lg-2  display"> 
              <div className=' flights-date ' >
               
              <Form.Control type="date" placeholder="Travel from" className="date-marging width " {...register("travelfrom")} name="travelfrom"  required/>


              </div>
              </div>
              <div    >
                <h1>{show ? togle() : ""}</h1>
                <div className="col-lg-3 display py-2"> 
                <Form.Control type=""  className=" me-2 cursor" onClick={() => notshow(!show)}  
                
                name="familyinfo "   {...register("familyinfo")}
            
           ref={inputRef}
           
                />
 </div>
              </div>
              <Button type='submit' className='btn btn-danger batn-flights' onClick={thanks}>submit </Button>
            </Form>
          </div>
        </div>



    </div>
  )
}

export default Flights;
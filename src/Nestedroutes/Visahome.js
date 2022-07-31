import React from 'react'
import {Form, Button} from 'react-bootstrap';
const Visahome = () => {
  return (
    <div className='check active'>
    <div className='container'>
      <div className='row'>
        <div className='col active'>
        <Form className="d-flex   home-search  active" >
        <Form.Control
          type="search"
          placeholder=" Search Country"
          className="me-2 radius active"
          aria-label="Search"
        />
        <Button variant="outline-grey searchbatn">Search</Button>
      </Form>

        </div>
      </div>
    </div>
    
 
    </div>
  )
}

export default Visahome;
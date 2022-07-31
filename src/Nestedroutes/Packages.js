import React from 'react'
import {Form, Button} from 'react-bootstrap';
import search from '../Nestedroutes/search.css'
const Packages = () => {
  return (
    <div className='check'>



<div className='container'>
      <div className='row'>
        <div className='col '>
        <Form className="d-flex   packages-search  smal-sarc-sixe" >
        <Form.Control
          type="search"
          placeholder=" Search Country"
          className="me-2 radius"
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

export default Packages;
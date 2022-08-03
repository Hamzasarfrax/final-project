import React, { useState } from "react";
import visa from "../style/visa.css";
import Dynamicdata from "../main/Dynamicdata";
import { Form, Button } from "react-bootstrap";
import Search from "./Search";
import Modal from "react-bootstrap/Modal";
import dynamic from "../style/dynamic.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Visa = () => {
  const [searchfilter, setsearchfilter] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const [smshow, setsmShow] = useState(false);

  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-sm-12">
              <div className="box-visa-tranparent"></div>

              <div className="center">
                <Form className="d-flex  search-width">
                  <Form.Control
                    type="search"
                    placeholder=" Search Country"
                    className="me-2 radius"
                    aria-label="Search"
                    onChange={(e) => setsearchfilter(e.target.value)}
                  />
                  <Button variant=" visa-search-btn">Search</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container cont2">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
   

        <div className="row ">
          <h1 className="text-center my-5">Visit Visa Services</h1>

          {Search.filter((val) => {
            if (searchfilter == "") {
              return val;
            } else if (val.name.includes(searchfilter.toLowerCase())) {
              return val;
            }
          }).map((data) => {
            return (
              <>
                <div className="col-sm-12 col-xl-3 col-lg-4 col-md-6 ">
                  <div className="box my-5 col-lg-12" key={data.id}>
                    <div className="text-center">
                      <img className="country-flag  " src={data.img} />{" "}
                    </div>

                    <h4 className="text-center heading"></h4>
                    <h4 className="text-center heading">{data.name}</h4>
                    <p className="text-center">{data.pkr}</p>

                    <button
                      className="text-center btn btn-primary  batn"
                      onClick={() => setLgShow(true)}
                    >
                      {" "}
                      <span></span>Details
                    </button>
                    <button
                      className="text-center btn btn-primary  batn"
                      onClick={() => setsmShow(true)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                  className="modal-detail"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {data.countname}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{data.countheading}</Modal.Body>
                </Modal>

                <Modal
                  size="lg"
                  show={smshow}
                  onHide={() => setsmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                  className="modal-detail"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {data.countname}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {data.countheading}

                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </>
            );
          })}
        </div>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Visa;

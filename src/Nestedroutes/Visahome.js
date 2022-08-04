import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import search from "../main/Search";
const Visahome = () => {
  const [data, setdata] = useState(search);
  const [filter, setfilter] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const [smshow, setsmShow] = useState(false);
  console.log(search);
  return (
    <div className="check active">
      <div className="container">
        <div className="row">
          <div className="col active">
            <Form className="d-flex   home-search  active">
              <Form.Control
                type="search"
                placeholder=" Search Country"
                className="me-2 radius active"
                aria-label="Search"
              />
              <Button
                variant="outline-grey searchbatn"
                onChange={(e) => setfilter(e.target.value)}
              >
                Search
              </Button>
            </Form>
            {data
              .filter((val) => {
                if (filter == "") {
                  return "";
                } else if (val.name.value.includes(filter.toLowerCase())) {
                  return val;
                }
              })
              .map((data) => {
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
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visahome;

import React, { useState } from "react";
import home from "../style/home.css";
import Card from "../main/card";
import Carsoul from "../main/Carsoul";
import { BsGiftFill } from "react-icons/bs";
import { FaCcVisa, FaBusAlt, FaHotel } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Button, Navbar, Nav } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import Flagslider from "../main/Flagslider";
import { Link, Outlet } from "react-router-dom";
import search from "../Nestedroutes/search.css";
import Searchbar from "../Nestedroutes/Searchbar";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  AOS.init({});
  // const [show ,notshow]=useState(togle());
  // const [togle2 ,notogle2]=useState();
  // const [togle3 ,notogle3]=useState();

  return (
    <div className="all-home-content">
      <div className="main-img">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="contain-box"></div>
            <div className="col-xl-12">
              {/* <h1 className="text-center travel-wave-main-heading" >welcome to travel wave</h1> */}
              <div></div>
              <Searchbar />
            </div>
          </div>
        </div>
      </div>

      {/* hamza sadksnbnfb */}

      {/* this is image hover home like mr travel */}

      {/* ===============================about us============================================= */}

      {/* 
<Button color="primary" size="lg" onClick={() => window.location.href="Scanner.html"}>Scan Asset</Button> */}

      <div className="data-home" data-aos="fade-up">
        <div className="container about-us my-5">
          <div className="row">
            <div className="col-sm">
              <h1 className="text-center about colr">
                {" "}
                <span className="colar">About</span> us
              </h1>
            </div>
          </div>
        </div>

        <div className="logo-info my-5">
          <div class="container">
            <div class="row">
              <div className="col-sm" data-aos="fade-down">
                <div className="text-center">
                  <img
                    src={require("../images/one-logo.png")}
                    className="my-2 logo-animate"
                  />
                </div>
                <div className="text-center">
                  <img
                    src={require("../images/stand-logo.png")}
                    className=" stand-animate"
                  />
                </div>

                <h3 className="info-main text-center">
                  travel wave private limited{" "}
                </h3>
                <p className="text-center">(DREAM | EXPLORE | DISCOVER )</p>
                <br></br>

                <p className="text-center ">
                  Travel Wave (Pvt) Ltd is the leading name in Travel and
                  Tourism industry, Since 2018, Travel Wave (Pvt.) Ltd. has been
                  committed to bringing our clients the best in value and
                  quality travel arrangements. We are passionate about travel
                  and sharing the world's wonders with you and to facilitate
                  your travel needs. Whether you're looking to get assistance in
                  your Visa Process or wish to plan holiday packages or want to
                  go abroad or required to have a travelling partner for your
                  needs, Travel Wave is there with you help you out. We would
                  love to serve you!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col" data-aos="fade-left">
              <h1 className="text-center service-heading colr">
                Our <span className="colar">Services</span>
              </h1>

              <p></p>
            </div>
          </div>
        </div>

        <div className="product-hover">
          <div class="container" data-aos="zoom-in-up">
            <div class="row">
              <div class="col-sm  col-xl-4  col-lg-4  my-5">
                <p className="text-center icons-box">
                  <BsGiftFill />
                </p>
                <span>
                  {" "}
                  <hr className="line-horixontal"></hr>
                </span>
                <h1 className="text-center">Packages</h1>
                <hr className="horzontal"></hr>
                <p className=" text-center">
                  Now you can visit your dream destinations and explore the
                  world with us. We are here to provide you mouth watering
                  packages which includes Flights, Accommodation, Transfers,
                  Activities, Insurance and Meal with best price.
                </p>
              </div>
              <div class="col-sm  col-xl-4  col-lg-4  my-5">
                <p className="text-center icons-box ">
                  <FaCcVisa />
                </p>
                <span>
                  {" "}
                  <hr className="line-horixontal"></hr>
                </span>
                <h1 className="text-center">Visa</h1>
                <hr className="horzontal"></hr>
                <p className="text-center">
                  Contact with our experienced team regarding your profile and
                  get the best advise for your future Our experienced team help
                  you in processing your visa applications. Complete file
                  preparation and documents assistance provided.
                </p>
              </div>
              <div class="col-sm col-xl-4 col-lg-4 my-5">
                <p className="text-center icons-box bas-repn">
                  <FaBusAlt />
                </p>
                <span>
                  {" "}
                  <hr className="line-horixontal third"></hr>
                </span>
                <h1 className="text-center">Insurance</h1>
                <hr className="horzontal"></hr>
                <p className="text-center">
                  Travel insurance provides medical and financial assistance
                  during traveling. Before starting a trip make sure that you
                  must be properly and securely covered for any emergency aid.
                  There are many insurance companies in Pakistan for providing
                  these services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* this is  */}

        <div className="container " data-aos="flip-up">
          <div className="row">
            <div className="col">
              <div className="our-porduct">
                <h1 className="text-center dsetinations colr">
                  {" "}
                  Top <span className="colar">Destinations</span>
                </h1>
                <div>
                  {" "}
                  <p className=" text-center dsetinations py-5 set-width">
                    With a world full of fascinating destinations, choosing the
                    perfect vacation spot can present a challenge. Now you can
                    enjoy and evaluated sights, cultures, scenic beauty, food
                    scenes and more – to compile this list of the world's best
                    places to visit. Some of the below destinations are the top
                    visiting destinations now a days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col"></div>
            </div>
          </div>

          {/* =========thisn is card  ===============*/}
        </div>

        <Card />

        {/* this is contatct us of home */}

        <div className="map-img">
          <div className="container my-5" data-aos="fade-up">
            <div className="row">
              <div className="col-sm">
                <h1 className="text-center my-5 colr data-pick">
                  Contact <span className="colar">us</span>{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* this is sock type and contact page */}

          {/* this is contact and animate w\orld div */}
          <div className="data-pick">
            <div className="container " data-aos="fade-up">
              <div className="row">
                <div className="col-md ">
                  <div className="sock trans">
                    <h1 className="text-center py-4">Lets Explore The World</h1>
                    <div className="rotae-world text-center">
                      <img
                        src={require("../images/world.png")}
                        alt="log0"
                        className="animate-world w-50 my-4 opacity"
                      />
                    </div>
                  </div>
                </div>

                {/* thsi si contact us page wlaa data */}

                <div className="col-md form-data transform  ">
                  <div className=" my-5">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="name"
                          placeholder="Name"
                          className="form-main"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="number"
                          placeholder="Phone"
                          className="form-main"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="form-main"
                        />
                      </Form.Group>

                      <Form.Select
                        aria-label="Default select example"
                        className="form-main mb-3"
                      >
                        <option>Select</option>
                        <option value="1">Visa</option>
                        <option value="2">Flight</option>
                        <option value="3">Package</option>
                        <option value="3">General</option>
                      </Form.Select>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          as="textarea"
                          type="message"
                          placeholder="Messsage"
                          className="form-main MAX-WID"
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="btn form-btn"
                      >
                        Submit
                      </Button>

                      <p className="py-5">
                        Got Questions ? Call us 24/7 Call Us: 03 111 123 002
                      </p>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* this is lider of flage of many countries of adil bhai  */}

        <Flagslider />

        <div className="container news-bg" data-aos="flip-left">
          <div className="row">
            <div className="col-sm">
              <h1 className="text-center my-5">News Letter's</h1>
              <p className="text-center my-5 text-capitalize">
              Tw is all set to introduce best quality airlines soon, for
              more information .....
              </p>
            </div>

            <div className="col-sm news-pick-up">
              <div className="news-input">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="baton-of-news w-75 "
                />
                <button className="btn btn-primary subcribe-batn ">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
this is first close div tag nothing else */}
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import insurance from "../style/insurance.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import DatePicker from 'sassy-datepicker';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import AOS from "aos";
import "aos/dist/aos.css";
const Insurance = () => {
  AOS.init({});
  const [value, onChange] = useState();
  const [click, setclick] = useState(null);
  const [message, SetMessage] = useState("");
  const [messagErr, SetMessagErr] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // const onChange= new DatePicker();

  function Data(e) {
    let item;
    if (item.value < 5()) {
      SetMessagErr(true);
    } else {
      SetMessagErr(false);
    }
  }

  return (
    <div>
      {/* this is main img of insurance */}
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img1"
            src={require("../images/insurance.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img1"
            src={require("../images/insurance4.jpeg")}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={require("../images/insurance2.jpeg")}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* this is for checkbox */}

      <div className="container margin  contain-margin" data-aos="fade-down">
        <div className="row">
          <h1 className="text-center mb-5 form-heading ">
            {" "}
            Travel Insurance Form
          </h1>
          <div className="col-sm-4 col-6 col-xl-4 col-md-4  ">
            <Form.Label className="py-2 text-center color">
              schengen
              <Form.Check
                type="radio"
                className=" check-box text-center "
                value="1"
              />
            </Form.Label>
          </div>

          <div className="col-sm-4 col-6 col-xl-4 col-md-4 ">
            <Form.Label className="py-2 text-center color">
              world wide
              <Form.Check
                type="radio"
                className=" check-box text-center "
                value="2"
              />
            </Form.Label>
          </div>

          <div className="col-sm-4 col-4 col-xl-4 col-md-4  ">
            <Form.Label className="py-2 text-center color">
              other countries
              <Form.Check
                type="radio"
                className=" check-box text-center  "
                value="3"
              />
            </Form.Label>
          </div>
        </div>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md">
              <div className="">
                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Label
                    name="date"
                    {...register("date")}
                    className="heading-form"
                  >
                    {" "}
                    departure date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    data-date-inline-picker="true"
                    placeholder="Password"
                    className="form-travel "
                    required
                    {...register("exampleRequired", { required: true })}
                  />
                </Form.Group>

                <Form.Label className=" heading-form">no of days</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="form-travel"
                  name="select"
                  required
                  {...register("select")}
                >
                  <option> Select </option>
                  <option value="one">7 Days</option>
                  <option value="two">10 Days</option>
                  <option value="three">15 Days</option>
                  <option value="three"> 31 Days</option>
                  <option value="three">62 Days</option>
                  <option value="three">90 Days</option>
                  <option value="three">1 Year</option>
                </Form.Select>

                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Label
                    name="date"
                    {...register("date")}
                    className="heading-form"
                  >
                    date of birth
                  </Form.Label>

                  <div className=" ">
                    <input
                      type="date"
                      onChange={onChange}
                      value={value}
                      className="w-100 form-travel  date-of-birth"
                      yearPlaceholder="yyyy"
                      dayPlaceholder="dd"
                      monthPlaceholder="mm"
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Label
                    name="date"
                    {...register("date")}
                    className="heading-form"
                  >
                    passport no
                  </Form.Label>
                  <Form.Control
                    type="number"
                    data-date-inline-picker="true"
                    placeholder="AB12345"
                    className="form-travel"
                    required
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Label
                    name="date"
                    {...register("date")}
                    className="heading-form"
                  >
                    address
                  </Form.Label>
                  <Form.Control
                    type="address"
                    data-date-inline-picker="true"
                    placeholder="City, Country"
                    className="form-travel"
                    required
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Label
                    name="date"
                    {...register("date")}
                    className="heading-form"
                  >
                    beneficiary
                  </Form.Label>
                  <Form.Control
                    type="text"
                    data-date-inline-picker="true"
                    placeholder="Beneficiary Name"
                    className="form-travel"
                    required
                  />
                </Form.Group>

                <Form.Label className=" heading-form">
                  county to travel
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="form-travel"
                  name="select"
                  required
                  {...register("select")}
                >
                  <option> select menu</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </Form.Select>
              </div>
            </div>

            {/* ================this is sec colum ===============*/}

            <div className="col-md-12 col-lg-6 col-xl-6">
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label
                  name="date"
                  {...register("date")}
                  className="heading-form"
                >
                  {" "}
                  arrival date
                </Form.Label>
                <Form.Control
                  type="date"
                  data-date-inline-picker="true"
                  placeholder="Password"
                  className="form-travel"
                  required
                />
              </Form.Group>

              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Label className="heading-form">
                  Name of insured
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insured"
                  className="form-travel"
                  required
                  name="name-insurde"
                  {...register("name-insurde")}
                />
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label
                  name="date"
                  {...register("date")}
                  className="heading-form"
                >
                  {" "}
                  passport expiry
                </Form.Label>
                <Form.Control
                  type="date"
                  data-date-inline-picker="true"
                  placeholder="Password"
                  className="form-travel"
                  required
                />
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label
                  name="date"
                  {...register("date")}
                  className="heading-form"
                >
                  {" "}
                  CNIC
                </Form.Label>
                <Form.Control
                  type="number"
                  data-date-inline-picker="true"
                  placeholder="xxxxx-xxxxxxx-x"
                  className="form-travel"
                  required
                />
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label
                  name="date"
                  {...register("date")}
                  className="heading-form"
                >
                  {" "}
                  contact no
                </Form.Label>
                <Form.Control
                  type="text"
                  data-date-inline-picker="true"
                  placeholder="00923xxxxxxxxx"
                  className="form-travel"
                  required
                />
              </Form.Group>

              <Form.Label className=" heading-form">relation ships</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="form-travel"
                name="select"
                required
                {...register("select")}
              >
                <option> Select </option>
                <option value="one">Father</option>
                <option value="two">Mother</option>
                <option value="three">Brother</option>
                <option value="two">Sister</option>
                <option value="three">Husband</option>
                <option value="two">Wife</option>
                <option value="three">Son</option>
                <option value="three">Daughter</option>
              </Form.Select>

              <Form.Label className=" heading-form">policy type </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="form-travel"
                name="select"
                required
                {...register("select")}
              >
                <option> Select </option>
                <option value="one">Single</option>
                <option value="two">Family</option>
              </Form.Select>

              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary baton-insurance "
              >
                Submit
              </Button>

              <Button
                variant="primary"
                type="reset"
                className="btn btn-primary baton-insurance "
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Form>

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h3>Note</h3>
            <span>
              <div>Child Should Be Less Than 18 Years</div>
            </span>
            <span>
              <div>For Person Aged Betwen 66 to 70 Years, Increased 50%</div>
            </span>
            <span>For Person Aged Betwen 71 to 80 Years, Increased 75%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;

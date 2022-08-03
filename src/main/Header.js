import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { RiWhatsappLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import FloatingWhatsApp from "react-floating-whatsapp";
import header from "../style/header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { Twirl as Hamburger } from "hamburger-react";
// import {GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
  const [show, setShow] = useState();
  const [seen, setSeen] = useState();

  const timeout = setTimeout(
    () =>
      function time() {
        return (
          <>
            <h1> hamza loading</h1>
          </>
        );
      },

    9000
  );
  return (
    <>
      <Navbar className="navbar" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={require("../images/navlogo.png")} className="logo" />
          </Navbar.Brand>

          <Nav className={seen ? "navlinks mobile-menu" : "nothing-show"}>
            <li>
              <NavLink to="/" className="page home">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="page abut">
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/visa" className="page visa">
                visa
              </NavLink>
            </li>
            <li>
              <NavLink to="/insurance" className="page insurance">
                insurance
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="page contact ">
                contact
              </NavLink>
            </li>
          </Nav>
          <div className="hamburger">
            <Hamburger
              toggled={seen}
              toggle={setSeen}
              rounded
              size={15}
              color="#177881"
              easing="ease-in"
              className={header.hamburger}
              direction="hamburger"
            />
          </div>
          {/* <Button variant="" onClick={()=>setSeen(!seen)} className="hamburger"><GiHamburgerMenu/></Button> */}

          <Button
            variant=""
            href=""
            className="search-icon  "
            onClick={() => window.open("https://web.whatsapp.com/", "_blank")}
          >
            <FloatingWhatsApp className="" />
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

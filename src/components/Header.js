import React from "react";
import "../styles/header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="headerContainer">
      <div className="navbarContainer">
        <Navbar bg="transparent" expand="lg">
          <Navbar.Brand>Bits & Bites</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {location.pathname != "/" && 
                 <Nav.Link>
                 <span className="home-link" onClick={() => history.goBack()}>
                   Back
                 </span>
               </Nav.Link>
              }
             
              <Nav.Link>
                <NavLink className="home-link" to="/">
                  Home
                </NavLink>
              </Nav.Link>

              <NavDropdown
                className="textColor bgColor"
                title="Our Sections"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    className="home-link"
                    activeClassName="active-link"
                    to="/breackfast"
                  >
                    Breackfast
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="home-link"
                    activeClassName="active-link"
                    to="/appetizer"
                  >
                    Appetizers
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="home-link"
                    activeClassName="active-link"
                    to="/salad"
                  >
                    Salads
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button className="mx-3 textColor bgColor" variant="default">
                Sign in
              </Button>
              <Button className="mx-3 textColor bgColor" variant="default">
                Sign up
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="claimContainer d-flex flex-col  justify-content-center">
        <h1>Bits & Bites</h1>
      </div>
    </div>
  );
};

export default Header;

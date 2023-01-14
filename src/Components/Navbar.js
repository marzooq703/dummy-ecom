import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../index.css";

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" id="navbar">
      <Container>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png"
            className="logo"
            alt="logo"
          />
        </NavLink>
        <NavLink to="/cart" className="cart-nav">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
            className="cart-icon"
            alt="cart"
          />
          <span>
            Cart <span className="cart-item">0</span>
          </span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="hide">
          <Nav className="me-auto">
            <NavLink to="/" className="link ">
              Home
            </NavLink>
            <NavLink to="/products" className="link ">
              Products
            </NavLink>
            <NavLink to="/form" className="link ">
              Register/Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// document.ready(function () {
//   ".link".click(function () {
//     ".navbar Navbar.Collapse".
//   });
// });

// function Hide() {
//   const b = document.querySelector(".hide");
//   b.removeClass("show");
// }

export default BasicExample;

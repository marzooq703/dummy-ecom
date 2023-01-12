// import { NavLink } from "react-router-dom";
// import React from "react";
// import "../index.css";

// const Navbar = () => {
//   return (
//     <nav class="navbar" role="navigation" aria-label="main navigation">
//       <div class="navbar-brand">
//         <a class="navbar-item" href="https://bulma.io">
//           <img
//             src="https://bulma.io/images/bulma-logo.png"
//             width="112"
//             height="28"
//           />
//         </a>

//         <a
//           role="button"
//           class="navbar-burger"
//           aria-label="menu"
//           aria-expanded="false"
//           data-target="navbarBasicExample"
//         >
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//         </a>
//       </div>

//       <div id="navbarBasicExample" class="navbar-menu">
//         <div class="navbar-start">
//           <NavLink to="/" className="navbar-item">
//             Home
//           </NavLink>

//           <a class="navbar-item">Documentation</a>

//           <div class="navbar-item has-dropdown is-hoverable">
//             <a class="navbar-link">More</a>

//             <div class="navbar-dropdown">
//               <a class="navbar-item">About</a>
//               <a class="navbar-item">Jobs</a>
//               <a class="navbar-item">Contact</a>
//               <hr class="navbar-divider" />
//               <a class="navbar-item">Report an issue</a>
//             </div>
//           </div>
//         </div>

//         <div class="navbar-end">
//           <div class="navbar-item">
//             <div class="buttons">
//               <a class="button is-primary">
//                 <strong>Sign up</strong>
//               </a>
//               <a class="button is-light">Log in</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
          />
        </NavLink>
        <NavLink to="/cart" className="cart-nav">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
            className="cart-icon"
          />
          <span>
            Cart <span className="cart-item">0</span>
          </span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/products" className="link">
              Products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

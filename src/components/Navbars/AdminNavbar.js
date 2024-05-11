import React from "react";
import { Navbar, Container, NavbarBrand } from "reactstrap";

function AdminNavbar(props) {
  return (
    <Navbar className="navbar-absolute navbar-transparent" expand="lg">
      <Container fluid>
        <div className="navbar-wrapper">
          <NavbarBrand
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            style={{ paddingTop: "45px" }}
          >
            Dashboard
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="mr-auto fw-bold">
          Electro
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/promotions">Promotions</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

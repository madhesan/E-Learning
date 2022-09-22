import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Courses</Navbar.Brand>
          <Nav className="justify-content-end me-3">
            <Nav.Link href="#home">Courses</Nav.Link>
            <br />
            <Nav.Link href="#features">About Us</Nav.Link>
            <br />
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <br />
            <Button variant="outline-success">Sign Up</Button>
            <br />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
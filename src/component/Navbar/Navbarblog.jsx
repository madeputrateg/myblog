import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbarblog(props){
    return (
        <div>
        <Navbar bg="light" expand="lg" >
          <Container>
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand href="myblog/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '300px' }}
                navbarScroll
                >
                <Nav.Link href="myblog/project/">
                  Project
                </Nav.Link>
                <Nav.Link href="myblog/achievement/">
                Achievement
                </Nav.Link>
                <Nav.Link href="myblog/contact/" >
                  Contact info
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      );
}

export default Navbarblog;
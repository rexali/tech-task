import { Badge, Button, Row } from 'react-bootstrap';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownItems from "./DropDown";
import Drawer from "./Drawer";


const Navigation = (props) => { 

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
      <Container>

        <Drawer />

        <Navbar.Brand href="/">BEJAMAS_</Navbar.Brand>

        <Dropdown className="d-lg-none d-inline mx-2"  autoClose={false} align="end">
              <Dropdown.Toggle variant="info" id="dropdown-autoclose-false2">
                <i className="fa fa-shopping-cart mr-2"></i> <sub><Badge pill bg="secondary" id="cartCount">0</Badge></sub>
              </Dropdown.Toggle>
      
              <Dropdown.Menu >
                <DropdownItems params={props.cartdata} />
                <Dropdown.Item>
                <Row>
                <Button variant="outline-success" size="sm" onClick={props.clearCart}>Clear</Button>
                </Row>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Action4</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>

            <Dropdown className="d-inline mx-2" align="end"  autoClose={false}>
              <Dropdown.Toggle variant="info" id="dropdown-autoclose-false">
                <i className="fa fa-shopping-cart mr-2"></i> <sub><Badge pill bg="secondary" id="cartCount2">9</Badge></sub>
              </Dropdown.Toggle>
      
              <Dropdown.Menu>
                <DropdownItems params={props.cartdata} />
                <div><button className="btn btn-block btn-outline-success btn-sm" onClick={props.clearCart}>Clear</button></div>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link >Log in</Nav.Link>
            <Nav.Link eventKey={2} href="/register" >Sign up</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
import { Badge, Button, Row } from 'react-bootstrap';
import { Navbar, Container, Nav,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import DropdownItems from "./DropDown";


const Navigation = (props) => {

  return (
    <Navbar bg="white" variant="light">
      <Container>
        <Navbar.Brand href="/">BEJAMAS_</Navbar.Brand>
        <Nav>
        <Dropdown className="d-inline mx-2" autoClose={false} align="end">
            <Dropdown.Toggle variant="white" id="dropdown-autoclose-false2">
            <i className="fa fa-shopping-cart mr-2"><sub><Badge pill bg="light" style={{fontSize:"10px", color:"black"}}  id="cartCount">0</Badge></sub></i>
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <DropdownItems params={props.cartdata} />
              <Dropdown.Item>
                <Row>
                  <Button variant="outline-dark" size="sm" onClick={props.clearCart}>CLEAR</Button>
                </Row>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
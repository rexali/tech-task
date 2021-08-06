import { Badge, Button, Row } from 'react-bootstrap';
import { Navbar, Container, Nav,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownItems from "./DropDown";


const Navigation = (props) => {

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">BEJAMAS_</Navbar.Brand>
        <Nav>
        <Dropdown className="d-inline mx-2" autoClose={false} align="end">
            <Dropdown.Toggle variant="light" id="dropdown-autoclose-false2">
              <i className="fa fa-shopping-cart mr-2"></i> <sub><Badge pill bg="secondary" id="cartCount">0</Badge></sub>
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <DropdownItems params={props.cartdata} />
              <Dropdown.Item>
                <Row>
                  <Button variant="outline-dark" size="sm" onClick={props.clearCart}>Clear</Button>
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
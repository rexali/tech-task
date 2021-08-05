import { useState } from "react";
import { Card, ListGroup, ListGroupItem, Nav, Offcanvas } from 'react-bootstrap';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Listgroup() {
  return (
    <Card style={{ overflowY: 'auto' }}>
      <Card.Img variant="top" src={logo} className="img-fluid w-25" />
      <Card.Body><Card.Title>Categories</Card.Title></Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
        <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
        <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
        <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
        <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
        <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
      </ListGroup>

    </Card>
  );
}

function Drawer() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* you can use this <Button variant="primary" onClick={handleShow}>Launch</Button> to replace the span element */}
      <Nav.Link href="#" className='d-lg-none' onClick={handleShow}><span className="fa fa-bars"></span></Nav.Link>
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >

          <Listgroup />

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Drawer;
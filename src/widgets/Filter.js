import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';

function Filter(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const getUniqueCategory = () => props.getCategory();

    return (
        <div className="d-lg-none mt-2">
            <Button variant="outline-primary" onClick={handleShow}>
                <span className="fa fa-sliders"></span>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={(ev) => props.getFormData(ev)} >

                    <Form.Label>Filter</Form.Label>

                        {Array.from(new Set([...getUniqueCategory()])).map((e, i) => (
                            <div key={i} className="mb-3">
                                <Form.Check onChange={(ev) => props.getCategories(ev)}
                                    label={e}
                                    name="category"
                                    type="checkbox"
                                    value={e}
                                    id={`checkbox-${i}`}
                                    className="myCheck"
                                />
                            </div>
                        ))}
                        <hr />
                        <Form.Label>Price range</Form.Label>
                        <Form.Check
                            label="Lower than $20"
                            name="pricerange"
                            type="radio"
                            value="0-20"
                            id={`radio-price1`}
                            onChange={(ev) => props.getPriceRange(ev)}
                            className="myCheck"
                        />

                        <Form.Check
                            label="$20-$100"
                            name="pricerange"
                            type="radio"
                            value="20-100"
                            id={`checkbox-price2`}
                            onChange={(ev) => props.getPriceRange(ev)}
                            className="myCheck"
                        />

                        <Form.Check
                            label="$100-$200"
                            name="pricerange"
                            type="radio"
                            value="100-200"
                            id={`radio-price3`}
                            onChange={(ev) => props.getPriceRange(ev)}
                            className="myCheck"
                        />

                        <Form.Check
                            label="More than $200"
                            name="pricerange"
                            type="radio"
                            value="200-1000000"
                            id={`radio-price4`}
                            onChange={(ev) => props.getPriceRange(ev)}
                            className="myCheck"
                        />
                        <div className="d-flex justify-content-between">
                            <Button variant="outline-dark" onClick={() => props.clearFormData()}>
                                Clear
                            </Button>
                            <Button variant="dark" className="mr-4" onClick={(ev) => {props.getFormData(ev); handleClose()}}>
                                Save
                            </Button>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    );
}
export default Filter;
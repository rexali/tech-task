import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function Filter(props) {
    const [show, setShow] = useState(false);

    // let categories = [];
    // let price = 0;
    // let filteredData=[];

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const getUniqueCategory = () => props.getCategory();


    // const getFetchData = async () => {

    //     let promise = new Promise((resolve, reject) => {

    //         let url = "mydata.json";

    //         fetch(url, {
    //             mode: 'no-cors'
    //         }).then(
    //             response => {
    //                 response.json().then(result => {
    //                     resolve(result);
    //                 },
    //                     error => {
    //                         reject(error);
    //                         console.warn(error);
    //                     }
    //                 )
    //             });
    //     });

    //     return await promise;
    // }



    // const getFormData =(ev)=> {
    //     ev.preventDefault();
    //     let formObj = {
    //         categories: categories,
    //         price: price 
    //     }

    //     getFetchData().then((data)=>{
    //         filteredData = data.filter((p,i) =>{
    //             return categories.includes(p.category) && p.price === price;
    //         })
    //     });

    //     props.sendFilteredData(filteredData);

    //     handleClose();
    //     console.log(formObj);
    // }

    // const clearFormData = () => {

    // }

    // const priceRangeHandler = ev => price = ev.target.value;


    // const getCategoryies = ev => categories.push(ev.target.value);

    // useEffect(() => {}, []);




    return (
        <div className="d-lg-none">
            <Button variant="outline-primary" onClick={handleShow}>
                <span className="fa fa-sliders"></span>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={(ev) => props.getFormData(ev)} >
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
                                <br />
                            </div>
                        ))}
                        <hr />
                        {/* <Form.Label>Price range</Form.Label>
                        <Form.Range type="range" id="price" name="price" min="0" max="50" onChange={(ev)=>props.getPriceRange(ev)} />
                    */}
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
                            value="$200-∞"
                            id={`radio-price4`}
                            onChange={(ev) => props.getPriceRange(ev)}
                            className="myCheck"
                        />
                        <div className="d-flex justify-content-between">
                            <Button variant="outline-dark" onClick={() => props.clearFormData()}>
                                Clear
                            </Button>
                            <Button variant="outline-dark" className="mr-4" onClick={(ev) => {props.getFormData(ev); handleClose()}}>
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
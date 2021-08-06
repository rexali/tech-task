import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function Filter(props) {
    const [show, setShow] = useState(false);

    let categories = [];
    let price = 0;
    let filteredData=[];

    const getFetchData = async () => {

        let promise = new Promise((resolve, reject) => {

            let url = "mydata.json";

            fetch(url, {
                mode: 'no-cors'
            }).then(
                response => {
                    response.json().then(result => {
                        resolve(result);
                    },
                        error => {
                            reject(error);
                            console.warn(error);
                        }
                    )
                });
        });

        return await promise;
    }



    const getFormData =(ev)=> {
        ev.preventDefault();
        let formObj = {
            categories: categories,
            price: price 
        }

        getFetchData().then((data)=>{
            filteredData = data.filter((p,i) =>{
                return categories.includes(p.category) && p.price === price;
            })
        });

        props.sendFilteredData(filteredData);

        handleClose();
        console.log(formObj);
    }

    const clearFormData = () => {
        let checkboxes = document.getElementsByClassName("myCheck");
        for (let i = 0; i <= checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        document.getElementById("price").value = 0;
    }

    const priceRangeHandler = ev => {
        price = ev.target.value;
    }

    const getCategoryies = ev => {
        categories.push(ev.target.value);
    }

    useEffect(() => {}, []);


    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const getUniqueCategory = () => {
        return props.getCategory();
    }

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

                    <Form onSubmit={(ev)=>getFormData(ev)} >
                        {Array.from(new Set([...getUniqueCategory()])).map((e, i) => (
                            <div key={i} className="mb-3">
                                <Form.Check onChange={(ev)=>getCategoryies(ev)}
                                    label={e}
                                    name={e}
                                    type="checkbox"
                                    value={e}
                                    id={`checkbox-${i}`}
                                    className="myCheck"
                                />
                                <br />
                            </div>
                        ))}
                        <hr/>
                        <Form.Label>Price range</Form.Label>
                        <Form.Range type="range" id="price" name="price" min="0" max="50" onChange={(ev)=>priceRangeHandler(ev)} />
                   
                        <div className="d-flex justify-content-between">
                           <Button variant="secondary" onClick={clearFormData}>
                              Clear
                           </Button>
                           <Button variant="primary" className="mr-4" onClick={getFormData}>
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
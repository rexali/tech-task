import Card from 'react-bootstrap/Card';
import { Col, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = (props) => {

    return  props.products.map((prod, index) => {
        let products;
            products = <Product key={index} product={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} over={props.over} out={props.out} />;
       return products
    });


};

export const Product = (props) => {

    const { product, index, addToCart, over, out } = props;


    return (
        <Col  lg={4} >
            <Card style={{ marginBottom: '5px', marginTop: '2px' }} key={index} >
                <Card.Body>
                    <Row>
                        <img onClick={()=>over()} onMouseOut={()=>out()} variant="top"  style={{width:"385px", height:"239px"}} src={product.image.src ? product.image.src : './logo192.png'} className="img-fluid img-thumbnail d-block mx-auto"  alt={product.image.alt ? product.image.alt : product.name} />
                    <Card.ImgOverlay>
                        <Card.Text id="bestseller" style={{ textAlign:"center", fontSize:"10px", marginTop:"10px", marginRight: "100px", backgroundColor:"white", color:"black"}}>{product.bestseller ?'Best Seller': ''}</Card.Text>
                    </Card.ImgOverlay>
                    </Row>
                    <Row>
                    <Button style={{display:"none"}} variant = "dark" onClick={() => addToCart(index)} ><small>Add to Cart</small></Button>
                    </Row>
                    <Card.Text>{product.category ? product.category : ''}</Card.Text>
                    <Card.Text>
                        <strong>{product.name ? product.name : ''}</strong>
                    </Card.Text>
                    <Card.Text>
                        {product.currency ? product.currency : ''}{product.price ? product.price : ''}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Products;
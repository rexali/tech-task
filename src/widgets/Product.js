import Card from 'react-bootstrap/Card';
import { Col, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Products = (props) => {
    return  props.products.map((prod, index) => {
        let products;
            products = <Product key={index} product={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} />;
       return products
    });


};

export const Product = (props) => {
    const { product, index, addToCart } = props;
    return (
        <Col md={6} >
            <Card style={{ margin: '5px' }} key={index} >
                
                <Card.Body>
                    <Row>
                    <Card.ImgOverlay><i>{product.bestseller ?'Bestseller': ''}</i></Card.ImgOverlay>
                        <Card.Img  variant="top" style={{width:"400px", height:"200px"}} src={product.image.src ? product.image.src : './logo192.png'} className="img-fluid img-thumbnail d-block mx-auto" width="385px" height="239px" alt={product.image.alt ? product.image.alt : product.name} />
                    </Row>
                    <Row>
                    <Button variant = "dark" onClick={() => addToCart(index)}><small>Add to Cart</small></Button>
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
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';


const Products = (props) => {
    let products = props.products.map((prod, index) => {
        if (index < 6) {
            return (<Product key={index} product={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} />);
        }
    });

   return products
};

export const Product = (props) => {
    const { product, index, addToCart, detailPage } = props;
    return (
        <Col md={6} >
            <Card style={{ marginTop: '5px' }} key={index} >
                
                <Card.Body>
                    <Card.Text>{product.bestseller ?'Best seller' : ''}</Card.Text>
                    <Row>
                        <Card.Img onClick={() => detailPage(index)} variant="top" src={product.image.src ? product.image.src : './logo192.png'} className="img-fluid img-thumbnail d-block mx-auto" width="385px" height="239px" alt={product.image.alt ? product.image.alt : product.name} />
                    </Row>
                    <Row>
                        <Button variant="secondary" size="lg" onClick={() => addToCart(index)}>Add to Cart</Button>
                    </Row>
                    <Card.Title>{product.category ? product.category : ''}</Card.Title>
                    <Card.Text>
                        {product.name ? product.name : ''}
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
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';


function mouseout(ev) {
    ev.target.parentNode.nextSibling.firstChild.style.display='';
}
function mouseover(ev) {
    ev.target.parentNode.nextSibling.firstChild.style.display='block';
}

const Products = (props) => {
    return  props.products.map((prod, index) => {
        let products;
        // if (index < 6) {
            products = <Product key={index} product={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} />;
        // }
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
                        <Card.Img onMouseOver={(ev)=>mouseover(ev)} onMouseOut={(ev)=>mouseout(ev)} variant="top" style={{width:"400px", height:"200px"}} src={product.image.src ? product.image.src : './logo192.png'} className="img-fluid img-thumbnail d-block mx-auto" width="385px" height="239px" alt={product.image.alt ? product.image.alt : product.name} />
                    </Row>
                    <Row>
                        <Button variant="secondary" size="lg" style={{display:"none"}}  onClick={() => addToCart(index)}>Add to Cart</Button>
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
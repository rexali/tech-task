import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

const Products = (props) => {

    return  props.products.map((prod, index) => {
            return index < 6 ? <Product key={index} product={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} over={props.over} out={props.out} />:'';
    });


};

export const Product = (props) => {

    const { product, index, addToCart} = props;

    
    const mouseover=(evt)=>{
        let chdn =evt.target.parentNode.nextSibling;
        chdn.firstChild.style.display="block";  
    }
    const mouseout=(evt)=>{
        let chdn =evt.target.parentNode.nextSibling;
        chdn.firstChild.style.display="block";  
    }

    return (
        <Col lg={4} className="clear-fix">
            <Card className="my-3 shadow-none" key={index} >
                <div>
                <i className="bg-white position-absolute" style={{zIndex:"2"}} >{product.bestseller ? 'Best Seller' : ''}</i>
                    <Card.Img onMouseOver={(evt)=>mouseover(evt)} onMouseOut={(evt)=>mouseout(evt)} variant="top"  style={{minWidth:"auto", height:"235px"}} className="img-fluid d-block mx-auto" src={product.image.src ? product.image.src : './logo192.png'} alt={product.image.alt ? product.image.alt : product.name} />
                </div>
                <Card.Body>
                    <button className="btn btn-dark btn-block w-100" style={{display:"none"}}  onClick={() => addToCart(index)} ><small>Add to Cart</small></button>
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
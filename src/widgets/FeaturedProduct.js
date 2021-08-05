import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import {Product} from './Product'; 


const FeaturedProduct = (props)=>{
    const {data, index, addToCart} = props;
return (
    <Container>
         <Card style={{ marginTop: '5px' }} key={index} >
            <Card.Header className="d-flex justify-content-between">
               <Card.Title>{data.name ? data.name : 'my picture'}</Card.Title>
               <Button variant="secondary" size="sm" onClick={() => addToCart(index)}><small>Add to Cart</small></Button>
            </Card.Header>
            <Card.Body>
               <Row>
               <Card.Img variant="top" src={data.image.src ? data.image.src : './logo192.png'} className="img-fluid img-thumbnail d-block  mx-auto" width="385px" height="239px" alt={data.image.alt ? data.image.alt : data.name} /><br/>       
               </Row>
               <Row>
                  <Col sm={12} md lg={6}>
                  <Card.Title>About {" "} {data.name ? data.name : 'my name'}</Card.Title>
                  <Card.Text>
                  {data.details.description ? data.details.description : 'Good product'}
                  </Card.Text> 
                  </Col>

                  <Col sm={12} md lg={6}>
                  <Card.Title>People also buy</Card.Title>
                  <div className="pull-right">
                  {data.details.recommendations.map((el,i)=>{
                     return <Card.Img key={i} variant="top" src={el.src ? el.src : './logo192.png'} className="img-fluid img-thumbnail w-25 h-25 m-3 mx-auto" alt={el.alt ? el.alt : ''} />
                  })}
                  </div>
                  <Card.Title>Detail</Card.Title>
                  <Card.Text>
                  Dimension: {" "}{data.details.dimensions.width} {" X "} {data.details.dimensions.height}
                  </Card.Text> 
                  <Card.Text>
                  Size: {" "}{data.details.size} {" mb"}
                  </Card.Text> 
                  </Col>
               </Row>

            </Card.Body>
         </Card>


      </Container>
);
}


const FeaturedProducts = (props) => {
    let products = props.products.map((prod, index) => {
        // return (<Product key ={index} product={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} />);
        return <FeaturedProduct key={index+24} data={prod} index={index} addToCart={props.addToCart} detailPage={props.detailPage} />
    });
    return products;
};


export default FeaturedProducts;
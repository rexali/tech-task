import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import '../App.css';

const FeaturedProduct = (props)=>{
    const {data, index, addToCart} = props;
return (
    <Container>
         <Card style={{ marginTop: '5px' }} key={index} >
            <Card.Header className="d-flex justify-content-between">
               <Card.Text>{data.name ? data.name : 'my picture'}</Card.Text>
               <Button variant="dark"  id="addTo" onClick={() => addToCart(index)} style={{fontSize:"20px"}}>Add to Cart</Button>
            </Card.Header>
            <Card.Body>
               <Row>
               <Card.Img variant="top" src={data.image.src ? data.image.src : './logo192.png'} className="img-fluid img-thumbnail d-block  mx-auto myimage" alt={data.image.alt ? data.image.alt : data.name} /> 
               <Card.ImgOverlay ><Card.Text  id="featured" style={{textAlign:"center", fontSize:"20px", backgroundColor:"white", color:"black"}}>{data.featured ?'Photo of the day': ''}</Card.Text></Card.ImgOverlay>
               <Button variant="dark" className="d-lg-none"  onClick={() => addToCart(index)} style={{fontSize:"3vw", marginTop:"10px"}}>Add to Cart</Button>    
               </Row>
               <Row>

                  <Col sm md={12} lg={6}>
                  <Card.Title className="mt-3 mb-3">About {" "} {data.name ? data.name : 'my name'}</Card.Title>
                  <Card.Text>
                  {data.details.description ? data.details.description : 'Good product'}
                  </Card.Text> 
                  </Col>

                  <Col sm md={12} lg={6}>

                  <Row>
                  <Col>
                  <Card.Title className="mt-3 mb-3" >People also buy</Card.Title>
                  <div>
                  {data.details.recommendations.map((el,i)=>{
                     return <Card.Img key={i} variant="top" style={{width:"70px", height:"70px" }} src={el.src ? el.src : './logo192.png'} className="img-fluid img-thumbnail d-inline-block m-1 mr-auto" alt={el.alt ? el.alt : ''} />
                  })}
                  </div>
                  </Col>
                  </Row>

                  <Row>
                  <Col >
                  <div>
                  <Card.Title className="mt-3 mb-3">Detail</Card.Title>
                  <Card.Text>
                  Dimension: {" "}{data.details.dimensions.width} {" X "} {data.details.dimensions.height}
                  </Card.Text> 

                  <Card.Text>
                  Size: {" "}{data.details.size} {" mb"}
                  </Card.Text> 
                  </div>
                  </Col>
                  </Row>
                  
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
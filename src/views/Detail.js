import React, { Component } from "react";
import Navigation from '../widgets/Navigation'
import '../App.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Home from "./Home";




export function ProductDetail(props) {
   const { data, addToCart, index } = props;
   return (
      <Container>
         <Card style={{ width: {}, marginTop: '5px' }} key={`${1}`} >
            <Card.Header>
               <Card.Title>{data.name ? data.name : 'my picture'}</Card.Title>
            </Card.Header>
            <Card.Body>
               <Card.Img variant="top" src={data.image.src ? data.image.src : './logo192.png'} className="img-fluid  mx-auto w-25" alt={data.image.alt ? data.image.alt : data.name} />
               <Button variant="primary" className="btn btn-block" onClick={() => addToCart(index)}>Add to Cart</Button>
               <Row>

                  <Col sm={12} md lg={6}>
                  <Card.Title>About {" "} {data.name ? data.name : 'my name'}</Card.Title>
                  <Card.Text>
                  {data.details.description ? data.details.description : 'Good product'}
                  </Card.Text> 
                  </Col>

                  <Col sm={12} md lg={6}>
                  <Card.Title>People also buy</Card.Title>
                  {data.details.recommendations.map(el=>{
                     return <Card.Img variant="top" src={el.src ? el.src : './logo192.png'} className="img-fluid  mx-auto w-25" alt={el.alt ? el.alt : ''} />
                  })}
                  <Card.Title>Detail</Card.Title>
                  <Card.Text>
                  Dimension: {" "}{data.details.dimensions.width} {" X "} {data.details.dimensions.height}
                  </Card.Text> 
                  <Card.Text>
                  Size: {" "}{data.details.dimensions.size} {" mb"}
                  </Card.Text> 
                  </Col>
               </Row>

            </Card.Body>
         </Card>


      </Container>
   );
}




class Detail extends Component {

   constructor(props){
      super(props)
     this.state = {data:[]};
     this.id = Number(new URLSearchParams(window.location.search).get('data'));
   }

   

   componentDidMount() {      

      const url = 'mydata.json'; 
      fetch(url, { mode: 'no-cors' })
         .then((result) => result.json())
         .then((result) => {
            let detail = result.filter((product, index) => {
               return index === this.id;
            });
            this.setState({ data: detail });
         })
   }

   render() {
     
      return (
         <div>
            <Navigation />
            <ProductDetail data={[...this.state.data]} addToCart={new Home().addToCart} index={this.id} />
         </div>

      )
   }
}

export default Detail;
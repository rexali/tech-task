import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FeaturedProduct from '../widgets/FeaturedProduct';
import Products from "../widgets/Product";
import Navigation from "../widgets/Navigation";
import PageNumbering from "../widgets/PageNumbering";
import Filter from "../widgets/Filter";
import Sorting from "../widgets/Sorting";
import { Button, Col, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sorting.css';

class Home extends Component {

   constructor(props) {
      super(props)
      this.state = {
         cartData: [],
         data: [],
         filterData:[],
         featured: [],
         categories: [],
         pricerange: []
      };

   }

   addToCart = (id) => {
      document.getElementById("dropdown-autoclose-false2").click();
      document.getElementById("cartCount").textContent = this.cartCount();
      this.setState({ cartData: [...this.state.cartData, ...this.cartData(id)] });
   }

   detailPage = (id) => {
      window.location.href = "/detail?data=" + id;
   }

   cartData = (id) => {
      let cd = this.state.data.filter((_, i) => {
         return i === id;
      });
      return cd;
   }

   clearCart = () => {
      this.setState({
         cartData: []
      });
      document.getElementById("dropdown-autoclose-false2").click();
      document.getElementById("cartCount").textContent = 0;

   }

   cartCount = () => {
      let count = this.state.cartData.length;
      return count + 1;
   }

   getCategory = () => {
      let category = this.state.data.map(e => {
         return e.category;
      });
      console.log(category);
      return category;
   }

   sendData = (msg) => {
      this.setState({
         filterData: msg
      });
   }

   sendFilteredData = (data) => {
      this.setState({
         filterData: data
      });
   }

   getPriceRange = event => {
      let range = event.target.value;
      this.setState({
         pricerange: [...range.split("-")]
      });
   }

   getCategoryies = ev => {
      this.setState({
         categories: [this.state.categories, ...ev.target.value]
      });
   }


   getFormData = event => {
      event.preventDefault();
      let homeFitered = this.state.data.filter((p, i) => {
         return this.state.categories.contains(p.category) && this.state.pricerange.contains(p.price);
      })
      this.setState({
         data: [...homeFitered]
      })
   }

   componentDidMount() {
      
      const url = 'mydata.json';
      fetch(url, { mode: 'no-cors' })
         .then((result) => result.json())
         .then((result) => {
            let featuredProduct = result.filter(product => {
               return product.featured === true;
            });

            let filteredProduct = result.filter((_,i) => {
               return i < 6;
            });
            this.setState({ data: result });
            this.setState({ featured: featuredProduct });
            this.setState({ filterData: filteredProduct });
         })
   }

   clearFormData = () => {
      let checkboxes = document.getElementsByClassName("myCheck");
      console.log(checkboxes);
      for (let i = 0; i <= checkboxes.length; i++) {
         checkboxes[i].checked = '';
      }
   //    document.getElementById("price").value = 0;
   }

   render() {

      console.log(this.state.cartData);

      return (
         <div className="mb-6" style={{marginBottom:"70px"}}>
            <Navigation cartdata={this.state.cartData} clearCart={this.clearCart} />

            <Container>
               <Row><i>Featured</i></Row>
               <Row>
                  <FeaturedProduct products={this.state.featured} addToCart={this.addToCart} detailPage={this.detailPage} />
               </Row>
               <Row><div className="d-flex justify-content-between"><h6 className="m-2"><small>Photography/</small><small className="text-muted">Premium Photos</small></h6> <Sorting data={this.state.data} /><Filter data={this.state.data} getCategory={this.getCategory} className="d-none" /></div></Row>
               <Row>
                  <Col md={3} className="filterGo">

                     <Form onSubmit={this.getFormData}>
                        <Form.Label>Filter by categories</Form.Label>
                        {Array.from(new Set([...this.getCategory()])).map((e, i) => (
                           <div key={i} className="mb-3">
                              <Form.Check onChange={(ev) => this.getCategoryies(ev)}
                                 label={e}
                                 name={e}
                                 type="checkbox"
                                 value={e}
                                 id={`checkbox-${i}`}
                                 className="myCheck"
                              />
                              <br />
                           </div>
                        ))
                        }
                        <Form.Label>Price range</Form.Label>
                        <Form.Check
                           label="Lower than $20"
                           name="pricerange"
                           type="radio"
                           value="0-20"
                           id={`radio-price1`}
                           onChange={(ev) => this.getPriceRange(ev)}
                           className="myCheck"
                        />

                        <Form.Check
                           label="$20-$100"
                           name="pricerange"
                           type="radio"
                           value="20-100"
                           id={`checkbox-price2`}
                           onChange={(ev) => this.getPriceRange(ev)}
                           className="myCheck"
                        />

                        <Form.Check
                           label="$100-$200"
                           name="pricerange"
                           type="radio"
                           value="100-200"
                           id={`radio-price3`}
                           onChange={(ev) => this.getPriceRange(ev)}
                           className="myCheck"
                        />

                        <Form.Check
                           label="More than $200"
                           name="pricerange"
                           type="radio"
                           value="$200-∞"
                           id={`radio-price4`}
                           onChange={(ev) => this.getPriceRange(ev)}
                           className="myCheck"
                        />
                        <div className="d-flex justify-content-between">
                           <Button variant="outline-dark" onClick={this.clearFormData}>
                              Clear
                           </Button>
                           <Button variant="outline-dark" className="mr-4" onClick={(ev) => this.getFormData(ev)}>
                              Save
                           </Button>
                        </div>
                     </Form>
                  </Col>
                  <Col>
                     <Row>
                        <Products products={this.state.filterData} addToCart={this.addToCart} detailPage={this.detailPage} />
                     </Row>
                     <Row>
                        <PageNumbering data={this.state.data}  sendData={this.sendData} />
                     </Row>
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}

export default Home;
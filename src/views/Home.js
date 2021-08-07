import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FeaturedProduct from '../widgets/FeaturedProduct';
import Products from "../widgets/Product";
import Navigation from "../widgets/Navigation";
// import PageNumbering from "../widgets/PageNumbering";
import Filter from "../widgets/Filter";
import Sorting from "../widgets/Sorting";
import { Button, Col, Form } from "react-bootstrap";
import Pagination from "react-js-pagination"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sorting.css';

class Home extends Component {

   constructor(props) {
      super(props)
      this.state = {
         cartData: [],
         data: [],
         filterData: [],
         featured: [],
         categories: [],
         pricerange: [],
         activePage:1
      };

   }

   filterPrev = (index) => {
      let newData = this.state.data.filter((_, i) => {
          return i >= ((index * 6) - 6) && i < (index * 6);
      });
      return newData;
  }

   handlePageChange(pageNumber){
      console.log(`active page is ${pageNumber}`);
      this.setState({
         activePage:pageNumber,
         filterData:[...this.filterPrev(pageNumber)]
      })
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
         filterData: [...msg]
      });

   }


   getPriceRange = event => {
      let range = event.target.value;
      console.log((range.split("-").map(n => parseInt(n))));
      this.setState({
         pricerange: [...range.split("-").map(n => parseInt(n))]
      });
      console.log(this.state.pricerange);
   }

   getCategoryies = ev => {
      this.setState({
         categories: [...this.state.categories, ev.target.value],
         checked:true
      });
   }


   getFormData = (evt) => {
      evt.preventDefault();
      let homeFiltered = this.state.data.filter((p, i) => {
         return this.state.categories.includes(p.category) && this.state.pricerange.includes(p.price);
      })
      console.log(homeFiltered);
      this.setState({
         filterData: [...homeFiltered]
      })
   }

   clearFormData = () => {
      let cat = document.getElementsByName("category");
      cat.forEach((e)=>{
        e.checked=false;
      });

      let pr = document.getElementsByName("pricerange");
      pr.forEach((e)=>{
        e.checked=false;
      });


   }

   componentDidMount() {

      const url = 'mydata.json';
      fetch(url, { mode: 'no-cors' })
         .then((result) => result.json())
         .then((result) => {
            let featuredProduct = result.filter(product => {
               return product.featured === true;
            });

            let filteredProduct = result.filter((_, i) => {
               return i < 6;
            });
            this.setState({ data: result });
            this.setState({ featured: featuredProduct });
            this.setState({ filterData: filteredProduct });
         })
   }

   

   render() {

      return (
         <div className="mb-6" style={{ marginBottom: "70px" }}>
            <Navigation cartdata={this.state.cartData} clearCart={this.clearCart} />

            <Container>
               <Row><i>Featured</i></Row>
               <Row>
                  <FeaturedProduct products={this.state.featured} addToCart={this.addToCart} detailPage={this.detailPage} />
               </Row>
               <Row><div className="d-flex justify-content-between"><h6 className="m-2"><small>Photography/</small><small className="text-muted">Premium Photos</small></h6> <Sorting data={this.state.filterData} sendData={this.sendData} /><Filter data={this.state.data} getCategory={this.getCategory} getFormData={this.getFormData} getCategories={this.getCategoryies} clearFormData={this.clearFormData} getPriceRange={this.getPriceRange}  /></div></Row>
               <Row>
                  <Col md={3} className="filterGo">

                     <Form onSubmit={this.getFormData}>
                        <Form.Label>Filter by categories</Form.Label>
                        {Array.from(new Set([...this.getCategory()])).map((e, i) => (
                           <div key={i} className="mb-3">
                              <Form.Check onChange={(ev) => this.getCategoryies(ev)}
                                 
                                 label={e}
                                 name="category"
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
                        {/* <PageNumbering data={this.state.data} sendData={this.sendData} handlePageChange={this.handlePageChange} /> */}
                        <div className="d-flex  justify-content-center mt-3">
                           <Pagination 
                           activePage={this.state.activePage} 
                           itemsCountPerPage={6}
                           totalItemsCount={this.state.data.length}
                           pageRangeDisplayed={10}
                           itemClass="page-item"
                           linkClass="page-link"
                           onChange={this.handlePageChange.bind(this)}
                           />
                        </div>
                     </Row>
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}

export default Home;
import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import {List, ListItem } from "../List";
//import API from "../../utils";

class Search extends Component {

    state = {

        search: "",
        startYear: "",
        endYear: "",
        saved: "",

    }


    // componentDidMount() {
    //     this.loadArticles();
    //   }
    
    //   loadArticles = () => {
    //     API.getArticles()
    //       .then(res =>
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    render() {
        return ( 
            <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            < h1 > New York Times Article Scrubber and Saver </h1> 
            </Jumbotron> 
           <form>
               <h3> Search Here </h3>
            <Input value = {
                this.state.search
            }
            onChange = {
                this.handleInputChange
            }
            search = "search"
            placeholder = "Title (required)" />
            <Input value = {
                this.state.startYear
            }
            onChange = {
                this.handleInputChange
            }
            startYear = "start year"
            placeholder = "start year (required)" />
            <TextArea value = {
                this.state.endYear
            }
            onChange = {
                this.handleInputChange
            }
            endYear = "end year"
            placeholder = "end year (Optional)" />
            <FormBtn
            //disabled={!(this.state.search && this.state.title)}
            // onClick={this.handleFormSubmit}
            >
            Submit 
            </FormBtn> 
            </form> 
            
             <Jumbotron>
             < h1 > Results </h1> 
             </Jumbotron> 
             <div>
             <List>
             <p>list items go here.</p>
                 <ListItem>
                     <p>individual items here</p>
                 </ListItem>
                 
             </List>
             </div>
              <Jumbotron>
              < h1 > Saved Articles </h1> 
              </Jumbotron> 
              <div>
              <List>
                  <p>list items go here.</p>
              </List>
              </div>
              </Col>
              </Row>
              </Container>
              
             
             



        )
    }
}

export default Search;
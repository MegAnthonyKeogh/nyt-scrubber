import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import {List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Search extends Component {

    state = {
        data: [],
        response: null,
        headline: "",
        byline: "",
        web_url: "",
        // search: "",
        // startYear: "",
        // endYear: "",
        // saved: "",

    }

    componentDidMount() {
        this.loadArticles();
        console.log("in didMount load articles");
        // Call our fetch function below once the component mounts
        // this.callBackendAPI()
        // .then(res => {
        //     console.log("In componentDidMount .then")
        //     console.log(res)
        //     this.setState({ data: res.data, headline: "", byline: "", web_url: "" })
        // })
        // .catch(err => {
        //     console.log("in componentDidMount .catch")
        //     console.log(err)
        // });
    }
    
    loadArticles = () => {
        API.getArticles()
        .then(res => 
            this.setState({ articles: res.data, headline:"", byline:"", web_url: ""})
        )
            .catch(err => console.log(err))
    }
    // EJB
    callBackendAPI = () => {
      console.log("In callBackendAPI")
      return fetch('/api/nyt')
      .then(response => {
          console.log("In callBackendAPI .then");
          console.log(response);
          if(response.status !== 200) {
              console.log("In callBackendAPI .then, Response from API returend status code " + response.status);
              return;
          }
          console.log("In callBackendAPI .then, returning data (promise)")
          return response.json()
    
      })
      .catch(function(error) {
          console.log("In callBackendAPI .catch");
          console.log('Request failed', error);
          throw error;
      });
    }

    handleSave = (id) => {
        console.log(`handleSave was clicked id=${id}`)
        return;
      }
    
    

    render() {
        return ( 
            <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            < h1 > New York Times Article Scrubber and Saver </h1> 
            // Render the newly fetched data inside of this.state.data 
        
            </Jumbotron> 
           <form>
               <h3> Search Here </h3>
            <Input value = {
                this.state.query
            }
            onChange = {
                this.handleInputChange
            }
            search = "search"
            placeholder = "Title (required)" />
            <Input value = {
                this.state.startyear
            }
            onChange = {
                this.handleInputChange
            }
            startyear = "start year"
            placeholder = "start year (required)" />
            <TextArea value = {
                this.state.endYear
            }
            onChange = {
                this.handleInputChange
            }
            endyear = "end year"
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
             <div className="App">
        {
          this.state.data.length ? (
            <List>
              {
                this.state.data.map(data => (
                  <ListItem key={data._id}>
                    <strong>
                      { `${data.headline.main} ${'byline' in data ? data.byline.original : ""}` }
                    </strong>
                    
                    {
                      /* 
                      As the below is to go an external site, it should just be an <a> element
                      You only need Link when you are using React Router.
                      */
                    }
                    <a href={data.web_url}>Read the Story Here</a>
                    {
                      /* 
                      There's no delete button here, rather there should be a SAVE button
                      I don't know the setup of your component structure.  Below, I have handleSave
                      as a method of this component class.  You may be passing it as a prop.
                      */
                    }
                    <button onClick={() => this.handleSave(data._id)}>Save</button>

                  </ListItem>
                ))
              }
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
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
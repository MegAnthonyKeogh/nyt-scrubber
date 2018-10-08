import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import {List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Search extends Component {

    state = {
        articles: [],
        response: null,
        id: "",
        headline: "",
        byline: "",
        web_url: "",
  
         query: "",
         startyear: "",
         endyear: "",
         saved: [],

    }

    componentDidMount() {
        //this.loadArticles();
        console.log("in didMount load articles");
     
    }
    
    loadArticles = () => {
        API.nytArticles()
        .then(res => {
            console.log(res)
            this.setState({ articles: res.data, headline: "", byline: "", web_url: ""  })
        })
            .catch(err => console.log(err))
    }

   
    // EJB
    // callBackendAPI = () => {
    //   console.log("In callBackendAPI")
    //   return fetch('/api/nyt')
    //   .then(response => {
    //       console.log("In callBackendAPI .then");
    //       console.log(response);
    //       if(response.status !== 200) {
    //           console.log("In callBackendAPI .then, Response from API returend status code " + response.status);
    //           return;
    //       }
    //       console.log("In callBackendAPI .then, returning data (promise)")
    //       return response.json()
    
    //   })
    //   .catch(function(error) {
    //       console.log("In callBackendAPI .catch");
    //       console.log('Request failed', error);
    //       throw error;
    //   });
    // }

    handleSave = (id) => {
        let found = this.state.articles.find(article => {
            console.log(article._id)
            return article._id === id ? true:false 
        })
           API.saveArticle({

          headline: found.headline.main,
          byline: found.byline.original,
          web_url: found.web_url 
         })
         .then (res => {
           console.log(res)
          //call to mongo. 
         }
          )

         .catch(err => console.log(err))
        
      }

        
    

      handleFormSubmit = event => {
        event.preventDefault();
          API.nytArticles({
            query: this.state.query,
            startyear: this.state.startyear,
            endyear: this.state.endyear
          })
            .then(res => {
                this.setState({articles: res.data})
            })
            .catch(err => console.log(err));
        }

        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
              [name]: value
            });
          };
          
    



          
      
    

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
            <Input value = { this.state.query}
            onChange = { this.handleInputChange }
            name = "query"
            placeholder = "headline (required)" />
            <Input value = {this.state.startyear}
            onChange = { this.handleInputChange}
            name = "startyear"
            placeholder = "start year (required)" />
            <TextArea value = { this.state.endyear }
            onChange = {  this.handleInputChange }
            name = "endyear"
            placeholder = "end year (Optional)" />
            <FormBtn
            //disabled={!(this.state.search && this.state.title)}
             onClick={this.handleFormSubmit}
            >
            Submit 
            </FormBtn> 
            </form> 
            
             <Jumbotron>
             < h1 > Results </h1> 
             </Jumbotron> 
             <div className="App">
        {
          this.state.articles.length ? (
            <List>
              {
                this.state.articles.map(articles => (
                  <ListItem key={articles._id}>
                    <strong>
                      { `${articles.headline.main} ${'byline' in articles ? articles.byline.original : ""}` }
                    </strong>
                    
                    {
                      /* 
                      As the below is to go an external site, it should just be an <a> element
                      You only need Link when you are using React Router.
                      */
                    }
                    <a href={articles.web_url}>Read the Story Here</a>
                    {
                      /* 
                      There's no delete button here, rather there should be a SAVE button
                      I don't know the setup of your component structure.  Below, I have handleSave
                      as a method of this component class.  You may be passing it as a prop.
                      */
                    }
                    <button onClick={() => this.handleSave(articles._id)}>Save</button>

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
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {List, ListItem } from "../../components/List";

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
        

    }
    showAlert(event){
      alert(`Searching for ${this.state.query}`);
      console.log("show alert was read");
    }

    showAlertsave(event){
      alert(`Saving ${this.state.saved[0].headline}`);
      console.log(`this state save [0] ${this.state.saved[0].headline}`);
    }
   

    componentDidMount() {
      API.getArticles()
        .then(res => this.setState({saved: res.data}))
        .catch(err => console.log(err));   
    }
    
    loadArticles = () => {
        API.nytArticles()
        .then(res => {
            console.log(res)
            this.setState({ articles: res.data, headline: "", byline: "", web_url: ""  })
        })
            .catch(err => console.log(err))
    }

    mongoArticles = () => {
      API.getArticles()
      .then(res => {
        console.log(res)
        this.setState({ saved: res.data})
      })
    }
   


    handleDelete = (id) => {
      API.deleteArticle(id)
        .then(res => {
          console.log(res)
          let newSate = this.state.saved.filter(next => next._id !== id ? true: false)
          this.setState({saved: newSate})
        })
    }

    handleSave = (id) => {
        let found = this.state.articles.find(article => {
            console.log(article._id)
            return article._id === id ? true:false 
        })

        console.log(found)
          API.saveArticle({
            headline: found.headline.main,
            byline: "byline" in found ? found.byline.original : "...",
            web_url: found.web_url 
         })
         .then (res => {

           return API.getArticles();
         })
         .then(res => this.setState({saved: res.data}))
         .catch(err => console.log(err));
          //call to mongo. 
         }
        
      
      handleFormSubmit = (event) => {
        event.preventDefault();
          API.nytArticles({
            query: this.state.query,
            startyear: this.state.startyear,
            endyear: this.state.endyear,
            
          })
            .then(res => {
                this.setState({articles: res.data})
            })
            .catch(err => console.log("this is the error" + err));
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
            <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            < h1 > New York Times Article Scrubber and Saver </h1> 
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
            <Input value = { this.state.endyear }
            onChange = {  this.handleInputChange }
            name = "endyear"
            placeholder = "end year (Optional)" />
            <button onClick={(event) => {this.showAlert(event); 
            this.handleFormSubmit(event);}}>
            Submit </button> 
            </form> 
            </Col>
            </Row>
            </Container>
            
            <Container fluid>
            <Row>
              <Col size="md-12">
             <Jumbotron>
             < h1 > Results </h1> 
             </Jumbotron> 
             <div>
        {this.state.articles.length ? (
            <List>
              { this.state.articles.map(articles => (
                  <ListItem key={articles._id}>
                    <strong>
                      { `${articles.headline.main} ${'byline' in articles ? articles.byline.original : ""}` }
                    </strong>
                    
                    {
                    
                    }
                    <a href={articles.web_url}>Read the Story Here</a>
                    {
                      
                    }
                    <button onClick={(event) => {this.handleSave(articles._id); 
                  this.showAlertsave(event);}}>Save</button>

                  </ListItem>
                ))
              }
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
      </Col>
      </Row>
      </Container>
      </Container>
      

    )
              }
            }
            

    


export default Search;
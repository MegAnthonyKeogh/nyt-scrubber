import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Modal from "../../components/modal";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {List, ListItem } from "../../components/List";

import API from "../../utils/API";


class Search extends Component {
 constructor(props) {
      super(props);
  
    this.state = {
        articles: [],
        response: null,
        id: "",
        headline: "",
        byline: "",
        web_url: "",
  
         query: "",
         startyear: "",
         endyear: "",
         isOpen: false
        
    }
  }
  showAlert(event){
    event.preventDefault();
    alert(`Searching New York Times for ${this.state.query}`);
   
  }
  showSaveAlert(event){
    event.preventDefault();
    alert(`Saving!`);
   
  }
    toggleModal = (event) => {
      event.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen
      });
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
        <Row>
          <Col size="md-12">
          <Modal show={this.state.isOpen}
                      onClose={this.toggleModal}>
                      `Searching for {this.state.query}`
                    </Modal>
            <Jumbotron>
            < h1 > New York Times Article Scrubber and Saver </h1> 
            </Jumbotron> 
            <Modal show={this.state.isOpen}
                      onClose={this.toggleModal}>
                      `Searching for {this.state.query}`
                    </Modal>
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
           
            <button onClick={(event) => {this.handleFormSubmit(event); //this.toggleModal(event);
            this.showAlert(event);}}>
            Submit </button> 
            {/* <Modal show={this.state.isOpen}
                      onClose={this.toggleModal}>
                      `Searching for {this.state.query}`
                    </Modal> */}
            </form> 
            </Col>
            </Row>
            <Row>
              <Col size="md-12">
             <Jumbotron>
             < h1 > Results </h1> 
             </Jumbotron> 
        {this.state.articles.length ? (
            <List>
              {this.state.articles.map(articles => (
                  <ListItem key={articles._id}>
                    <strong>
                      { `${articles.headline.main} ${'byline' in articles ? articles.byline.original : ""}` }
                    </strong>
                
                    <a href={articles.web_url}>Read the Story Here</a>
                    <button onClick={(event) => {this.handleSave(articles._id); //this.toggleModal(event)
                    this.showSaveAlert(event)}}
                    >Save</button>
                    <Modal show={this.state.isOpen}
                      onClose={this.toggleModal}>
                      <p>`We're saving this for you`</p>
                    </Modal>
                  </ListItem>
                )) }
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
           
        <div>
        
        
      </div>
      </Col>
      </Row>
      </Container>
      
    )}}
            


export default Search;
import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import {List, ListItem } from "../List";
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
          <Container>
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
             onClick={this.handleFormSubmit}>
            Submit </FormBtn> 
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
      </Col>
      </Row>
      </Container>
      </Container>
    
      
    )
              }
            }
            

    


export default Search;
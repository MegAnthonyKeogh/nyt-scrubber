import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import {List, ListItem } from "../../components/List";
import API from "../../utils/API";



class Saved extends Component {

    state = {
     
         saved: []

    }


handleDelete = (id) => {
    API.deleteArticle(id)
      .then(res => {
        console.log(res)
        let newSate = this.state.saved.filter(next => next._id !== id ? true: false)
        this.setState({saved: newSate})
      })
  }


  componentDidMount() {
    API.getArticles()
      .then(res => this.setState({saved: res.data}))
      .catch(err => console.log(err));   
  }



render() {
    return ( 

<Container fluid>
      <Row>
        <Col size="md-12">
   
              <Jumbotron>
              <h1> Saved Articles </h1> 
              </Jumbotron> 
              {this.state.saved.length ? (
                <List>
              {this.state.saved.map(saved => (
                <ListItem key={saved._id}>
                  <a href={saved.web_url}>{saved.headline} by {saved.byline}</a>
                  <button onClick={() => this.handleDelete(saved._id)}>Delete</button>
                </ListItem>
              ))}
              </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
              </Col>
              </Row>
              </Container>
    )
              }
            }

            export default Saved;
              
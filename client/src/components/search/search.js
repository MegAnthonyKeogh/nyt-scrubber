import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import {List, ListItem } from "../List";
//import API from "../../utils";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Search from "../search";


// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Search} />
//         <Route exact path="/Search" component={Search} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;

//

class Search extends Component {

    state = {
        data: null
        // search: "",
        // startYear: "",
        // endYear: "",
        // saved: "",

    }
 
          componentDidMount() {
              // Call our fetch function below once the component mounts
            this.callBackendAPI()
              .then(res => this.setState({ data: res.express }))
              .catch(err => console.log(err));
          }
            // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
          callBackendAPI = async () => {
            const response = await fetch('/express_backend');
            const body = await response.json();
        
            if (response.status !== 200) {
              throw Error(body.message) 
            }
            return body;
          };
        
   


    render() {
        return ( 
            <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            < h1 > New York Times Article Scrubber and Saver </h1> 
            // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
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
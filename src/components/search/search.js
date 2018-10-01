import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Input, TextArea, FormBtn } from "../Form";
import {List, ListItem } from "../List";

class Search extends Component {

    state = {

        search: "",
        startYear: "",
        endYear: "",
        saved: "",

    }

    render() {
        return ( 
            <div>
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
            Submit Book 
            </FormBtn> 
            </form> 
            
             <Jumbotron>
             < h1 > Results </h1> 
             </Jumbotron> 
             <div>
             <List>
                 <p>list items go here.</p>
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
              </div>
              
             
             



        )
    }
}

export default Search;
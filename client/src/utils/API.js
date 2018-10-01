import axios from "axios";

export default {
    // Gets all books
    getArticles: function() {
      return axios.get("/https://www.nytimes.com/section/climate");
    }
}

import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


  

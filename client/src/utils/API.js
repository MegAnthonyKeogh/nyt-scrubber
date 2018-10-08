import axios from "axios";

export default {
  // Gets all books
  nytArticles: function(searchParams) {
    return axios.post('/api/nyt/articles', searchParams );
  },
  getArticles: function(){
    return axios.get("/api/articles")
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
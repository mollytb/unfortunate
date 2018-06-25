import axios from "axios";

export default {
  // Gets a random fortune
  getFortune: function() {
    return axios.get("/api/fortunes");
  },
  // Saves a fortune to the database
  saveBook: function(fortuneData) {
    return axios.post("/api/fortunes", fortuneData);
  }
};

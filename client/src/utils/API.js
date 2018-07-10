import axios from "axios";

export default {
  // Gets a random fortune
  getRandomFortune: function() {
    return axios.get("/api/fortunes");
  },
  //Gets the fortune sent
  getFortune: function(id) {
    return axios.get("/api/fortunes/" + id);
  },
  // Saves a fortune to the database
  saveFortune: function(fortuneData) {
    return axios.post("/api/fortunes", fortuneData);
  }
};

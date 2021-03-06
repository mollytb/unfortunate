import axios from "axios";

export default {
  // Gets all fortunes
  getFortunes: function () {
    return axios.get("/api/fortunes");
  },
  // Gets a random fortune
  getRandomFortune: function() {
    return axios.get("/api/fortunes/random");
  },
  //Gets the fortune sent
  getFortune: function(id) {
    return axios.get("/api/fortunes/Home/" + id);
  },
  // Saves a fortune to the database
  saveFortune: function(fortuneData) {
    return axios.post("/api/fortunes", fortuneData);
  }
};

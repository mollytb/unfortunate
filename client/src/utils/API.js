import axios from "axios";

export default {
  // Gets a random fortune
  getFortune: function() {
    return axios.get("/api/fortune");
  },
  //Gets the fortune sent
  getFortune: function(id) {
    return axios.get("/api/fortune/" + id);
  },
  // Saves a fortune to the database
  saveFortune: function(fortuneData) {
    return axios.post("/api/fortunes", fortuneData);
  }
};

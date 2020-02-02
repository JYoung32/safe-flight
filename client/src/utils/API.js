import axios from "axios";
require('dotenv').config();

const clientID = process.env.clientID;
const secret = process.env.secret;

export default {
     
    token: function (){
        return axios.post(`https://api.amadeus.com/v1/security/oauth2/token/grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`);
    },


    getFlights: function () {
    return axios
    .get("https://api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2")
    .then(({ data: { results } }) => console.log(results))
    .catch(err =>console.log(err));
  }
};
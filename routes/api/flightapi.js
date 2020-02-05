const axios = require("axios");
const router = require("express").Router();


<<<<<<< HEAD


router.get("/shopping-flightoffers", (req, res) => {
  axios
    .get("https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


router.get('/api/flight')
  .then(data => data);


router.post('/api/flight', (req,res) => {
  console.log('Body: ', req.body);
  res.json({
      msg: 'Flight Data received.'
  });
});
module.exports = router;



// // Test keys | Base URL: test.api.amadeus.com
// API Key : 4zGJKgRTOOYMnFeXaAIcFLwtW3AQHHS2
// API Secret : jmz0kQKKLM0IMkzw

//break into what and how 
//write logic to renew token based on token experation(can write in the error portion)
//^^ put into env file, define api call to get token then write second api call to get flight data

// curl "https://test.api.amadeus.com/v1/security/oauth2/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=4zGJKgRTOOYMnFeXaAIcFLwtW3AQHHS2&client_secret=jmz0kQKKLM0IMkzw"


     // curl response 
    //  {
    //     "type": "amadeusOAuth2Token",
    //     "username": "kgiovinazzo42@gmail.com",
    //     "application_name": "Flight Detector",
    //     "client_id": "4zGJKgRTOOYMnFeXaAIcFLwtW3AQHHS2",
    //     "token_type": "Bearer",
    //     "access_token": "UcAFCMRbn8LqlGlWa60rlbJUxVt2",
    //     "expires_in": 1799,
    //     "state": "approved",
    //     "scope": ""
    // }
=======
module.exports = router;
>>>>>>> 0b917f706c5703edc83e021fda3fa820cd430550

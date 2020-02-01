const axios = require("axios");
const router = require("express").Router();

router.get("/flights", (req, res) => {
  axios
    .get("https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;



// // Test keys | Base URL: test.api.amadeus.com
// API Key : 4zGJKgRTOOYMnFeXaAIcFLwtW3AQHHS2
// API Secret : jmz0kQKKLM0IMkzw

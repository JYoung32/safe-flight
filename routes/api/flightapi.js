const axios = require("axios");
const router = require("express").Router();

// router.get('/api/flight')
//   .then(console.log("hello router"));
//     //data => data);


router.post('/api/flight', (req,res) => {
  console.log('Body: ', req.body);
  res.json({
      msg: 'Flight Data received.'
  });
});
module.exports = router;
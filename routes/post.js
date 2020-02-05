const router = require("express").Router();

router.post('/flight', (req,res) => {
    console.log('Body: ', req.body);
    res.json({
        msg: 'Flight Data received.'
    });
});

module.exports = router;
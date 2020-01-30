const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.Router();
const User = require('../models/Users');

router.post("/register", function(req, res){
    let user = new User();
	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.email = req.body.email;
	user.setPassword(req.body.password);
	user.save(function(err,user){
		if(err){
			return res.status(400).json({message:err.errmsg});
		};
		user.hash = undefined;
		return res.json({token:user.generateJWT(), user:user});
	});
})

module.exports = router;
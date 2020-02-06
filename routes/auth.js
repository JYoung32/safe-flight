const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.Router();
const User = require('../models/Users');

router.post("/register", function(req, res){
    let user = new User();
	user.fullName = req.body.fullName;
	user.email = req.body.email;
	user.setPassword(req.body.password);
	user.save(function(err,user){
		if(err){
			return res.status(400).json({message:err.errmsg});
		};
		user.hash = undefined;
		return res.json({token:user.generateJWT(), user:user});
	});
});

router.post('/login',function(req,res,next){
	console.log("in server login route");
	passport.authenticate('local',function(err, user, info){
		if(err){
            return next(err);
        }
        if(user){
            return res.json({token: user.generateJWT(), user: user});
        }else{
            return res.status(401).json({message: info.message});
        }
	})(req,res,next);
});

module.exports = router;
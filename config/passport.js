var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('Users');

var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromHeader('login_token');
opts.secretOrKey = process.env.jwtSecret;

module.exports = function(passport) {

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        console.log('jwt_payload', jwt_payload);

        User.findOne({_id: jwt_payload._id}, function(err, user) {
            user.hash = undefined;
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));

    passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (username, password, done) {
            User.findOne({email: username}).exec(function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Incorrect username.'});
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                user.hash = undefined;
                return done(null, user);
            });
        }
    ));
}
const db = require('../config/mongoose');
const  Users = require('../models/user');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

module.exports.signup = async(req, res)=>{
    // cecking whether password and confirm password are same or not
    if(req.body.password !== req.body.confirm_password){
        req.flash("error", "password does not match.")
        console.log("password does not match.");
        return res.redirect("/");
    }

    // checking for same email id in the db
    var userData = await Users.find({email:req.body.email});
    if(userData == false){
        Users.create({email:req.body.email, password: await bcrypt.hash(req.body.password, 10)});
        console.log("New user added to the database.");
        return res.render("home");
    }

    // returning back to home page if the user already exists
    console.log(req.body.email, "already exists.");
    return res.render("home");
}
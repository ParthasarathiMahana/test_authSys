const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports.signIn = async(req, res)=>{
    return res.render("homeAfterLogin");
}

module.exports.createSession = (req, res)=>{
    req.flash('success', "Logged in successfully.");
    return res.redirect('/login/profile');
}

module.exports.signOut =(req, res)=>{
    req.logout(req.user, (err)=>{
        if(err){
            console.log("error signing out");
            return;
        }
    })
    req.flash('success', "Logged out successfully.");
    return res.redirect('/');
}

module.exports.resetPassword = async(req, res)=>{
    if(req.isAuthenticated()){
        let user = await User.findOne({email:req.user.email});
        if(user == false){
            return console.log("user not found for password reset");
        }
        if(req.body.new_password === req.body.confirm_password){
            let user1 = await User.findByIdAndUpdate(user._id,{password: await bcrypt.hash(req.body.new_password, 10)})
            console.log("password changed");
            return res.render('homeAfterLogin',{user_email:user.email})
        }
        console.log("password do not match");
        return res.render('home');
    }
}
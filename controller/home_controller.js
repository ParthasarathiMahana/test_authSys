const Users = require('../models/user');


module.exports.home =async(req, res)=>{
    // console.log(req.cookies);
    // res.cookie('user_id',369);
    // if(req.cookies.user_id){
    //     let user = await Users.findById(req.cookies.user_id);
    //     return res.render("homeAfterLogin", {user_email: user.email});
    // }
    if(req.isAuthenticated()){
        // let user = await Users.findById(req.cookies.user_id);
        return res.render("homeAfterLogin", {user_email: req.user.email});
    }
    return res.render('home');
}
const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const passportGoogle = require('./config/passport-google-oauth2-strategy');

// for passport authentication
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

// for flash messages
const flash = require('connect-flash');
const customMWare = require('./config/middleware');
// for deployment

const PORT = process.env.PORT||8000;
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(session({
    name:'autheticationSystem',
    secret:'PSM',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*100)
    },
    store:new MongoStore({
            mongooseConnection: db,
            autoRemove: "disabled"
        },
        function(err){
            console.log(err || 'connect-mongodb setup is done.')
        }
    )
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMWare.setFlash);

app.use('/', require('./routes'));

// db.then(()=>{
    app.listen(PORT,(err)=>{
        if(err){
            return console.log("Error occured while connecting server with port", err);
        }
        console.log("Server is up and runnig on port",PORT);
    })
// })
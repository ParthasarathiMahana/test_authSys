const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.once('open', function(){
    console.log('connected!');
})

module.exports = db;

// const connectDB = async()=>{
//     try{
//         // process.env.MONGO_URI
//         const conn = await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected with issueTracker DB"));
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// module.exports = connectDB;
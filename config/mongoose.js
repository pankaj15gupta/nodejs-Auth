const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/nodejs_auth');

mongoose.connect('mongodb+srv://pg8793157653:allow1234@cluster0.ui3pyzy.mongodb.net/');

const db = mongoose.connection;

db.on('error' , console.error.bind(console,"Error connection to mongoDB"));
db.once('open', function(){
    console.log('connected to database :: MongoDB')
});

module.exports=db;


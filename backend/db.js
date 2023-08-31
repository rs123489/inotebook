const mongoose = require('mongoose');

const mongoURI = "mongodb://Production:Kukku%401975@15.207.57.45:27017/Orgzstack?&authSource=admin"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
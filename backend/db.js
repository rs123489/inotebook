const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ips-mongo:Mahanadi@4@cluster0.pfh2n.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
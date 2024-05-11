

const MongoClient = require('mongodb').MongoClient;
const mongoose=require('mongoose');

const mongoURI="mongodb+srv://agrawalshubham1001:SHUBHAm@123@cluster0.fya4tig.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,
  useFindAndModify: false });

async function connectToMongo() {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
      
      // Add your logic or start the server here
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }
  module.exports= connectToMongo;
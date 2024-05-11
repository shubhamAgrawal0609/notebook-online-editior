const connectToMongo= require('./db');
const mongoose =require ('mongoose')
const express = require('express')
//const db='mongodb+srv://agrawalshubham1001:SHUBHAm@123@cluster0.fya4tig.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=>{
  console.log('Connected to MongoDB');
} ).catch((err)=> console.log('no connection'));

connectToMongo() ; 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



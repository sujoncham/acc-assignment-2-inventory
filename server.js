const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./app')

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`Database connection is successfull`)
})
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('my server is ', port);
})


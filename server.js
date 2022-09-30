const mongoose = require('mongoose');
const { path } = require('./app');
const dotenv = require('dotenv').config();
const app = require('./app')

mongoose.connect(process.env.DATABASE).then(()=>{
    res.send('/index.js')
})
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('my server is ', port);
})


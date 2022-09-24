const express = require('express');
const app = express();


// tour get 
app.get('/', (req, res)=>{
    res.send('Route is working! Yay!')
});
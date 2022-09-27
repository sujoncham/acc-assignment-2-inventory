const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


// tour get 
app.get('/', (req, res)=>{
    res.send('Route is working! Yay!')
});

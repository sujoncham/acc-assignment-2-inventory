const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    console.log('server connected');
    res.send('connected')
});


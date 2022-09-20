const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    console.log('server connected');
    res.send('connected')
});


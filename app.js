const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors());

// schema design
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please, provide name"],
        trim:true,
        unique:true,
        minLenght: [, 'Name must be at least 5 five'],
        maxlenght: [80, 'Name length is too large.']
    },
    description:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        mn:[0, 'price can not negative']
    }, 
    category:{
        type:String,
        required: true,
        enum:{
            values: ["vip", "general", "corporate", "family"],
            message: "unit can be {VALUE}, must be vip/gen/cor"
        }
    }, 
    quantity: {
        type: Number, 
        required: true,
        min: [0, 'quantity can nt be negative'],
        validate:{
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if(isInteger){
                    return true
                } else{
                    return false
                }
            }
        },
        message: "quantity must be an integer"
    },
    status:{
        type:String,
        enum:{
            values: ["package running", "package closed", "package  coming soon"],
            message: "status can nt be {VALUE}"
        }
    },
    // supplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "Supplier"
    // },
    // categories:[{
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     _id: mongoose.Schema.Types.ObjectId
    // }]
    // createAt:{
    //     type: Date,
    //     default:Date.now,
    // }, 
    // updatedAt:{
    //     type: Date,
    //     default:Date.now
    // }
}, {
    timesstamps:true,
})

// mongoose model 
const Tour = mongoose.model('Tour', tourSchema);


app.get('/', (req, res, next)=>{
    console.log('server connected');
    res.send('connected')
});

// tour posting 
app.post('/api/v1/tour', (req, res, next)=>{
    // save or create
    const tour = new Tour(req.body);
    tour.save()

    // res.send(req.body);
});

module.exports = app;

// package name
// price
// 

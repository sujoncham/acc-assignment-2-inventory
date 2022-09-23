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
        max: [250, 'quantity too large greater than 250'],
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

// mongoose midlewares for saving data : pre/ post 
tourSchema.pre("save", function(next){
    console.log('Before saving data');
    next();
})
tourSchema.post("save", function(doc, next){
    console.log('After saving data');
    next();
})

// mongoose model 
const Tour = mongoose.model('Tour', tourSchema);


// tour get 
app.get('/api/v1/tour', async(req, res, next)=>{
    try {
        // const tours = await Tour.find({price: {$gt:380}});
        // const tours = await Tour.find({price: {$lt:380}});
        // const tours = await Tour.find({name: {$in: ["Mongla Sea Beach", "Pathaya Sea Beach"]}});
        // specific data 
        // const tours = await Tour.find({}, 'name price');
        // const tours = await Tour.find({}, '-name -price');
        const tours = await Tour.find({}).limit();
        res.status(200).json({
            status: 'success',
            data: tours,
        })
        res.send(tours)
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data can not get',
            error: error.message,
        })
    }
});

// tour posting 
app.post('/api/v1/tour', async(req, res, next)=>{
    try {
        // save or create
    // const tour = new Tour(req.body);
    // const result = await tour.save()

    //create 
    const result = await Tour.create(req.body)
    if(result.quantity < 250){
        result.status = 'person to large';
    }

    // res.send(req.body);
    res.status(200).json({
        status: 'success',
        message:'Data inserted successfull',
        data: result,
    })
    } catch (error) {
        console.log('data not inserted');
        res.status(400).json({
            status: 'failed',
            message : "data not inserted",
            error: error.message
        })
    }
});

module.exports = app;

// package name
// price
// 

const mongoose = require('mongoose');

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
        min:[0, 'price can not negative']
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

tourSchema.methods.logger = function(){
    console.log(`data saved for ${this.name}`)
}


// mongoose model 
const Tour = mongoose.model('Tour', tourSchema);


module.exports = Tour;
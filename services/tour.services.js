
const Tour = require('../models/Tour')

exports.getTourService = async()=>{
    const tours = await Tour.find({});
    return tours;
}

        // const tours = await Tour.find({price: {$gt:380}});
        // const tours = await Tour.find({price: {$lt:380}});
        // const tours = await Tour.find({name: {$in: ["Mongla Sea Beach", "Pathaya Sea Beach"]}});
        // specific data 
        // const tours = await Tour.find({}, 'name price');
        // const tours = await Tour.find({}, '-name -price');
        // const tours = await Tour.find({}).limit();
        // const tours = await Tour.find({}).sort({price: -1});
        // const tours = await Tour.find({}).select({price: 0});
        //mongoose works more easy
        // const tours = await Tour
        // .where('name').equals(/\w/)
        // .where('quantity').gt(200).lt(500)
        // .sort({quantity: -1})


    exports.getCreateTour = async(data)=>{
        const tour = await Tour.create(data)
         // if(result.quantity < 250){
    //     result.status = 'person to large';
    // }
        return tour;
    }

    exports.updateTourService = async(tourId, data)=>{
        // new version 
        const result = await Tour.updateOne({_id:tourId}, {$inc: data}, {runValidators: true});
        // old way 
        // const myTour = await Tour.findById(tourId);
        // const result = await myTour.set(data).save();
        return result;
    }
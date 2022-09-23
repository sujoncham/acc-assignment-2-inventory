const Tour = require('../models/Tour')

exports.getTour = async(req, res, next)=>{
    try {
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

        const tour = await Tour.findById(undefined)

        res.status(200).json({
            status: 'success',
            data: tour,
        })
        res.send(tour)
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data can not get',
            error: error.message,
        })
    }
}


exports.createTour = async(req, res, next)=>{
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
}
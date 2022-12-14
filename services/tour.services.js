
const Tour = require('../models/Tour')

exports.getTourService = async(filters, queries)=>{
    const tours = await Tour.find({}).sort(queriesh.sortBy).select(queries.fields);
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

    exports.bulkUpdateTourService = async(data) =>{
        console.log(data.ids, data)
        // const result = await Tour.updateMany({_id:data.ids}, data, {
        //     runValidators: true
        // });
        const tours = [];
        data.ids.forEach(tour => {
            tours.push(Tour.updateOne({_id:tour.id}, tour.data))
        });
         const result = Promise.all(tours);
         console.log(result)
        return result;
    }
    exports.bulkDeleteTourService = async(ids) =>{
        //selected ids delete
        const result = await Tour.deleteMany({_id:ids});
        //all delete products
        // const result = await Tour.deleteMany({});
        return result;
    }

    exports.deleteByIdTourService = async(id) =>{
        const result = await Tour.deleteOne({_id:id});
        return result;
    }

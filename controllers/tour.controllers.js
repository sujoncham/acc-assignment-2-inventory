const { getTourService, getCreateTour, updateTourService, bulkUpdateTourService, deleteTourService, deleteByIdTourService } = require("../services/tour.services")


exports.getTour = async(req, res, next)=>{
    try {
        const result = await getTourService();

        res.status(200).json({
            status: 'success',
            message: 'All Data showing successfully',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data can not get',
            error: error.message
        })
    }
}


exports.createTour = async(req, res, next)=>{
    try {
        // save or create
    // const tour = new Tour(req.body);
    // const result = await tour.save()

    //create 
    const result = await getCreateTour(req.body)
   

    result.logger()

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

exports.updateTour = async(req, res, next)=>{
    try {
        const {id} = req.params;
        
        const result = await updateTourService(id, req.body)

        res.status(200).json({
            status: 'update',
            message: "updated request successfully",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not update',
            error: error.message
        })
    }
}


exports.bulkUpdateTour = async(req, res, next)=>{
    try {
        const result = await bulkUpdateTourService(req.body)

        res.status(200).json({
            status: 'update',
            message: "updated request successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not update',
            error: error.message
        })
    }
}
exports.deleteByIdTour = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await deleteByIdTourService(id)

        res.status(200).json({
            status: 'delete',
            message: "Deleted request successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not delete',
            error: error.message
        })
    }
}
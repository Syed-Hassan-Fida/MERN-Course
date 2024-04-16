const Tour = require('./../modals/tourModal')

// get all tours data
exports.getAllTours = async (req, res) => {
    try {
        const allTours = await Tour.find()
        res.status(200).json({
            status: "success",
            results: allTours.length,
            data: {
                allTours
            }
        })
    } catch (err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

// create tour
exports.createTour = async (req, res) => {
    try{
        const newTour = await Tour.create(req.body)
    
        res.status(201).json({
            status: "success",
            message: "Tour is added successfully...",
            data: {
                newTour: newTour
            }
        })
    } catch (err){
        res.status(400).json({
            status: "faild",
            message: "Tour is not added successfully...",
            error: err.errorResponse.errmsg
        })
    }
}

// get single tour data
exports.getSingleTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                tour
            }
        })
    } catch (err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

// update tour
exports.updateTour = async (req, res) => {
    try {
        const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            data: {
                updateTour
            }
        })
    } catch (err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

// delete tour
exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "success",
            data: null
        })
    } catch (err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}
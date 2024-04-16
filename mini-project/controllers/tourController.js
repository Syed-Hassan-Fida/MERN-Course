const Tour = require('./../modals/tourModal')

// checBody Middleware
exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: "Fail",
            message: "Name or Price Missing..."
        })
    }
    next()
}

// get all tours data
exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        // results: tours.length,
        // data: {
        //     tours
        // }
    })
}

// create tour
exports.createTour = (req, res) => {
    res.status(201).json({
        status: "success",
        message: "Tour is added successfully...",
        // data: {
        //     newTour: newTour
        // }
    })
}

// get single tour data
exports.getSingleTour = (req, res) => {

    res.status(200).json({
        status: "success",
        // data: {
        //     singleTour
        // }
    })

}

// update tour
exports.updateTour = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Updated Successfully",
        data: {
            tour: req.body
        }
    })
}

// delete tour
exports.deleteTour = (req, res) => {

    res.status(204).json({
        status: "success",
        message: "Deleted Successfully",
        data: null
    })

}
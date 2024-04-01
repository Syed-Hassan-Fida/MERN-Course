const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

// checkID middleware
exports.CheckID = (req, res, next, val) => {
    console.log("id", val)
    const id = req.params.id * 1 // type conversion
    if (id > tours.length) {
        return res.status(404).json({ // return is used to block the next execution
            status: "fail",
            message: "INVALID ID"
        })
    }
    next()
}

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
        results: tours.length,
        data: {
            tours
        }
    })
}

// create tour
exports.createTour = (req, res) => {
    const formData = req.body
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, formData)

    tours.push(newTour)

    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
        if (err) {
            res.status(404).json({
                status: "error",
                message: "Tour is not added successfully..."
            })
        } else {
            res.status(201).json({
                status: "success",
                message: "Tour is added successfully...",
                data: {
                    newTour: newTour
                }
            })
        }

    })
}

// get single tour data
exports.getSingleTour = (req, res) => {
    const singleTour = tours.find(el => el.id === id)

    res.status(200).json({
        status: "success",
        data: {
            singleTour
        }
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
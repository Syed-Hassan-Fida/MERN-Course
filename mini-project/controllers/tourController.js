const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

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

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
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
    const id = req.params.id * 1 // type conversion
    const singleTour = tours.find(el => el.id === id)

    if (!singleTour) {
        res.status(404).json({
            status: "fail",
            message: "INVALID ID"
        })
    } else {
        res.status(200).json({
            status: "success",
            data: {
                singleTour
            }
        })
    }
}

// update tour
exports.updateTour = (req, res) => {

    const id = req.params.id * 1 // type conversion
    if (id > tours.length) {
        res.status(404).json({
            status: "fail",
            message: "INVALID ID"
        })
    } else {
        res.status(200).json({
            status: "success",
            message: "Updated Successfully",
            data: {
                tour: req.body
            }
        })
    }
}

// delete tour
exports.deleteTour = (req, res) => {

    const id = req.params.id * 1 // type conversion
    if (id > tours.length) {
        res.status(404).json({
            status: "fail",
            message: "INVALID ID"
        })
    } else {
        res.status(204).json({
            status: "success",
            message: "Deleted Successfully",
            data: null
        })
    }
}
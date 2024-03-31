const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000

// middleware
app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

// get all tours data
const getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
}

// create tour
const createTour = (req, res) => {
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
const getSingleTour = (req, res) => {
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
const updateTour = (req, res) => {

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
const deleteTour = (req, res) => {

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

// app.get('/api/v1/tours', getAlltpurs)
// app.post('/api/v1/tours', createtour)
// app.get('/api/v1/tour/:id', getSingleTour)
// app.patch('/api/v1/tour/:id', updateTour) 
// app.delete('/api/v1/tour/:id', deleteTour) 

app.route('/api/v1/tours').get(getAllTours).post(createTour)

app.route('/api/v1/tour/:id').patch(updateTour).get(getSingleTour).delete(deleteTour)


app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
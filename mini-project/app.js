const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000

// middleware
app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
})

app.post('/api/v1/add-tour', (req, res) => {
    const formData = req.body
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({id: newId}, formData)

    tours.push(newTour)

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours) , (err) => {
        if(err){
            res.status(200).json({
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
})

app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
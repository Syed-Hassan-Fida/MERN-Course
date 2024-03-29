const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000

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


app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
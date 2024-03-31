const express = require('express')
const app = express()

app.use(express.json())

const tourRouters = require('./routes/tourRouters')
const userRouters = require('./routes/userRouters')

// basic method to call routes and associated functions
// app.get('/api/v1/tours', getAlltpurs)
// app.post('/api/v1/tours', createtour)
// app.get('/api/v1/tour/:id', getSingleTour)
// app.patch('/api/v1/tour/:id', updateTour) 
// app.delete('/api/v1/tour/:id', deleteTour) 

app.use('/api/v1/tours', tourRouters)
app.use('/api/v1/users', userRouters)

module.exports = app
const express = require('express')
const morgan = require('morgan')
const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

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
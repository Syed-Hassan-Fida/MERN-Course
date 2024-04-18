const mongoose = require('mongoose')
const tourScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Have Tour Name'],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'Tour must Has a duration...']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'Tour must Has a group size...']
    },
    difficulty: {
        type: String,
        required: [true, 'Tour must Has a group difficulty...']
    },
    ratingsAverage: {
        type: Number,
        default: 2.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'Tour must Has a price...']
    },
    priceDiscount: {
        type: Number
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'Tour must Has a summary...']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'Tour must has a image...']
    },
    images: [String],
    startDates: [Date],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Tour = mongoose.model('Tour', tourScheme)

module.exports = Tour
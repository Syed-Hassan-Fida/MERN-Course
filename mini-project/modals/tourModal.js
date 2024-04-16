const mongoose = require('mongoose')
const tourScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Have Tour Name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 2.5
    },
    price: {
        type: Number,
        required: [true, 'Tour must Has a price...']
    }
})

const Tour = mongoose.model('Tour', tourScheme)

module.exports = Tour
const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then( con => {
    console.log(con.connections)
    console.log("DB Connected Successfully...")
}).catch(error => console.log(error))

const mongooseScheme = new mongoose.Schema({
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

const Tour = mongoose.model('Tour', mongooseScheme) 

const testTour = new Tour({
    name: "The is test",
    rating: 4.4,
    price: 6778
})

testTour.save().then(data=>console.log("data", data)).catch(error=>console.log(error))

const port = process.env.PORT

app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
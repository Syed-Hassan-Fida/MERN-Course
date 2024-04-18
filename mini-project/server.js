const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then( con => {
    // console.log(con.connections)
    console.log("DB Connected Successfully...")
}).catch(error => console.log(error))

const port = process.env.PORT

app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app')
const port = process.env.PORT

app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
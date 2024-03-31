const app = require('./app')
const port = 8000

app.listen(port, '127.0.0.1', () => {
    console.log("http://127.0.0.1:8000")
})
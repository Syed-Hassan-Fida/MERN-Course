const EventEmitter = require('events')
// const myEmitter = new EventEmitter() 

// best way is 
class Sales extends EventEmitter {
    constructor() {
        super()
    }
}

const myEmitter = new Sales()

myEmitter.on('sales', ()=>{
    console.log('Sales is generated')
})
myEmitter.on('sales', ()=>{
    console.log('Customer name is JOHN')
})
myEmitter.emit('sales')


///////////// SERVER REQUEST ///////////////
const http = require("http")

const server = http.createServer()

server.on('request', (req, res) => {
    res.end("Request Received")
})

server.on('close', () => {
    console.log("server is closed")
})
server.listen(8000, '127.0.0.1', () => {
    console.log("listen the server on http://127.0.0.1:8000" )
})
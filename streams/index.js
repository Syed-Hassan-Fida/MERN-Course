const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    // solution 1 not good practice
    // fs.readFile('text.txt', 'utf-8', (error, data) => {
    //     if (error) console.log(error)
    //     res.end(data)
    // })

    // 2nd solution a better one
    // const readable = fs.createReadStream('text.txt')
    // readable.on('data', (chunk) => {
    //     res.write(chunk)
    // })
    // readable.on('end', () => {
    //     res.end()
    // })
    // readable.on('error', (error) => {
    //     console.log("error", error)
    //     res.statusCode = 500
    //     res.end("File not found")
    // })

    // solution best approach (remove back pressure)
    const readable = fs.createReadStream('text.txt')
    readable.pipe(res)
    // attach pipe with raeable source and then pass writable source

})

server.listen(8000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:8000')
})
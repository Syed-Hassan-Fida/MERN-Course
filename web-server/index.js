const http = require('http')
const url = require('url')
const fs = require('fs')

const productsArrray = require('./modules/productsArrray')

const data = fs.readFileSync(`${__dirname}/productsData/products.json`, 'utf-8')
const homePage = fs.readFileSync(`${__dirname}/templates/homePage.html`, 'utf-8')
const tempcard = fs.readFileSync(`${__dirname}/templates/tempcard.html`, 'utf-8')
const singleProduct = fs.readFileSync(`${__dirname}/templates/singleProduct.html`, 'utf-8')

const dataobj = JSON.parse(data)


const server = http.createServer((req, res) => {
    // const pathName = req.url
    const { query, pathname } = url.parse(req.url, true)
    
    if(pathname == '/' || pathname == '/overview'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const readJsonData = dataobj.products.map(el => productsArrray(tempcard, el)).join('')
        const indexPage = homePage.replace(/{%PRODUCT_LISTENING%}/g, readJsonData)
        res.end(indexPage)
    } else if (pathname == '/product') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const product = dataobj.products[query.id]
        const output = productsArrray(singleProduct, product)
        const singleProductPage = homePage.replace(/{%PRODUCT_LISTENING%}/g, output)
        res.end(singleProductPage)
    } else if (pathname == '/api') {
        res.writeHead(200, {
            'content-type': 'application/json'
        })
        res.end(data)
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>Page Not Found!</h1>')
    }
}) 

server.listen(8000, '127.0.0.1', () => {
    console.log("server started at 127.0.0.1:8000")
})
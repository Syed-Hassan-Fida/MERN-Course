const fs = require('fs')

// read file with sync way
const textInput = fs.readFileSync('./text/input.txt', 'utf-8')

const textOutput = `This is completed: ${textInput}.\nCompleted on: ${ Date.now()}`

fs.writeFileSync('./text/output.txt', textOutput)

console.log("Completed")

// read file with async way
fs.readFile('./text/input.txt', 'utf-8', (error, data) => {
    console.log("Completed", data)
    fs.writeFile('./text/output.txt', `${data}.\nAsync Operation Completed`, err => {
        console.log(' Operation Completed')
    } )
})

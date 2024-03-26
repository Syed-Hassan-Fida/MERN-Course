// const EventEmitter = require('events')
// // const myEmitter = new EventEmitter() 

// // best way is 
// class Sales extends EventEmitter {
//     constructor() {
//         super()
//     }
// }

// const myEmitter = new Sales()

// myEmitter.on('sales', ()=>{
//     console.log('Sales is generated')
// })
// myEmitter.on('sales', ()=>{
//     console.log('Customer name is JOHN')
// })
// myEmitter.emit('sales')


// ///////////// SERVER REQUEST ///////////////
// const http = require("http")

// const server = http.createServer()

// server.on('request', (req, res) => {
//     res.end("Request Received")
// })

// server.on('close', () => {
//     console.log("server is closed")
// })
// server.listen(8000, '127.0.0.1', () => {
//     console.log("listen the server on http://127.0.0.1:8000" )
// })


function StringChallenge(sen) { 

    const words = sen.replace(/[^\w\s]/g, '').split(' ')
  
    let longestWord = ''
    for(let i=0; i< words.length; i++){
      const current = words[i]
      if (current.length > longestWord.length){
        longestWord = current
      }
    } 
  
    if(longestWord.length >= 3){
      longestWord = longestWord.substring(0,2) + 'X' + longestWord.substring(3) 
    }
  
    const challengeToken = "n40sw3od158"
    let result = longestWord + challengeToken
    console.log("longestWord",result)
    
    result = result.split('').map((char, index) => {
        index % 3 === 2 ? 'X' : char
      }).join('')
    console.log(longestWord,result)
    return result; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge("fun&!! time"));
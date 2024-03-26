const fs = require('fs')
const crypto = require('crypto')

// increease thread pool size
process.env.UV_THREADPOOL_SIZE = 1
const start = Date.now()

setTimeout(()=>{ console.log("timeout 1") }, -1)

setImmediate(()=>{ console.log("immediate 1") })

fs.readFile('text.txt', 'utf-8', () => {
    console.log("file read finished")
    console.log("-------------------")
    setTimeout(()=>{ console.log("timeout 2") }, 0)
    setImmediate(()=>{ console.log("immediate 2") })

    process.nextTick(() => console.log("process next tick") )

    crypto.pbkdf2("password","salt", 100000, 1024, "sha512",  () => {
        console.log(Date.now() - start, "thread pool")
    })
    crypto.pbkdf2("password","salt", 100000, 1024, "sha512",  () => {
        console.log(Date.now() - start, "thread pool")
    })
    crypto.pbkdf2("password","salt", 100000, 1024, "sha512",  () => {
        console.log(Date.now() - start, "thread pool")
    })
    crypto.pbkdf2("password","salt", 100000, 1024, "sha512",  () => {
        console.log(Date.now() - start, "thread pool")
    })
})


console.log("hello top level code")
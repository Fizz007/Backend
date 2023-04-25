const http = require('http');

const server = http.createServer((req,res)=> {
    // console.log("req. recived")
    console.log('url', req.url);
    if(req.url === '/'){
        res.end("You are at home")
    }
    else if(req.url === '/product'){
        res.end("You are at product page")
    }
    else if(req.url === '/about'){
        res.end("You are at about page")
    }
    else{
        res.end("response send")

    }
    res.end()
})


//help internally event module
// server.on('error', ()=> {
//     console.log("event occured")
// })
// server.emit('error');



const PORT = 8000
server.listen(PORT , ()=> {
    console.log(`server is running at ${PORT}`)
})
const http = require('http')
const server = http.createServer((req,res) => {
    if (req.url === '/' ){
        res.end('welcome to home page')
    }
    if(req.url === '/about'){
        res.end('welcome to about page')
    }
    res.end(`
    <h1>oops</h1>
    <a href="/" >go back to home page</href>
    `)
    
})
server.listen(5000)
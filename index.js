var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var server = require('http').createServer(app)


app.use(bodyParser.json({limit: '1000mb'}))
app.use(bodyParser.urlencoded({    
    extended: true
}))

server.listen(9876)

app.post('/xxx/xxx', (req, res) => {
    res.send({
        status: 200,
        msg: "ok"
    })
})

app.get('/xxx/xxx', (req, res) => {
    res.send({
        status: 200,
        msg: "ok",
        data: ['/xxx/xxx/xxx/20190301.txt', '/xxx/xxx/xxx/20190302.txt']
    })
})

app.get('/xx/xxx', (req, res) => {
    res.send({
        status: 200,
        msg: "ok"
    })
})
// let fs = require('fs')

// fs.writeFile('./data/你好.md', 'hello word 8888', function(err){
//     console.log(err)
// })

// fs.readFile('./data/你好.md', function(err, data) {
//     console.log(err, data)
// })



var http = require('http')
let fs = require('fs')


let  server = http.createServer()
server.on('request', function (req,res) {
    var url =  req.url
    console.log('ok收到请求········', url)
    if (url == '/') {
        fs.readFile('./data/resource/index.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end("文件读取失败")
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if (url == '/login') {
        var data = [
            {name: "张三",age: 14},
            {name: '张三',age: 14},
            {name: '张三',age: 14},
            {name: '张三',age: 14},
            {name: '张三',age: 14},
            {name: '张三',age: 14},
            {name: '张三',age: 14},
        ]
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(JSON.stringify(data))
    } else if (url == '/login1'){
        fs.readFile('./data/resource/1.jpg', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end("文件读取失败")
            } else {
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }
})

server.listen(3009, function() {
    console.log('启动成功')
})

var http = require('http')
var fs = require('fs')
var template = require('art-template')
var tem

var comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三2',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三3',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三5',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dataTme: '2021-06-06'
    }
]

http
    .createServer(function (req, res) {
        var url = req.url
        console.log(url, 9999);
        if (url === '/') {
            fs.readFile('./views/app.html', function(err, data) {
                if (err) {
                    return res.end('404')
                }
             var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        } else if (url.indexOf('/public/') === 0) {
            fs.readFile('.' + url, function(err, data) {
                if (err) {
                    return res.end('404999')
                    
                }
                res.end(data)
            })

        } else if (url === '/post'){
            fs.readFile('./views/post.html', function(err ,data) {
                if (err) {
                    return res.end('404')
                }
                res.end(data)
            })
        } else{
            fs.readFile('./views/404.html', function(err ,data) {
                if (err) {
                    return res.end('404')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, function () {
        console.log('runing......');
    })
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

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
        var parseObj = url.parse(req.url, true)
        var parseName = parseObj.pathname  // 不包含？ 之后的内容
        if (parseName === '/') {
            fs.readFile('./views/app.html', function(err, data) {
                if (err) {
                    return res.end('404')
                }
             var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        } else if (parseName.indexOf('/public/') === 0) {
            fs.readFile('.' + parseName, function(err, data) {
                if (err) {
                    return res.end('404999')
                    
                }
                res.end(data)
            })

        } else if (parseName === '/post'){
            fs.readFile('./views/post.html', function(err ,data) {
                if (err) {
                    return res.end('404')
                }

                res.end(data)
            })
        }else if(parseName === '/pinglun') {
            console.log('收到请求了',parseObj.query)
            let obj = parseObj.query
            obj.dataTme = 'new Data()'
            comments.unshift(obj)
            //    服务端跳转
            // 1.状态码302   Location告诉客户端
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()

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
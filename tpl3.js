var template = require('art-template')
var fs = require('fs')
var tplData  = ""
 fs.readFile('./tpl3.html',  function async (err, data) {
    if (err) {
        console.log(err);
    } else {
        tplData = data.toString()
        var r = template.render(tplData, {
            name: 'Jack',
            age: '12',
            hobby: [
                '吃蛋',
                '吃蛋'
            ]
        })
        console.log(r);
    }
})
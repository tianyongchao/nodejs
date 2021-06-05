var template = require('art-template')
var fs = require('fs')
var tplData  = ""
 fs.readFile('./tpl.html',  function async (err, data) {
    if (err) {
        console.log(err);
    } else {
        tplData = data.toString()
    }
})
let a = await tplData
console.log(a)

return
var r = template.render(tplData, {
    name: 'Jack',
    age: '12',
    hobby: [
        '吃蛋',
        '吃蛋'
    ]
})

console.log(r);
console.log(9999999);
var test = require('tap').test
var fs = require('fs')
var exec = require('child_process').exec

test('tableaux', function (t) {
  var expected = fs.readFileSync('./expected') + ''
  exec('node example', function (err, stdout) {
    var actual = stdout + ''
    t.is(actual, expected)
    t.end()
  })
})
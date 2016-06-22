const zygon = require('zygon')

module.exports = (...cols) => {
  const tbl = zygon(cols)
  tbl.printHead()

  function write(...args) { tbl.printRow(args) }
  write.dim = (s) => {
    process.stdout.write('\u001b[2m ' + s + ' ' + '\u001b[0m')
  }
  write.bold = (s) => {
    process.stdout.write('\u001b[1m ' + s + ' ' + '\u001b[0m')
  }
  write.newline = () => process.stdout.write('\n')
  write.arrow = (leftPad = 3, rightPad = 1) => 
    process.stdout.write(pad(leftPad) + '↳' + pad(rightPad))

  write.spaces = (n) => process.stdout.write(pad(n))

  return write
}

function pad(n) { return Array(n).join(' ') }
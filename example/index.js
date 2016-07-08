const { hiri } = require('../lib')
const { message } = require('./command.js')

const cli = new hiri({
  'm,message': message
})

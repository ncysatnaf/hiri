const { hiri } = require('../lib')
const { message } = require('./command.js')

const cli = new hiri()


cli.createCommand({
  'm,message': message
})


cli.listen()

var {hiri} = require('../lib')

function message(){
	let input = this.input
	let flags = this.flags
	return console.log(`You input ${input} with flags ${JSON.stringify(flags)}`)
}

const cli = new hiri({
	'm,message': message
})

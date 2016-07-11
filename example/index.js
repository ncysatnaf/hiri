'use strict'

import { hiri } from '../lib'
import { message } from './command'

const cli = new hiri({
	'm,message': message
})

import test from 'ava'
import {hiri} from './lib'
import {message} from './example/command'

let cli = new hiri({
  'm,message': message
})

test('hiri', t => {
  t.truthy(cli, {commandlist: [ 'm', 'message' ]})
})

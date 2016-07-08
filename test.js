import test from 'ava'
import {bindCommandCreators} from './lib'

test('bindCommandCreators', t => {
  t.truthy(bindCommandCreators(),'lol')
})

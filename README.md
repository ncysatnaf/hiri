#hiri [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![Build Status][build-status]][build-url] [![Coveralls branch][coverall-status]][coverall-url]

[npm-image]: https://img.shields.io/npm/v/hiri.svg
[npm-url]: https://npmjs.org/package/hiri
[downloads-image]: https://img.shields.io/npm/dm/hiri.svg
[downloads-url]: https://npmjs.org/package/hiri
[build-status]: https://travis-ci.org/ncysatnaf/hiri.svg?branch=master
[build-url]: https://travis-ci.org/ncysatnaf/hiri
[coverall-status]: https://img.shields.io/coveralls/ncysatnaf/hiri/master.svg
[coverall-url]: https://coveralls.io/github/ncysatnaf/hiri


## install

```
npm install hiri
```

## usage(need babel)

```js
//index.js

import { hiri } from 'hiri'
import { message } from './command'

const cli = new hiri({
	'm,message': message
})

//command.js

export function message() {
  let input = this.input
  let flags = this.flags
  return console.log(`You input ${input} with flags ${JSON.stringify(flags)}`)
}


```

```
$ node index.js -m lalala hello
//You input hello with flags {"m":"lalala"}
```

### inspiration of [cac/egoist](https://github.com/egoist/cac)

## license

MIT. Copyright (c) [viii](https://github.com/ncysatnaf).

#hiri [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/hiri.svg
[npm-url]: https://npmjs.org/package/hiri
[downloads-image]: https://img.shields.io/npm/dm/hiri.svg
[downloads-url]: https://npmjs.org/package/hiri

## install

```
npm install hiri
```

## usage  

```js
//index.js

var {hiri} = require('hiri')

function message(){
	let input = this.input
	let flags = this.flags
	return console.log(`You input ${input} with flags ${JSON.stringify(flags)}`)
}

const cli = new hiri({
	'm,message': message
})

```

```
$ node index.js -m lalala hello
//You input hello with flags {"m":"lalala"}
```

### inspiration of [cac/egoist](https://github.com/egoist/cac)

## license

MIT. Copyright (c) [viii](https://github.com/ncysatnaf).

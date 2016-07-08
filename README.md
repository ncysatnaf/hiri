#hiri [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/get-package-readme.svg
[npm-url]: https://npmjs.org/package/get-package-readme
[downloads-image]: https://img.shields.io/npm/dm/get-package-readme.svg
[downloads-url]: https://npmjs.org/package/get-package-readme

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
node index.js -m lalala hello
// You input hello with flags {"m":"lalala"}
```

inspiration of [cac/egoist](https://github.com/egoist/cac)

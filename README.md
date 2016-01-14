
# for-do

## Features

 * Simple counting-down loop

## Examples

### `for(...).do(...)`

```javascript
var fd = require('for-do');
fd.for(10).do((count) => console.log(`countdown: ${count}`));
```

### `for...of...`

```javascript
var fd = require('for-do');
for (let count of fd.for(10)) {
	console.log(`countdown: ${count}`);
}
```

 * FACT: This package is bases on [x-iterable](https://www.npmjs.com/package/x-iterable) and creates [`XIterable`](https://github.com/ksxnodemodules/x-iterable-documentation/blob/master/references/create-class/x-iterable.md) objects, which means that the object also has `::forEach`, `::map`, `::every`, `::some`, ... methods, use them wisely

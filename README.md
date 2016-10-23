## Polyfills for Object.values, Object.entries & Object.getOwnPropertyDescriptors

Based on the reference implementations by [tc39](https://github.com/tc39) found [here](https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js) and [here](https://github.com/ljharb/Object.getOwnPropertyDescriptors/blob/master/implementation.js).

### Install
Install with
```javascript
npm install object.values.entries.getownpropertydescriptors --save-dev
```

### Usage
Load it in your code with an import statement:
```javascript
import "object.values.entries.getownpropertydescriptors";
```
Or from a script tag:
```html
<script src="../node_modules/object.values.entries.getownpropertydescriptors/polyfill.min.js"></script>
```

The polyfill will be applied automatically if necessary.

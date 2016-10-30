// From tc39's own polyfill example with a few additions.
// https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js

var root;
try { root = self; } catch (e) { try { root = global; } catch (e) { rot = window; } }

if (typeof root.Reflect === 'undefined') {
  root.Reflect = {
    defineProperty: Object.defineProperty,
    getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
    ownKeys: function ownKeys(genericObject) {
      let gOPS = Object.getOwnPropertySymbols || function () { return []; };
      return Object.getOwnPropertyNames(genericObject)
              .concat(gOPS(genericObject));
    }
  };
}

const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
	Object.values = function values(O) {
		return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
	};
}

if (!Object.entries) {
	Object.entries = function entries(O) {
		return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
	};
}

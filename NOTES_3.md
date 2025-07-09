## 🗺️ MIND MAP IDEA

```
JavaScript Basics
|
├── Primitives
|   ├─ Number
|   ├─ String
|   ├─ Boolean
|   ├─ null/undefined
|   ├─ Symbol
|   └─ BigInt
|
├── Non-Primitives
|   ├─ Array
|   ├─ Object
|   ├─ Set
|   └─ Map
|
├── Functions
|   ├─ Declaration
|   ├─ Arrow
|   ├─ Rest/Spread
|   └─ Destructuring
|
├── Control Flow
|   ├─ if/else
|   ├─ switch
|   └─ loops
|
├── Advanced
|   ├─ Hoisting
|   ├─ Closures
|   ├─ Async/Await
|   ├─ Promises
|   └─ Callbacks
|
├── Modules
|   ├─ Export
|   └─ Import
|
├── OOP
|   ├─ Classes
|   └─ Prototypal Inheritance
|
└── Event Loop
```

## 🎯 PRACTICE PROBLEMS

**PRIMITIVES**
✅ 1) Convert `123.456` to a string with 1 decimal place.
✅ 2) Check if `"42xyz"` can be parsed into a number.
✅ 3) Convert `"JAVASCRIPT"` to lowercase.
✅ 4) How do you check if `"funny bunny"` contains `"bunny"`?

**ARRAYS**
✅ 5) Add `"kiwi"` to the start of `["apple", "banana"]`.
✅ 6) Remove last element from `[1,2,3,4]`.
✅ 7) Use `map()` to double each number in `[5,6,7]`.
✅ 8) Use `filter()` to keep only odd numbers from `[10,15,20,25]`.
✅ 9) Combine `[1,2]` and `[3,4]` with `concat()`.
✅ 10) How do you check if `[9,8,7]` includes `8`?

**OBJECTS**
✅ 11) Create an object `car` with properties `make` and `year`.
✅ 12) Loop over keys of `{a:1, b:2}` and print key-value pairs.
✅ 13) Get an array of values from `{x:10, y:20}`.

**SET & MAP**
✅ 14) Add `"cat"` to a Set.
✅ 15) Delete `"dog"` from a Set.
✅ 16) Create a Map with key `"fruit"` and value `"apple"`, then get the value.

**FUNCTIONS**
✅ 17) Write an arrow function that returns the square of a number.
✅ 18) What’s the `.name` property of a function called `sing()`?

**REST/SPREAD/DESTRUCTURING**
✅ 19) Write a function that sums any number of arguments with `...nums`.
✅ 20) Combine `[1,2]` and `[3,4]` with spread.
✅ 21) Destructure object `{name: "Flash", speed: 1000}` into `name` and `speed`.

**HOISTING & CLOSURES**
✅ 22) What will this print?

```js
console.log(hoistedVar);
var hoistedVar = 5;
```

✅ 23) Write a closure that keeps a private `score` and lets you add to it.

**ASYNC**
✅ 24) Write a Promise that resolves after 1 second with `"Done"`.
✅ 25) Rewrite this with async/await:

```js
fetch("url")
  .then((res) => res.json())
  .then(console.log);
```

**MODULES**
✅ 26) Export a function `sayHello()` from a file, then import it elsewhere.

**CLASSES**
✅ 27) Create a `Person` class with `name` property and `greet()` method.

**EVENT LOOP**
✅ 28) Predict the order:

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

**PROTOTYPAL INHERITANCE**
✅ 29) Create object `parent` with `walk()` method. Make object `child` inherit from `parent` and call `child.walk()`.

---

## 📚 100 JAVASCRIPT Q\&A

---

### 📌 Primitives (Numbers, Strings, Booleans, null, undefined, Symbol, BigInt)

1️⃣ **Q:** How do you convert a number to a string?
**A:** Use `.toString()`: `123.toString() // "123"`

2️⃣ **Q:** How do you round a number to 2 decimal places?
**A:** Use `.toFixed(2)`: `3.14159.toFixed(2) // "3.14"`

3️⃣ **Q:** How do you check if a value is NaN?
**A:** `isNaN(value)`

4️⃣ **Q:** How do you parse `"42px"` into number 42?
**A:** `parseInt("42px")`

5️⃣ **Q:** How do you parse `"3.14abc"` into 3.14?
**A:** `parseFloat("3.14abc")`

6️⃣ **Q:** How do you get the length of a string?
**A:** `.length`: `"hello".length // 5`

7️⃣ **Q:** How do you split `"a,b,c"` into an array?
**A:** `"a,b,c".split(",") // ["a", "b", "c"]`

8️⃣ **Q:** How do you make a string uppercase?
**A:** `.toUpperCase()`

9️⃣ **Q:** How do you make a string lowercase?
**A:** `.toLowerCase()`

🔟 **Q:** How do you check if `"hello world"` includes `"world"`?
**A:** `"hello world".includes("world") // true`

1️⃣1️⃣ **Q:** How do you find the index of `"cat"` in `"black cat"`?
**A:** `"black cat".indexOf("cat") // 6`

1️⃣2️⃣ **Q:** How do you remove whitespace around `" neat "`?
**A:** `" neat ".trim() // "neat"`

1️⃣3️⃣ **Q:** How do you replace `"red apple"` with `"green apple"`?
**A:** `"red apple".replace("red", "green")`

1️⃣4️⃣ **Q:** How do you replace all `"ha"` with `"ho"` in `"ha ha ha"`?
**A:** `"ha ha ha".replaceAll("ha", "ho")`

1️⃣5️⃣ **Q:** How do you check if `"banana"` starts with `"ban"`?
**A:** `"banana".startsWith("ban")`

1️⃣6️⃣ **Q:** How do you check if `"carrot"` ends with `"rot"`?
**A:** `"carrot".endsWith("rot")`

1️⃣7️⃣ **Q:** How do you extract `"pine"` from `"pineapple"`?
**A:** `"pineapple".slice(0,4) // "pine"`

1️⃣8️⃣ **Q:** What does `null` mean in JS?
**A:** An intentional absence of value.

1️⃣9️⃣ **Q:** What does `undefined` mean in JS?
**A:** Variable declared but not assigned a value.

2️⃣0️⃣ **Q:** What’s a `Symbol`?
**A:** A unique, immutable value often used as object keys.

2️⃣1️⃣ **Q:** How do you create a BigInt literal?
**A:** By adding `n`: `12345678901234567890n`

---

### 📌 Booleans

2️⃣2️⃣ **Q:** How do you negate a boolean?
**A:** Use `!`: `!true // false`

2️⃣3️⃣ **Q:** How do you do an AND operation?
**A:** `true && false // false`

2️⃣4️⃣ **Q:** How do you do an OR operation?
**A:** `false || true // true`

2️⃣5️⃣ **Q:** How do you convert a boolean to a string?
**A:** `true.toString() // "true"`

---

### 📌 Arrays

2️⃣6️⃣ **Q:** How do you add to the end of an array?
**A:** `push()`

2️⃣7️⃣ **Q:** How do you remove the last item from an array?
**A:** `pop()`

2️⃣8️⃣ **Q:** How do you add to the start of an array?
**A:** `unshift()`

2️⃣9️⃣ **Q:** How do you remove the first item of an array?
**A:** `shift()`

3️⃣0️⃣ **Q:** How do you check the length of an array?
**A:** `.length`

3️⃣1️⃣ **Q:** How do you map `[1,2,3]` to `[2,4,6]`?
**A:** `[1,2,3].map(x => x*2)`

3️⃣2️⃣ **Q:** How do you filter `[1,2,3,4]` for even numbers?
**A:** `.filter(x => x%2===0)`

3️⃣3️⃣ **Q:** How do you reduce `[1,2,3]` to their sum?
**A:** `.reduce((a,c)=>a+c,0)`

3️⃣4️⃣ **Q:** How do you find the index of `5` in `[3,5,7]`?
**A:** `.indexOf(5)`

3️⃣5️⃣ **Q:** How do you check if `[1,2,3]` includes `2`?
**A:** `.includes(2)`

3️⃣6️⃣ **Q:** How do you get `[2,3]` from `[1,2,3,4]`?
**A:** `.slice(1,3)`

3️⃣7️⃣ **Q:** How do you remove and replace elements in an array?
**A:** `.splice()`

3️⃣8️⃣ **Q:** How do you merge two arrays?
**A:** `.concat()`

3️⃣9️⃣ **Q:** How do you check if a value is an array?
**A:** `Array.isArray()`

4️⃣0️⃣ **Q:** How do you loop over an array with a classic for-loop?
**A:** `for(let i=0; i<arr.length; i++)`

4️⃣1️⃣ **Q:** How do you loop over values of an array?
**A:** `for(let item of arr)`

4️⃣2️⃣ **Q:** How do you run a function for each item in an array?
**A:** `.forEach(callback)`

---

### 📌 Objects

4️⃣3️⃣ **Q:** How do you access property `name` of object `person`?
**A:** `person.name` or `person["name"]`

4️⃣4️⃣ **Q:** How do you loop over object keys?
**A:** `for(let key in obj)`

4️⃣5️⃣ **Q:** How do you get an array of object keys?
**A:** `Object.keys(obj)`

4️⃣6️⃣ **Q:** How do you get an array of object values?
**A:** `Object.values(obj)`

4️⃣7️⃣ **Q:** How do you get an array of key-value pairs?
**A:** `Object.entries(obj)`

4️⃣8️⃣ **Q:** How do you copy properties from one object to another?
**A:** `Object.assign(target, source)`

---

### 📌 Set

4️⃣9️⃣ **Q:** How do you create a new Set?
**A:** `new Set()`

5️⃣0️⃣ **Q:** How do you add `5` to a Set?
**A:** `.add(5)`

5️⃣1️⃣ **Q:** How do you delete `5` from a Set?
**A:** `.delete(5)`

5️⃣2️⃣ **Q:** How do you check if a Set has `5`?
**A:** `.has(5)`

5️⃣3️⃣ **Q:** How do you clear all items from a Set?
**A:** `.clear()`

5️⃣4️⃣ **Q:** How do you convert a Set to an array?
**A:** `Array.from(set)` or `[...set]`

5️⃣5️⃣ **Q:** How do you get the size of a Set?
**A:** `.size`

---

### 📌 Map

5️⃣6️⃣ **Q:** How do you create a new Map?
**A:** `new Map()`

5️⃣7️⃣ **Q:** How do you set key `"a"` to value `1`?
**A:** `.set("a", 1)`

5️⃣8️⃣ **Q:** How do you get the value of key `"a"`?
**A:** `.get("a")`

5️⃣9️⃣ **Q:** How do you check if key `"a"` exists?
**A:** `.has("a")`

6️⃣0️⃣ **Q:** How do you delete key `"a"`?
**A:** `.delete("a")`

6️⃣1️⃣ **Q:** How do you clear all entries in a Map?
**A:** `.clear()`

6️⃣2️⃣ **Q:** How do you get the number of entries in a Map?
**A:** `.size`

6️⃣3️⃣ **Q:** How do you get an iterator of key-value pairs in a Map?
**A:** `.entries()`

---

### 📌 Functions

6️⃣4️⃣ **Q:** How do you define a function declaration?
**A:** `function greet() {}`

6️⃣5️⃣ **Q:** How do you write an arrow function adding two numbers?
**A:** `(a, b) => a + b`

6️⃣6️⃣ **Q:** What is the `.name` property of a function?
**A:** The name of the function.

6️⃣7️⃣ **Q:** Do arrow functions have their own `this`?
**A:** No.

---

### 📌 Rest, Spread & Destructuring

6️⃣8️⃣ **Q:** How do you collect remaining arguments?
**A:** `function fn(...args) {}`

6️⃣9️⃣ **Q:** How do you spread `[1,2,3]` into another array?
**A:** `[...array]`

7️⃣0️⃣ **Q:** How do you destructure the first and second items of an array?
**A:** `let [a, b] = array;`

7️⃣1️⃣ **Q:** How do you destructure object properties into variables?
**A:** `let {x, y} = obj;`

---

### 📌 Hoisting

7️⃣2️⃣ **Q:** What happens when you access a `var` before declaration?
**A:** Returns `undefined`.

7️⃣3️⃣ **Q:** Can you access `let`/`const` before they’re declared?
**A:** No; ReferenceError due to temporal dead zone.

7️⃣4️⃣ **Q:** Are function declarations hoisted?
**A:** Yes.

---

### 📌 Closures

7️⃣5️⃣ **Q:** What is a closure?
**A:** A function remembering its outer scope.

7️⃣6️⃣ **Q:** Give an example of a closure.

```js
function outer() {
  let hidden = 42;
  return () => hidden;
}
let inner = outer();
console.log(inner()); // 42
```

---

### 📌 Async/Callbacks/Promises

7️⃣7️⃣ **Q:** What is a callback?
**A:** A function passed to another function to execute later.

7️⃣8️⃣ **Q:** How do you create a Promise?
**A:** `new Promise((resolve, reject) => {})`

7️⃣9️⃣ **Q:** How do you handle Promise results?
**A:** `.then()`

8️⃣0️⃣ **Q:** How do you handle Promise errors?
**A:** `.catch()`

8️⃣1️⃣ **Q:** How do you write an async function?
**A:** `async function myFunc() {}`

8️⃣2️⃣ **Q:** How do you wait for a Promise inside async?
**A:** `await promise;`

---

### 📌 Modules

8️⃣3️⃣ **Q:** How do you export a named function?
**A:** `export function greet() {}`

8️⃣4️⃣ **Q:** How do you export a default function?
**A:** `export default function main() {}`

8️⃣5️⃣ **Q:** How do you import named exports?
**A:** `import {greet} from "./file.js";`

8️⃣6️⃣ **Q:** How do you import a default export?
**A:** `import main from "./file.js";`

---

### 📌 Classes

8️⃣7️⃣ **Q:** How do you create a class named `Dog`?
**A:** `class Dog {}`

8️⃣8️⃣ **Q:** How do you create a constructor inside a class?
**A:** `constructor() {}`

8️⃣9️⃣ **Q:** How do you extend a class?
**A:** `class Poodle extends Dog {}`

9️⃣0️⃣ **Q:** How do you call the parent constructor?
**A:** `super()`

9️⃣1️⃣ **Q:** How do you add a method to a class?
**A:** Inside the class: `bark() {}`

---

### 📌 Event Loop

9️⃣2️⃣ **Q:** What runs first, microtasks or macrotasks?
**A:** Microtasks.

9️⃣3️⃣ **Q:** Is `setTimeout` a macro task?
**A:** Yes.

9️⃣4️⃣ **Q:** Is Promise `.then()` a microtask?
**A:** Yes.

---

### 📌 Prototypal Inheritance

9️⃣5️⃣ **Q:** How do you create an object inheriting from another?
**A:** `Object.create(proto)`

9️⃣6️⃣ **Q:** How do you add a method to a constructor's prototype?
**A:** `Constructor.prototype.method = function() {};`

9️⃣7️⃣ **Q:** How do you call a method from the prototype chain?
**A:** Directly: `obj.method()`

---

### 📌 General/Conceptual

9️⃣8️⃣ **Q:** What’s the difference between `null` and `undefined`?
**A:** `null` is intentional absence; `undefined` means uninitialized.

9️⃣9️⃣ **Q:** What is the spread operator?
**A:** Expands elements of iterable or properties of object.

🔟0️⃣0️⃣ **Q:** What is destructuring useful for?
**A:** Quickly unpacking values from arrays or objects.

---

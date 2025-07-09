## 🚀 PRIMITIVES

---

### ✅ Number

**Definition:** Numeric data type for integers and decimals.

#### Properties & Methods

🔹 `toString()`
→ Converts number to string.

```js
let score = 100;
console.log(score.toString()); // "100" (you can't email numbers!)
```

🔹 `toFixed(n)`
→ Rounds to `n` decimal places, returns string.

```js
let pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14" (pie for two)
```

#### Global functions

🔹 `isNaN(value)`
→ Checks if value is NaN (Not a Number).

```js
console.log(isNaN("hello")); // true (can't do math with "hello")
```

🔹 `parseInt(str)`
→ Parses integer from string.

```js
console.log(parseInt("42px")); // 42 (CSS pixel value parsed!)
```

🔹 `parseFloat(str)`
→ Parses floating-point number from string.

```js
console.log(parseFloat("3.14pi")); // 3.14
```

---

### ✅ String

**Definition:** Ordered sequence of characters.

#### Properties

🔹 `length`
→ Number of characters.

```js
let word = "banana";
console.log(word.length); // 6 (number of letters)
```

#### Methods

🔹 `split(separator)`
→ Breaks string into array.

```js
let csv = "apple,orange,banana";
console.log(csv.split(",")); // ["apple", "orange", "banana"]
```

🔹 `toUpperCase()`
→ Converts to uppercase.

```js
let shout = "hello";
console.log(shout.toUpperCase()); // "HELLO"
```

🔹 `toLowerCase()`
→ Converts to lowercase.

```js
let whisper = "LOUD";
console.log(whisper.toLowerCase()); // "loud"
```

🔹 `indexOf(substring)`
→ Returns position of first match, or -1.

```js
let str = "I love JS!";
console.log(str.indexOf("love")); // 2
```

🔹 `includes(substring)`
→ Checks if string contains substring.

```js
console.log("rainbow".includes("bow")); // true
```

🔹 `slice(start, end)`
→ Extracts part of string.

```js
let fruit = "strawberry";
console.log(fruit.slice(0, 5)); // "straw"
```

🔹 `substr(start, length)`
→ Extracts `length` characters from `start`.

```js
console.log("pineapple".substr(4, 3)); // "app"
```

🔹 `substring(start, end)`
→ Like `slice()`, but no negatives.

```js
console.log("elephant".substring(0, 3)); // "ele"
```

🔹 `startsWith(substring)`
→ Checks if string starts with substring.

```js
console.log("javascript".startsWith("java")); // true
```

🔹 `endsWith(substring)`
→ Checks if string ends with substring.

```js
console.log("sunshine".endsWith("shine")); // true
```

🔹 `trim()`
→ Removes leading/trailing whitespace.

```js
let messy = "  neat  ";
console.log(messy.trim()); // "neat"
```

🔹 `replace(search, replace)`
→ Replaces first occurrence.

```js
let mood = "sad day";
console.log(mood.replace("sad", "happy")); // "happy day"
```

🔹 `replaceAll(search, replace)`
→ Replaces all occurrences.

```js
let text = "ha ha ha!";
console.log(text.replaceAll("ha", "ho")); // "ho ho ho!"
```

---

### ✅ Boolean

**Definition:** Represents true/false.

#### Operators

🔹 `&&` (AND)
→ Both sides must be true.

```js
console.log(true && false); // false
```

🔹 `||` (OR)
→ At least one side true.

```js
console.log(false || true); // true
```

🔹 `!` (NOT)
→ Inverts boolean.

```js
console.log(!true); // false
```

#### Methods

🔹 `toString()`
→ Converts boolean to string.

```js
console.log(true.toString()); // "true"
```

---

### ✅ null & undefined

🔹 `null`
→ Intentional absence of value.

```js
let treasure = null; // pirate couldn't find it
```

🔹 `undefined`
→ Variable declared but no value assigned.

```js
let x;
console.log(x); // undefined
```

---

### ✅ Symbol

**Definition:** Creates unique identifiers.

```js
let idA = Symbol("id");
let idB = Symbol("id");
console.log(idA === idB); // false
```

---

### ✅ BigInt

**Definition:** Represents integers beyond safe limit.

```js
let big = 9007199254740991n; // Number.MAX_SAFE_INTEGER
console.log(big + 1n); // 9007199254740992n
```

---

## 🎨 ARRAYS

**Definition:** Ordered lists.

#### Properties

🔹 `length`
→ Number of elements.

```js
let animals = ["dog", "cat"];
console.log(animals.length); // 2
```

#### Methods

🔹 `push(value)`
→ Add to end.

```js
animals.push("fox");
console.log(animals); // ["dog", "cat", "fox"]
```

🔹 `pop()`
→ Remove last element.

```js
animals.pop();
console.log(animals); // ["dog", "cat"]
```

🔹 `shift()`
→ Remove first element.

```js
let nums = [1, 2, 3];
nums.shift();
console.log(nums); // [2,3]
```

🔹 `unshift(value)`
→ Add to start.

```js
nums.unshift(0);
console.log(nums); // [0,2,3]
```

🔹 `map(callback)`
→ Creates new array with callback results.

```js
let squared = [1, 2, 3].map((x) => x * x);
console.log(squared); // [1,4,9]
```

🔹 `filter(callback)`
→ Filters elements by condition.

```js
let even = [1, 2, 3, 4].filter((x) => x % 2 === 0);
console.log(even); // [2,4]
```

🔹 `reduce(callback, initial)`
→ Reduces array to single value.

```js
let sum = [1, 2, 3].reduce((a, c) => a + c, 0);
console.log(sum); // 6
```

🔹 `indexOf(value)`
→ Finds index of value.

```js
console.log(["a", "b", "c"].indexOf("b")); // 1
```

🔹 `includes(value)`
→ Checks if value exists.

```js
console.log(["a", "b"].includes("c")); // false
```

🔹 `slice(start, end)`
→ Returns part of array.

```js
let arr = [0, 1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [1,2]
```

🔹 `splice(start, deleteCount, ...items)`
→ Modify array by removing/replacing/adding.

```js
arr.splice(2, 1, "X");
console.log(arr); // [0,1,"X",3,4]
```

🔹 `concat(array2)`
→ Joins arrays.

```js
let combined = [1, 2].concat([3, 4]);
console.log(combined); // [1,2,3,4]
```

🔹 `isArray(value)`
→ Checks if value is array.

```js
console.log(Array.isArray([1, 2])); // true
```

#### Loops

🔹 `for (let i=0; i< arr.length; i++)`
→ Classic loop.
🔹 `for (let el of arr)`
→ Loop over values.
🔹 `arr.forEach(callback)`
→ Runs function for each element.

---

## 🗂️ OBJECTS

**Definition:** Key-value pairs.

#### Notations

🔹 Dot notation

```js
let hero = { name: "Ironman" };
console.log(hero.name);
```

🔹 Bracket notation

```js
let prop = "name";
console.log(hero[prop]);
```

#### Loops

🔹 `for...in`
→ Loops over keys.

```js
for (let key in hero) console.log(key, hero[key]);
```

🔹 `Object.keys(obj)`
→ Array of keys.

```js
console.log(Object.keys(hero)); // ["name"]
```

🔹 `Object.values(obj)`
→ Array of values.

```js
console.log(Object.values(hero)); // ["Ironman"]
```

🔹 `Object.entries(obj)`
→ Array of \[key,value] pairs.

```js
console.log(Object.entries(hero)); // [["name","Ironman"]]
```

🔹 `Object.assign(target, source)`
→ Copies properties.

```js
let robot = Object.assign({}, hero);
console.log(robot);
```

---

## 🔢 SET

**Definition:** Unique values collection.

#### Properties

🔹 `size`
→ Number of elements.

```js
let s = new Set([1, 1, 2]);
console.log(s.size); // 2
```

#### Methods

🔹 `add(value)`
→ Adds unique value.

```js
s.add(3);
console.log([...s]); // [1,2,3]
```

🔹 `delete(value)`
→ Removes value.

```js
s.delete(2);
console.log([...s]); // [1,3]
```

🔹 `has(value)`
→ Checks if value exists.

```js
console.log(s.has(3)); // true
```

🔹 `clear()`
→ Removes all.

```js
s.clear();
console.log(s.size); // 0
```

🔹 `Array.from(set)`
→ Convert to array.

```js
let setArr = Array.from(new Set([7, 8, 9]));
console.log(setArr); // [7,8,9]
```

---

## 🗺️ MAP

**Definition:** Key-value pairs with any type of key.

#### Properties

🔹 `size`
→ Number of entries.

#### Methods

🔹 `set(key, value)`
→ Adds entry.

```js
let m = new Map();
m.set("food", "pizza");
```

🔹 `get(key)`
→ Gets value.

```js
console.log(m.get("food")); // pizza
```

🔹 `delete(key)`
→ Removes entry.

```js
m.delete("food");
```

🔹 `has(key)`
→ Checks if key exists.

```js
console.log(m.has("food")); // false
```

🔹 `clear()`
→ Removes all entries.

🔹 `entries()`
→ Returns iterator of \[key,value].

---

## 🎯 FUNCTIONS

**Definition:** Reusable block of code.

#### Properties

🔹 `.name`
→ Name of function.

```js
function dance() {}
console.log(dance.name); // "dance"
```

#### Arrow functions

**Definition:** Shorter syntax without `this`.

```js
let add = (a, b) => a + b;
```

---

## ⚡ CONTROL FLOW

🔹 `switch`
→ Multi-case conditional.

```js
let color = "blue";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "blue":
    console.log("go ocean!");
    break;
  default:
    console.log("who knows?");
}
```

🔹 `while`
→ Loop until condition false.

```js
let i = 0;
while (i < 2) {
  console.log(i++);
}
```

---

## 🥪 REST & SPREAD

### REST

**Definition:** Collects remaining arguments into an array in a function.

```js
function party(host, ...guests) {
  console.log(`${host} invited: ${guests.join(", ")}`);
}
party("Alice", "Bob", "Charlie");
// "Alice invited: Bob, Charlie"
```

---

### SPREAD

**Definition:** Expands arrays or objects into individual elements.

```js
let numbers = [4, 5, 6];
let more = [1, 2, 3, ...numbers];
console.log(more); // [1,2,3,4,5,6]
```

---

## ✂️ DESTRUCTURING

**Definition:** Extracts values from arrays or objects into variables.

🔹 Array destructuring

```js
let [first, second] = ["Tom", "Jerry"];
console.log(first, second); // "Tom Jerry"
```

🔹 Object destructuring

```js
let robot = { model: "RX-78", power: "9000" };
let { model, power } = robot;
console.log(model, power); // "RX-78 9000"
```

---

## 🚨 HOISTING

**Definition:** Variable and function declarations are moved to the top of their scope before code runs.

🔹 `var` → hoisted as `undefined`.

```js
console.log(food); // undefined
var food = "tacos";
```

🔹 `let`/`const` → hoisted but in temporal dead zone.

```js
console.log(drink); // ReferenceError
let drink = "tea";
```

🔹 Functions are fully hoisted:

```js
hello();
function hello() {
  console.log("Hi!");
} // works fine
```

---

## 🔒 CLOSURES

**Definition:** A function remembers its outer scope even after the outer function finishes.

```js
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Counter: ${count}`);
  };
}
let counter = makeCounter();
counter(); // Counter: 1
counter(); // Counter: 2
```

---

## 🕰️ ASYNC & SYNC

🔹 **Synchronous code:** Runs line by line.

```js
console.log("A");
console.log("B"); // runs immediately after A
```

🔹 **Asynchronous code:** Doesn’t block the next line, uses callbacks, promises, or async/await.

```js
console.log("Start");
setTimeout(() => console.log("After 1 second"), 1000);
console.log("End"); // runs before setTimeout finishes
```

---

## 📞 CALLBACKS

**Definition:** A function passed to another function to run later.

```js
function cook(food, callback) {
  console.log(`Cooking ${food}...`);
  callback();
}
cook("pasta", () => console.log("Dinner is ready!"));
```

---

## 🟢 PROMISES

**Definition:** Represents the result of an asynchronous operation.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then((result) => console.log(result)); // Done!
```

---

## ✨ ASYNC/AWAIT

**Definition:** Syntactic sugar over Promises, lets you write async code like synchronous.

```js
async function getJoke() {
  let res = await fetch("https://api.chucknorris.io/jokes/random");
  let joke = await res.json();
  console.log(joke.value);
}
getJoke();
```

---

## 📦 MODULES

**Definition:** Split code into reusable files.

🔹 Export named functions:

```js
// utils.js
export function greet() {
  return "Hello!";
}
export const PI = 3.14;
```

🔹 Import named exports:

```js
import { greet, PI } from "./utils.js";
console.log(greet(), PI);
```

🔹 Default export:

```js
// math.js
export default function add(a, b) {
  return a + b;
}

// main.js
import add from "./math.js";
console.log(add(2, 3)); // 5
```

---

## 🏗️ CLASSES

**Definition:** Blueprint for creating objects with shared properties/methods.

```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} is driving 🚗`);
  }
}
let bmw = new Car("BMW");
bmw.drive(); // "BMW is driving 🚗"
```

🔹 Inheritance with `extends`

```js
class ElectricCar extends Car {
  charge() {
    console.log(`${this.brand} is charging ⚡`);
  }
}
let tesla = new ElectricCar("Tesla");
tesla.charge(); // Tesla is charging ⚡
tesla.drive(); // Tesla is driving 🚗
```

---

## 🔄 EVENT LOOP

**Definition:** JS engine’s mechanism for handling synchronous and asynchronous code.

- **Call stack:** Runs sync code line by line.
- **Microtasks queue:** Promises’ `.then()` callbacks.
- **Macrotasks queue:** `setTimeout`, `setInterval`, etc.

🟢 Example:

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Order: 1, 4, 3, 2
```

---

## 🧬 PROTOTYPAL INHERITANCE

**Definition:** Objects inherit properties and methods from other objects via prototype chain.

```js
let animal = { eats: true };
let rabbit = Object.create(animal);
rabbit.hops = true;
console.log(rabbit.eats); // true (inherited from animal)
```

🔹 Add method to prototype:

```js
function Bird() {}
Bird.prototype.fly = function () {
  console.log("Flying 🕊️");
};
let sparrow = new Bird();
sparrow.fly(); // Flying 🕊️
```

---

## **1. Primitives vs. Non-Primitives**

### **Primitives (Immutable - Stored by Value)**

1. **`number`** – Numeric values (e.g., `5`, `3.14`).
2. **`string`** – Text (e.g., `"hello"`).
3. **`boolean`** – `true` or `false`.
4. **`null`** – Intentional absence of value.
5. **`undefined`** – Variable declared but not assigned.
6. **`symbol`** – Unique and immutable (e.g., `Symbol('id')`).
7. **`bigint`** – Large integers (e.g., `123n`).

### **Non-Primitives (Mutable - Stored by Reference)**

1. **`array`** – Ordered list (e.g., `[1, 2, 3]`).
2. **`object`** – Key-value pairs (e.g., `{ name: "John" }`).
3. **`set`** – Unique values (e.g., `new Set([1, 2, 2])`).
4. **`map`** – Key-value pairs (e.g., `new Map([['a', 1]])`).
5. **`function`** – Reusable code blocks (e.g., `function foo() {}`).

---

## **2. Number**

### **Operations**

```javascript
let a = 5,
  b = 2;
console.log(a + b); // 7 (Addition)
console.log(a - b); // 3 (Subtraction)
console.log(a * b); // 10 (Multiplication)
console.log(a / b); // 2.5 (Division)
console.log(a % b); // 1 (Modulus)
```

### **Methods**

```javascript
let num = 10.567;
console.log(num.toString()); // "10.567"
console.log(num.toFixed(2)); // "10.57"
```

### **Global Functions**

```javascript
console.log(isNaN("hello")); // true (Not a Number)
console.log(parseInt("10.5")); // 10 (Integer)
console.log(parseFloat("10.5")); // 10.5 (Float)
```

---

## **3. String**

### **Concatenation**

```javascript
let str1 = "Hello",
  str2 = "World";
console.log(str1 + " " + str2); // "Hello World"
console.log(`${str1} ${str2}`); // Template Literals
```

### **Properties & Methods**

```javascript
let str = "JavaScript";
console.log(str.length); // 10 (Length)
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"
console.log(str.indexOf("Script")); // 4 (Position)
console.log(str.includes("Java")); // true
console.log(str.slice(0, 4)); // "Java"
console.log(str.replace("Java", "Type")); // "TypeScript"
console.log("  hello  ".trim()); // "hello" (Removes whitespace)
```

---

## **4. Boolean**

### **Logical Operators**

```javascript
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)
```

### **Methods**

```javascript
let bool = true;
console.log(bool.toString()); // "true"
```

---

## **5. Array**

### **Looping**

```javascript
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) console.log(arr[i]); // 1, 2, 3
for (let num of arr) console.log(num); // 1, 2, 3
arr.forEach((num) => console.log(num)); // 1, 2, 3
```

### **Properties & Methods**

```javascript
let arr = [1, 2];
console.log(arr.length); // 2
arr.push(3); // [1, 2, 3] (Adds at end)
arr.pop(); // [1, 2] (Removes from end)
arr.unshift(0); // [0, 1, 2] (Adds at start)
arr.shift(); // [1, 2] (Removes from start)
console.log(arr.map((x) => x * 2)); // [2, 4] (Transforms)
console.log(arr.filter((x) => x > 1)); // [2] (Filters)
console.log(arr.reduce((sum, x) => sum + x, 0)); // 3 (Sums up)
console.log(arr.indexOf(2)); // 1 (Position)
console.log(arr.includes(3)); // false
console.log(Array.isArray(arr)); // true
```

---

## **6. Object**

### **Looping**

```javascript
let obj = { a: 1, b: 2 };
for (let key in obj) console.log(key, obj[key]); // "a 1", "b 2"
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
```

### **Notations**

```javascript
obj.a = 10; // Dot notation
obj["b"] = 20; // Bracket notation (useful for dynamic keys)
```

### **Methods**

```javascript
console.log(Object.keys(obj)); // ["a", "b"]
console.log(Object.values(obj)); // [10, 20]
let newObj = Object.assign({}, obj, { c: 30 }); // Merges objects
```

---

## **7. Set (Unique Values)**

### **Methods**

```javascript
let set = new Set([1, 2, 2, 3]);
console.log(set.size); // 3 (Ignores duplicates)
set.add(4); // {1, 2, 3, 4}
set.delete(1); // {2, 3, 4}
console.log(set.has(2)); // true
set.clear(); // {}
let arrFromSet = [...set]; // Convert to array
```

---

## **8. Map (Key-Value Pairs)**

### **Methods**

```javascript
let map = new Map();
map.set("a", 1); // Map { "a" => 1 }
console.log(map.get("a")); // 1
map.delete("a"); // Removes key
console.log(map.has("a")); // false
console.log(map.size); // 0
map.clear(); // Empties map
```

---

## **9. Functions**

### **Arrow Functions**

```javascript
const add = (a, b) => a + b; // Implicit return
const greet = (name) => `Hello ${name}`;
console.log(add(2, 3)); // 5
```

### **Default Parameters**

```javascript
function greet(name = "Guest") {
  return `Hello ${name}`;
}
console.log(greet()); // "Hello Guest"
```

---

## **10. REST, SPREAD, Destructuring**

### **REST (`...`) - Collects remaining elements**

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

### **SPREAD (`...`) - Expands elements**

```javascript
let arr1 = [1, 2],
  arr2 = [3, 4];
let merged = [...arr1, ...arr2]; // [1, 2, 3, 4]
```

### **Destructuring**

```javascript
let [a, b] = [1, 2]; // a=1, b=2
let { name, age } = { name: "John", age: 30 };
```

---

## **11. Hoisting**

- Variables (`var`) and functions are hoisted (moved to top).
- `let` and `const` are not hoisted (Temporal Dead Zone).

```javascript
console.log(x); // undefined (hoisted)
var x = 5;
```

---

## **12. Closures**

A function that remembers its outer variables.

```javascript
function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // Remembers x
  };
}
let innerFn = outer();
innerFn(); // 10
```

---

## **13. Async vs Sync**

- **Sync**: Code runs in order.
- **Async**: Non-blocking (callbacks, promises, async/await).

### **Promises**

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
promise.then((res) => console.log(res)); // "Done"
```

### **Async/Await**

```javascript
async function fetchData() {
  let res = await fetch("https://api.example.com");
  let data = await res.json();
  console.log(data);
}
```

---

## **14. Modules**

### **Export & Import**

```javascript
// math.js
export const add = (a, b) => a + b;
export default function sub(a, b) {
  return a - b;
}

// app.js
import { add } from "./math.js";
import sub from "./math.js";
```

---

## **15. Classes**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
let john = new Person("John");
john.greet(); // "Hello John"
```

---

## **16. Event Loop**

- JavaScript is single-threaded.
- Callbacks, promises, and async tasks go to the **callback queue**.
- The **event loop** checks the **call stack** and executes queued tasks.

---

## **17. Prototypal Inheritance**

- Objects inherit from prototypes.

```javascript
let animal = { eats: true };
let rabbit = { jumps: true };
rabbit.__proto__ = animal; // rabbit inherits from animal
console.log(rabbit.eats); // true
```

---

### **Final Tips**

- **`switch`** for multiple conditions.
- **`while`** and **`do-while`** for loops.
- **`try-catch`** for error handling.

/* 
1. setTimeout
2. setinterval
3. async
4. await
5. eventloop
6. call()
7. apply()
8. bind()
 */

/*
Here are some key JavaScript concepts that are fundamental to understanding the language and its asynchronous behavior:

1. **setTimeout**: A built-in JavaScript function that executes a function or code snippet after a specified delay in milliseconds.

2. **setInterval**: A built-in function that repeatedly executes a function or code snippet at specified intervals (in milliseconds) until it is stopped.

3. **async**: A keyword used to declare an asynchronous function. It ensures that the function returns a Promise and allows the use of the `await` keyword within it.

4. **await**: Used only inside async functions, `await` pauses the execution of the async function until the Promise is resolved or rejected.

5. **Event Loop**: The mechanism in JavaScript that handles asynchronous events and non-blocking operations by continuously checking the message queue and executing any pending callbacks.

6. **Callback Function**: A function passed as an argument to another function, which is then executed inside that function after some operation completes.

7. **Promise**: An object that represents the eventual completion (or failure) of an asynchronous operation. It has states: `pending`, `fulfilled`, and `rejected`.

8. **then()**: A method of Promises used to specify what to do once the Promise is fulfilled.

9. **catch()**: A method of Promises that specifies what to do if the Promise is rejected.

10. **finally()**: A method of Promises that executes code regardless of whether the Promise is fulfilled or rejected.

11. **Closure**: A feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing.

12. **Scope**: The accessibility of variables, objects, and functions in different parts of the code. JavaScript has function scope and block scope (with `let` and `const`).

13. **Hoisting**: JavaScript's default behavior of moving declarations to the top of their scope before execution.

14. **IIFE (Immediately Invoked Function Expression)**: A function that runs as soon as it is defined. It’s written as `(function() {  })();`

15. **Prototype**: Each JavaScript object has a prototype, which is also an object. All JavaScript objects inherit properties and methods from their prototype.

16. **this**: A keyword that refers to the current object in the context of which the function is executed. `this` value is dynamic and can change depending on how the function is called.

17. **Arrow Functions**: Shorter syntax for writing functions, and they do not have their own `this` context, which makes them useful in certain situations.

18. **Destructuring**: A syntax for extracting values from arrays or properties from objects into distinct variables.

19. **Spread Operator (`...`)**: Allows an iterable such as an array or string to be expanded in places where multiple elements or arguments are expected.

20. **Rest Parameters**: Syntax that allows a function to accept an indefinite number of arguments as an array (`function(...args) {}`).

21. **Modules**: JavaScript files that export functions, objects, or values for use in other files, usually with `export` and `import` keywords.

22. **Classes**: Introduced in ES6, classes are a template for creating objects and encapsulating data and behavior.

23. **Constructor**: A special method of a class for creating and initializing objects created with that class.

24. **Inheritance**: A mechanism that allows one class to inherit properties and methods from another.

25. **JSON (JavaScript Object Notation)**: A lightweight data format used for storing and transporting data, often in client-server communications.

26. **Map, Filter, Reduce**: Higher-order functions for working with arrays. `map()` transforms each element, `filter()` creates a new array with elements that pass a condition, and `reduce()` applies a function against an accumulator to reduce the array to a single value.

27. **Template Literals**: String literals that allow embedded expressions, denoted with backticks (`` ` ``), e.g., `` `Hello ${name}` ``.

28. **Type Coercion**: The automatic or implicit conversion of values from one data type to another, like converting a string to a number in certain operations.

29. **Symbol**: A primitive data type introduced in ES6, used to create unique identifiers for object properties.

30. **WeakMap and WeakSet**: Collections that store only objects as keys (for WeakMap) or values (for WeakSet) and allow objects to be garbage-collected if there are no other references to them.

These concepts cover both core JavaScript mechanics and advanced asynchronous handling, helping build a strong foundation in JavaScript. 
 */
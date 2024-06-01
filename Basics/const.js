const pampa = 'pampapati';
const x = 123;
// 1. Cannot be reassigned.
// 2. It has Block Scope
// 3. It can be assigned to the variable on the declaration line.
// 4. It’s a Primitive value.
// 5. The property of a const object can be changed but it cannot be changed to a reference to the new object
// 6. The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
// 7. Re-declaring of a const variable inside different block scopes is allowed.
// 8. Cannot be Hoisted.
// 9. Creates only read-only references to value.

//1.

 const y = 20;
 const n = 45;

 console.log('ui', y)

 // 2. 
 {
    const ri = 21;
    console.log(ri);
 }
// console.log('pa', ri)// not definied

// 3.
const z = 10;
console.log(z);

// 4
 const name = 'John';

 // 5
 const rig = {name: "john"};
 rig.name = 'pampapathi',
 console.log(rig);
//  rig = {name: 'Bob'};
//  console.log('pampapa',rig);

// 6





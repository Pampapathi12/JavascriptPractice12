

// ### Code:
// ```javascript
// for(let i = 0; i < 11; i++) {
//     if(i % 2 == 0) continue;
//     console.log(i);
// }
// ```

// ### Step-by-Step Execution:

// 1. **Initialization**:
//    - `let i = 0;`: The loop variable `i` is initialized to 0.

// 2. **First Iteration** (`i = 0`):
//    - `i < 11`: The condition `0 < 11` is true, so the loop starts.
//    - `if (i % 2 == 0)`: Checks if `0 % 2 == 0`, which is true.
//    - `continue;`: The `continue` statement is executed, skipping the rest of the loop body and moving to the next iteration.
//    - The value `0` is not printed.

// 3. **Second Iteration** (`i = 1`):
//    - `i++`: The loop variable `i` is incremented to 1.
//    - `i < 11`: The condition `1 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `1 % 2 == 0`, which is false.
//    - `console.log(i);`: The value `1` is printed.

// 4. **Third Iteration** (`i = 2`):
//    - `i++`: The loop variable `i` is incremented to 2.
//    - `i < 11`: The condition `2 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `2 % 2 == 0`, which is true.
//    - `continue;`: The `continue` statement is executed, skipping the rest of the loop body and moving to the next iteration.
//    - The value `2` is not printed.

// 5. **Fourth Iteration** (`i = 3`):
//    - `i++`: The loop variable `i` is incremented to 3.
//    - `i < 11`: The condition `3 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `3 % 2 == 0`, which is false.
//    - `console.log(i);`: The value `3` is printed.

// 6. **Fifth Iteration** (`i = 4`):
//    - `i++`: The loop variable `i` is incremented to 4.
//    - `i < 11`: The condition `4 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `4 % 2 == 0`, which is true.
//    - `continue;`: The `continue` statement is executed, skipping the rest of the loop body and moving to the next iteration.
//    - The value `4` is not printed.

// 7. **Sixth Iteration** (`i = 5`):
//    - `i++`: The loop variable `i` is incremented to 5.
//    - `i < 11`: The condition `5 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `5 % 2 == 0`, which is false.
//    - `console.log(i);`: The value `5` is printed.

// 8. **Seventh Iteration** (`i = 6`):
//    - `i++`: The loop variable `i` is incremented to 6.
//    - `i < 11`: The condition `6 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `6 % 2 == 0`, which is true.
//    - `continue;`: The `continue` statement is executed, skipping the rest of the loop body and moving to the next iteration.
//    - The value `6` is not printed.

// 9. **Eighth Iteration** (`i = 7`):
//    - `i++`: The loop variable `i` is incremented to 7.
//    - `i < 11`: The condition `7 < 11` is true, so the loop continues.
//    - `if (i % 2 == 0)`: Checks if `7 % 2 == 0`, which is false.
//    - `console.log(i);`: The value `7` is printed.

// 10. **Ninth Iteration** (`i = 8`):
//     - `i++`: The loop variable `i` is incremented to 8.
//     - `i < 11`: The condition `8 < 11` is true, so the loop continues.
//     - `if (i % 2 == 0)`: Checks if `8 % 2 == 0`, which is true.
//     - `continue;`: The `continue` statement is executed, skipping the rest of the loop body and moving to the next iteration.
//     - The value `8` is not printed.

// 11. **Tenth Iteration** (`i = 9`):
//     - `i++`: The loop variable `i` is incremented to 9.
//     - `i < 11`: The condition `9 < 11` is true, so the loop continues.
//     - `if (i % 2 == 0)`: Checks if `9 % 2 == 0`, which is false.
//     - `console.log(i);`: The value `9` is printed.

// 12. **Eleventh Iteration** (`i = 10`):
//     - `i++`: The loop variable `i` is incremented to 10.
//     - `i < 11`: The condition `10 < 11` is true, so the loop continues.
//     - `if (i % 2 == 0)`: Checks if `10 % 2 == 0`, which is true.
//     - `continue;`: The `continue` statement is executed, skipping the rest of the loop body and moving to the next iteration.
//     - The value `10` is not printed.

// 13. **Termination**:
//     - `i++`: The loop variable `i` is incremented to 11.
//     - `i < 11`: The condition `11 < 11` is false, so the loop terminates.

// ### Summary:
// - The loop starts at `i = 0` and increments `i` by 1 in each iteration.
// - The `continue` statement is used to skip printing the value when `i` is even (`i % 2 == 0`).
// - As a result, only odd values from `1` to `9` are printed.

// ### Output:
// ```
// 1
// 3
// 5
// 7
// 9
// ```

for(let i=0; i<11; i++){
    if(i % 2 == 0) continue;
    console.log(i);
}
// while loop
let i = 0;
while(i< 11){
    i++;
    if(i % 2 == 0) continue;
    console.log(i);
}
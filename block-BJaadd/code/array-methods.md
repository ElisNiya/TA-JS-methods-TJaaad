Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join` - joins / concatenates all elements in an array with a specified separator
3. `flat` - new array with subarray elements concatenated [1,2 [3,4,[5,6]]]. => [1,2,3,4,5,6]
4. `push` - pushes new element to the end of the array
5. `indexOf` - shows index of element/string
6. `lastIndexOf` - shows last index of the element
7. `includes` - checks if array includes element returns true/false
8. `reverse` - reverses array
9. `every` - checks if each element has the specified element
10. `shift` - removes first element and returns it
11. `splice`. - changes content of array by removing or replacing existing elements
12. `find` - searches and finds specified element
13. `unshift` - add to the start
14. `findIndex` - finds index
15. `filter` - filters with cb if true for each element and stores in a new array 
16. `forEach` - accepts a call back function - goes through each element like a for loop  
17. `map` - creates a new array with results of the given function on every element.  //.map(x => x * 2 )
18. `pop` - deletes and returns deleted
19. `reduce` - reduces according to the given call back function
20. `slice` - slices array from given start to end 
21. `some` - checks for at least 1 true element

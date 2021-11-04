// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
indexOf("101")
// - Find the last index of `9` in numbers
lastIndexOf("9")
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
strings = strings + "called" + "sentence"

//strings.splice(0,0,"called"))

//strings.push("called  ")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ")
// - Remove the first word in the array (strings)
strings.shift()
// - Find all the words that contain 'is' use string method 'includes'
strings.filter((string) => string.includes("is"))
// - Find all the words that contain 'is' use string method 'indexOf'

let allIs = strings.filter((string) => string.indexOf("is") !== -1);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
every((num) => num % 3 === 0)
// -  Sort Array from smallest to largest
sort((a,b) => a-b)
// - Remove the last word in strings
pop()
// - Find largest number in numbers
[...numbers]sort.((a,b) => a-b).pop();
// - Find longest string in strings
sort((a,b) => a.length-b.length).pop();
// - Find all the even numbers
filter((num) => num % 2 === 0)
// - Find all the odd numbers

// - Place a new word at the start of the array use (unshift)
unshift()
// - Make a subset of numbers array [18,9,7,11]
slice(3,7)

// - Make a subset of strings array ['a','collection']
string.slice(3,5)
// - Replace 12 & 18 with 1221 and 1881
splice(numbers.indexOf(12), 1, 1221);

numbers.map((num) => {
    if (num === 12) {
    return 1221;
    }else if( num === 18) {
    return 1881
    } else {
    return num;
    }
})
// - Replace words in strings array with the length of the word
strings.map((string) => string.length)

// - Find the sum of the length of words using above question
reduce.((acc, cv )) =>{
  acc = acc + cv;
  return acc;
}, 0); 
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
filter((customer) => customer.firstName.startsWith("J"))
// - Create new array with only first name
customers.map((customer) => customer.firstname)
// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = customers.map((customer) => `${customer.firstname} ${customer.lastname}`)
// - Sort the array created above alphabetically
fullName.sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.

let vowelCustomer = customers.filter((customer) => {
  if (customer.firstname.toLowerCase().includes("a") ||
      customer.firstname.toLowerCase().includes("i") ||
      customer.firstname.toLowerCase().includes("u") ||
      customer.firstname.toLowerCase().includes("o") ||
      customer.firstname.toLowerCase().includes("e") ||) {
      return true
   } else {
  return false
  }
} )

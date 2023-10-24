// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const myObject1 = {
  firstName: "Artur",
  lastName: "Babajanyan",
  "favorite food": "any home made meal",
  bestFriend: {
    firstName: "Vahagn",
    lastName: "Arus",
    "favorite food": "any restaurant meal"
  }
};
//console.log(myObject1);

///// OR /////

const myObject2 = {
  firstName: "Artur",
  lastName: "Babajanyan",
  "favorite food": "any home made meal"
};


bestFriend = {
  firstName: "Vahagn",
  lastName: "Arus",
  "favorite food": "any restaurant meal"
};

myObject2.bestFriend = bestFriend;

//console.log(myObject2);

// 2. console.log best friend's firstName and your favorite food
console.log(`Best friend's first name is ${myObject1.bestFriend.firstName} and my favorite food is ${myObject1["favorite food"]}.`);
console.log(`Best friend's first name is ${myObject2.bestFriend.firstName} and my favorite food is ${myObject2["favorite food"]}.`);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const tBoard = [['-',"O","-"],["-","X","O"],["X","-","X"]];
console.log(tBoard[0][0], tBoard[0][1], tBoard[0][2]);
console.log(tBoard[1][0], tBoard[1][1], tBoard[1][2]);
console.log(tBoard[2][0], tBoard[2][1], tBoard[2][2]);


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
tBoard[0][2] = "O";


// 5. Log the grid to the console.
console.log(tBoard[0][0], tBoard[0][1], tBoard[0][2]);
console.log(tBoard[1][0], tBoard[1][1], tBoard[1][2]);
console.log(tBoard[2][0], tBoard[2][1], tBoard[2][2]);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const regex = /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]+)?$/;
console.log(regex.test("foo@bar.baz"));


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const givenDate = new Date(assignmentDate);
console.log(givenDate);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const givenDateInMilli = givenDate.getTime();
const numberOfDays = 7;
const numberOfDaysInMilli = numberOfDays*24*60*60*1000;
const dueDateInMilli = givenDateInMilli + numberOfDaysInMilli;
const dueDate = new Date(dueDateInMilli);
console.log(dueDate);


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
console.log(`<time datetime="YYYY-MM-DD">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`);


// 10. log this value using console.log
console.log(`Due date is: ${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}.`);
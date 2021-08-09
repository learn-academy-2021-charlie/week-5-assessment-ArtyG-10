// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe('coded', () => {
  it('converts a to 4, e to 3, i to 1, and o to 0', () => {
    expect(coded(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
    expect(coded(secretCodeWord2)).toEqual('G0bbl3dyg00k')
    expect(coded(secretCodeWord3)).toEqual('3cc3ntr1c')
  })
})


// b) Create the function that makes the test pass.

//declare function that has an argument as a string
const coded = (str) => {
//split the string into an array and then map through it
  return str.split('').map((e) => {
//Conditionals to check for vowels and return the value modified to number
    if (e === 'a' || e === 'A') {return e = 4}
    else if (e === 'e' || e === 'E') {return e = 3}
    else if (e === 'i' || e === 'I') {return e = 1}
    else if (e === 'o' || e === 'O') {return e = 0}
    else {return e}
//join back into string
    }).join('')
}

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]


describe('aWords', () => {
  it('takes in an array and returns all the words that contain the letter a', () => {
    expect(aWords(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(aWords(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
  })
})


// b) Create the function that makes the test pass.

const aWords = (arr) => {
//iterate through the values passed in array and use .includes to filter for words containing letter A.
  return arr.filter(e => e.includes('A') || e.includes('a'))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe('fullHouse', () => {
  it("determines whether or not the array is a 'full house'", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})


// b) Create the function that makes the test pass.

const fullHouse = (arr) => {
//sorting the array to get numbers lined up
  arr2 = arr.sort()
//conditonals to check to see if the first two numbers and last three are equal or
//if the first three and last two are equal
  if (arr2[0] === arr2[3]) {return false} //added edge case all numbers equal
  else if (arr2[0] === arr2[1] && arr2[2] === arr2 [4]) {return true}
  else if (arr2[0] === arr2[2] && arr2[3] === arr2[4]) {return true}
  else {return false}
}

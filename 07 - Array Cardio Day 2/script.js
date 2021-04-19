// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
const currentYear = new Date().getFullYear();
const adultYear = 19;

// Array.prototype.some() // is at least one person 19 or older?
const isSomebodyAdult = people.some(person => (currentYear - person.year) >= adultYear);
console.log(isSomebodyAdult);

// Array.prototype.every() // is everyone 19 or older?
const isEveryoneAdult = people.every(person => (currentYear - person.year) >= adultYear)
console.log(isEveryoneAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
const desiredCommentId = 823423;

// find the comment with the ID of 823423
const someComment = comments.find(comment => comment.id === desiredCommentId);
console.log(someComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const someCommentIndex = comments.findIndex(comment => comment.id === desiredCommentId);
const commentsNew = comments.filter(comment => comment.id !== someCommentIndex);
console.log(someCommentIndex, commentsNew);
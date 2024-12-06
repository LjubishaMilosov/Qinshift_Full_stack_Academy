//Concatenation:

// var tweet = prompt("Compose you tweet:");

// var tweetCount = tweet.length;

// alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");

//Slice:

// var myName = "Angela";
// myName.slice(0,1);
// console.log(myName.slice(0, 1));
// console.log(myName.slice(5, 6));
// console.log(myName.slice(1, 4));


// var tweet = prompt("Compose your tweet:");
// var tweetUnder140 = tweet.slice(0, 140);
// alert(tweetUnder140);
// console.log(tweetUnder140.length);

//toUpperCase and toLowerCase:

// var myName = "Angela";
// var toUpperCase = myName.toUpperCase();
// console.log(toUpperCase);
// var toLowerCase = toUpperCase.toLowerCase();
// console.log(toLowerCase);




//Exercise: Capitalize only first letter of name

var myName = prompt("What is your name?");

var capitalFirstLetter = myName.slice(0, 1).toUpperCase();
var restOfName = myName.slice(1, myName.length).toLowerCase();
var fullCapitalName = capitalFirstLetter + restOfName;
console.log(fullCapitalName);

alert("Hello, " + fullCapitalName);



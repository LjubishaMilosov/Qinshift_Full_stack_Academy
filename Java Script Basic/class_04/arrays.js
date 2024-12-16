 let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
 console.log(days);

 console.log(days[4]); //Fri

 // We can define an empty array
 let emptyArray = [];
 console.log(emptyArray); //[]

 // in JS array can have different data types
 let mixedArray = ["marko", 7, undefined, true, 65, null];
 console.log("Mixed array", mixedArray);

 //We can change the value of an item by accessing it in a new value
 console.log("Before changing the value", mixedArray[2]);
 mixedArray[2] = "Not undefined anmore";
 console.log("After changing the value", mixedArray[2]);
 console.log(mixedArray);
 
 console.log(`There are ${days.length} day in a week`);
 console.log(days[days.length -1]); // the last element of the array
 days[days.length - 1] = "Sunday";  // change the value
 console.log(days[days.length -1]);

 
 // one way of adding items to an array

 let studentsG6 = ["Aleksandra", "Ivan", "Matin"];

 // adding new item to a position that doesnt exist yet
 studentsG6[studentsG6.length] = "Vrapche";
 console.log(studentsG6);

 studentsG6[studentsG6.length] = ["Bojan", "Tijana"];
  let smallerArray = studentsG6[4];
  console.log(smallerArray);
  console.log(smallerArray[0]);
 
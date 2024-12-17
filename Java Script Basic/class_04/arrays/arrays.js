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

  // Some methods when working with array
  // "push" adds one or multiple items at the END of the array
  studentsG6.push("Krasimir");
  console.log(studentsG6);

  // "unshift" dds one or multiple items at the BEGINNING of the array
  studentsG6.unshift("Sanja");
  console.log(studentsG6);

  // "pop" removes one item from the END of the array and returns it
 let deletedMember = studentsG6.pop();
 console.log(deletedMember);
 console.log(studentsG6);

 // "shift" removes one item from the BEGINING of the array and returns it
 let deletedMemberFromBegining = studentsG6.shift();
 console.log(deletedMemberFromBegining);
 console.log(studentsG6);
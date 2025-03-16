const pi = 312
pi
console.log(pi)
// cannot reassign after using const



//data types
// we use typeof to check data type.its an operator thsu we dont need parantheses with "typeof"but js also supports ()after typeof though not commonly done
// also ,it accepts one argument -the piece of data that we'd like to know thw type of

typeof "i am done";
// data types;numbers
// ,strings,
// booleans-can only be of 2 values;true or false and play a big role in if statements and looping in js.  
// ,Objects - a collection of data rather than a single value. An object consists of a list of properties, wrapped in curly braces {} and separated by commas. Each property in the list consists of a name — also known as a key — which points to a value:"name": "JavaScript"
//  "
// The example below has four properties, with the names (or keys) "name", "createdBy", "firstReleased", and "isAwesome":

const js = {
  name: "JavaScript",
  createdBy: {
    firstName: "Brendan",
    lastName: "Eich",
  },
  firstReleased: 1995,
  isAwesome: true,
};

typeof js;
//=> "object"
// Note that objects' properties can point to values of any data type. In the example above, the properties have values of four different types: a string, a number, a boolean, and another object!

// arrays -Technically, Arrays are not a data type in JavaScript — they are instead a special case of the object data type. However, because they are used quite frequently in JavaScript code, we are including them here.
//An array is just a list of values enclosed in square brackets: ["Byron", "Cubby", "Boo Radley", "Luca"]. As with objects, the values can be of any data type.

//If we check the data type of our array, we can confirm that arrays are really objects in JavaScript:

const dogs = ["Byron", "Cubby", "Boo Radley", "Luca", "Spinach"];
typeof dogs;
//=> "object"





/**
 * File: coding-challenge.js
 * Author: Jesse S. Mayo
 * Date: 10-20-2017
/*


/** SOLUTION TO PROBLEM 1:
* This function will output an alert to the user when invoked with the 
* the message being 'Durham is awesome!'
*/
function whosAwesome() {
  alert("Durham is awesome!");
}
whosAwesome(); // Example of invoking whosAwesome(). Performed as expected.


/** SOLUTION TO PROBLEM 2:
* This function will loop through the given 'bands' array and print an alert
* of 'I love [bandName]' for each element within the 'bands' array.
*/
function musicIsLife() {
  /** An array that band names.  */
  const bands = ["Kiss", "Aerosmith", "ACDC", "Led Zeppelin", "Nickelback"];
  for (var i = 0; i < bands.length; i++) {
    alert("I love " + bands[i]);
  }
}
musicIsLife(); // Example call for musicIsLife(). Performed as expected.


/** SOLUTION TO PROBLEM 3: 
* This function will loop through the 'bands' array and print out an alert 
* of ' I love [bandName]' for each band element except 'Nickelback'.
* The alert for 'Nickelback' is altered to say "I DON'T love Nickelback!"
*/
function noNickelback() {
  /* I would have reused code from the musicIsLife() function, but I wanted
to have my solutions individually blocked out for each problem.  */
  for (var i = 0; i < bands.length; i++) {
    if (bands[i] === "Nickelback") alert("I DON'T love Nickelback!");
    else alert("I love " + bands[i]);
  }
}
noNickelback(); // Example call for noNickelback(). Performed as expected


/** SOLUTION TO PROBLEM 4
* This function will loop through a constant array of integers, named 
* 'array', and output the average of the elements contained within. 
@return avg The average of all elements within 'array'.
*/
function calcAverage() {
  /** An array of integers to be used for finding the average. */
  const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];
  var avg = 0;
  for (var i = 0; i < array.length; i++) avg += array[i];
  avg = avg / array.length; //storing just in case needed later
  return avg; // returning avg to the caller
}
calcAverage(); // returns an output of 133.0909090909091


/** SOLUTION TO PROBLEM 5:
* This function will loop through a pre-defined array and return a 
* a string that specifies both the MOST and LEAST frequently appearing 
* elements within the array.
*/
function freqCount() {
  const array = ["a", "b", "c", "d", "c", "b", "b", "c", "a", "e", "b", "e"];
  var freqObj = {};
  var count = 1;
  array.sort(); // sort array for easier comparision
  for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
      continue;
    } else {
      freqObj[array[i]] = count; // add element : frequency to object
      count = 1; //reset count
      continue;
    }
  }
  //get keys of the recent object and look for max and min ints
  var keys = Object.keys(freqObj);
  // set default max and min to the key's value, then compare.
  var mostFreq = keys[0];
  var leastFreq = keys[0];
  for (var j = 1; j < keys.length; j++) {
    if (freqObj[keys[j]] > freqObj[mostFreq]) mostFreq = keys[j];
    if (freqObj[keys[j]] < freqObj[leastFreq]) leastFreq = keys[j];
  }
  return (
    "The most frequent item is: " +
    mostFreq +
    ". The least frequent item is: " +
    leastFreq
  );
}
// freqCount() -> "The most frequent item is: b. The least frequent item is: d"


/**SOLUTION TO PROBLEM 6:
 * This function is UNFINISHED, but was supposed to take two arrray
 * arguments and return a new array that contained only the shared elements 
 * within each. 
 */
function overlaps(arr1, arr2){
  // sort both arrays and push in while the elements are equal
  arr1.reverse;
  arr2.reverse;
  filter1 = arr1.filter(function(val) {
    for (var i = arr2.length - 1; i >= 0; i--) return val === arr2[i];
  });
  filter2 = arr2.filter(function(val) {
    for (var i = 0; i < filter1.length; i++) return val === filter1[i];
  });
  newarr = filter1.concat(filter2);
  return newarr;
}

/** SOLUTION TO PROBLEM 7:
* This function will take a single integer and return a break down of the
* largest number of US dollar bills that can be received. This function
* is assuming that no bills over $100 and no less than $1 are in use. 
*/
function withdraw(cost) {
  var bills = {
    "100": 0,
    "50": 0,
    "20": 0,
    "10": 0,
    "5": 0,
    "1": 0
  };
  while (cost !== 0) {
    if (cost - 100 >= 0) {
      cost -= 100;
      bills["100"]++;
    } else if (cost - 50 >= 0) {
      cost -= 50;
      bills["50"]++;
    } else if (cost - 20 >= 0) {
      cost -= 20;
      bills["20"]++;
    } else if (cost - 10 >= 0) {
      cost -= 10;
      bills["10"]++;
    } else if (cost - 5 >= 0) {
      cost -= 5;
      bills["5"]++;
    } else {
      cost -= 1;
      bills["1"]++;
    }
  }
  return bills;
}
// withdraw(1700); ->  {1: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 17}
// withdraw(1702); ->  {1: 2, 5: 0, 10: 0, 20: 0, 50: 0, 100: 17}

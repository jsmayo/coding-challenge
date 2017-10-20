/** An array that band names.  */
const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];
/** An array of integers to be used for finding the average. */
const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

  /** SOLUTION TO PROBLEM 1:
   * This function will output an alert to the user when invoked with the 
   * the message being 'Durham is awesome!'
   */
  function whosAwesome() {
    alert("Durham is awesome!");
  }
  whosAwesome(); // Example of invoking whosAwesome()

  /** SOLUTION TO PROBLEM 2:
   * This function will loop through the given 'bands' array and print an alert
   * of 'I love [bandName]' for each element within the 'bands' array.
   */
  function musicIsLife() {
    for(var i = 0; i < bands.length; i++) {
      alert("I love " + bands[i]);
    }
  }
  musicIsLife(); // Example call for invoking the musicIsLife() function.

  /** SOLUTION TO PROBLEM 3: 
   * This function will loop through the 'bands' array and print out an alert 
   * of ' I love [bandName]' for each band element except 'Nickelback'.
   * The alert for 'Nickelback' is altered to say "I DON'T love Nickelback!"
   */
  function noNickelback() {
    /* I would have reused code from the musicIsLife() function, but I wanted
    to have my solutions individually blocked out for each problem.  */
    for(var i = 0; i < bands.length; i++) {
      if(bands[i] === "Nickelback") alert("I DON'T love Nickelback!");
      else alert("I love " + bands[i]);
    }
  }
  noNickelback() //Example of invoking noNickelback() function. 

  /** SOLUTION TO PROBLEM 4
   * This function will loop through a constant array of integers, named 
   * 'array', and output the average of the elements contained within. 
   */
  function calcAverage() {
    var avg = 0;
    for(var i = 0; i < array.length; i++) avg += array[i];
    avg = avg / array.length; //storing just in case needed later 
    return avg; // returning avg to the caller
  }

  calcAverage(); // Invoking the call to calcAverage(), where the average is returned to the console by default. 

   }
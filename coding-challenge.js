const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

/** SOLUTION TO PROBLEM 1:
  * This function will output an alert to the user when invoked.
  */
function whosAwesome() {
  alert("Durham is awesome!");
}
// whosAwesome(); Example of invoking whosAwesome()

/** SOLUTION TO PROBLEM 2:
  * This function will loop through the given 'bands' array and print an alert
  * of 'I love [bandName]' for each element within the 'bands' array.
  */
  function musicIsLife() {
    for(var i = 0; i < bands.length; i++) {
      alert("I love " + bands[i]);
    }
  }
  // musicIsLife(); Example call for invoking the musicIsLife() function.

  /** SOLUTION TO PROBLEM 3: 
    * This function will loop through the 'bands' array and print out an alert 
    * of ' I love [bandName]' for each band element except 'Nickelback'.
    * The alert for 'Nickelback' is altered to say "I DON'T love Nickelback!"
    */
    function noNickelback() {
      for(var i = 0; i < bands.length; i++) {
        if(bands[i] === "Nickelback") alert("I DON'T love Nickelback!");
        else alert("I love " + bands[i]);
      }
    }
    // noNickelback() Example of invoking noNickelback() function. 
    /* I would have reused code from the musicIsLife() function, but I wanted
       to have my solutions individually blocked out for each problem.
     */
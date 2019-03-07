//---- creating a function
function countLetters(str) {
    //---- copy the input string without spaces
    var noSpaces = str.split(" ").join("");
    // outputs the str into one word
    //same as below
    //var noSpaces = str.replace(/ /g,"");

    //---- creating an object
    var letterCounter = {};

    //---- creating object keys from different letters
    for (var i = 0; i < noSpaces.length; i++) {
        letterCounter[noSpaces[i]] = 0;
        // this will give you the letter = 0 as stated above.
    }
    for (var j = 0; j < Object.keys(letterCounter).length; j++) {
        // write a for loop wrapped in a for loop that loops through the string for each key
        for (var i = 0; i < noSpaces.length; i++) {
            if (Object.keys(letterCounter)[j] === noSpaces.charAt(i)) {
                //if the "Letter" === "Letter" if the letters are the same add another number

                letterCounter[Object.keys(letterCounter)[j]]++;
            }
        }
    } // loop within another loop
    console.log(letterCounter);
}

countLetters("lighthouse in the house");
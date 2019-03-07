function countLetters(str) {
    // copy the input string without spaces
    var noSpaces = str.replace(/ /g, "");
    // creating an object
    var letterCounter = {};
    // creating object keys from different letters
    for (var i = 0; i < noSpaces.length; i++) {
        letterCounter[noSpaces[i]] = [];
        //// CharPosition - adding within the duplicate letters
    }
    for (var j = 0; j < Object.keys(letterCounter).length; j++) {
        for (var i = 0; i < noSpaces.length; i++) {
            if (Object.keys(letterCounter)[j] === noSpaces.charAt(i)) {
                letterCounter[Object.keys(letterCounter)[j]].push(i);
                //// letterCounter[Object.keys(letterCounter)[j]].push(i); ---> pushing the count if duplicated
            }
        }
    }
    console.log(letterCounter);
}
countLetters("ligthouse in the house");
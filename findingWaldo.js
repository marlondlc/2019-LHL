

function findWaldo(arr, found) {


    arr.forEach(function (el, i) {
        //console.log(el) // each el in the arr.
        // console.log(i) // should get number of arr
        if (el === "Waldo") {
            found(i)
        }

    })


    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] === "Waldo") {
    //         found(i); // execute callback
    //     }
    // }
}

function actionWhenFound(index) {
    //index = [2] where waldo is in the arr
    console.log("Found Waldo at index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)


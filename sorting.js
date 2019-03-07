var students = [
    { id: 1, name: "bruce", age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex", age: 22 },
    { id: 4, name: "alex", age: 30 }
];


var sortedNamesAge = students.sort(function (a, b) {

    //sort by name
    var nameA = a.name
    var nameB = b.name
    var ageA = a.age
    var ageB = b.age


    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    if (nameA === nameB && ageA > ageB) {  // if names are same --> sort a before b for age
        return 1
    }
    return -1
});



console.log(sortedNamesAge)



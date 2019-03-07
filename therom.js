var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
];

var result = input.map(function (current_pair) {
    var current_x = current_pair.x
    var current_y = current_pair.y

    // x^2 + y^2 = z^2
    // square root ( x^2 + y^2  ) = z

    var current_x_pow_two = Math.pow(current_x, 2)
    var current_y_pow_two = Math.pow(current_y, 2)

    var sqrt_of_x_y_pow = Math.sqrt(current_x_pow_two + current_y_pow_two)

    return sqrt_of_x_y_pow
})

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
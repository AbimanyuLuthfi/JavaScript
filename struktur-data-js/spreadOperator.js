/* Spread Operator digunakan untuk menyebarkan nilai array 
atau iterable object menjadi beberapa elemen */

const foods = ["Seafood", "Salad", "Nugget", "Soup"]

// Dengan menggunakan '...' maka nilai pada array akan dileburkan menggunakan Spread Operator
console.log(...foods)

// Sama seperti mencetak array menggunakan cara dibawah ini
console.log(foods[0], foods[1], foods[2], foods[3])


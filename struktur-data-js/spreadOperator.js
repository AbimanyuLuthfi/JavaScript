/* Spread Operator digunakan untuk menyebarkan nilai array 
atau iterable object menjadi beberapa elemen */

const foods = ["Seafood", "Salad", "Nugget", "Soup"]

// Dengan menggunakan '...' maka nilai pada array akan dileburkan menggunakan Spread Operator
console.log(...foods)

// Sama seperti mencetak array menggunakan cara dibawah ini
console.log(foods[0], foods[1], foods[2], foods[3])

// Dengan menggunakan Spread Operator kita dapat menggabungkan nilai pada kedua array
movies = ["Spiderman", "Thor", "Batman", "Hulk"]
superheroes = ["Iron Man", "Black Widow", "Hawk Eye", "Captain Amerika"]

// Penggabungan array menggunakan Spread Operator dapat dilakukan seperti contoh dibawah ini
const all_superheroesMovies = [...movies, ...superheroes]
console.log(all_superheroesMovies)

// Spread Operator juga dapat digunakan untuk object literals
// Atau menggabungkan beberapa object dengan code yang lebih simple

const objek1 = {Name: 'Abimanyu Luthfi Rizq Ramadhan', age: 20};
const objek2 = {Name2: 'Putri Regita Miolda', age2:20};

// Penggabungan kedua objek dapat dilakukan seperti contoh dibawah ini
const newObjek = {...objek1, ...objek2};
console.log(newObjek)
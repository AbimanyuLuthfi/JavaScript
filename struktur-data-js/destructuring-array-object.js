// Destructuring dalam JavaScript berfungsi untuk mengeluarkan nilai array atau properties dari sebuah object
// ke dalam satuan yang lebih kecil

const movies = {
    movieName : "Spiderman",
    type : "Superheroe",
    idr : "Rp 100.000",
    duration : "90 Minutes"
}

// Penggunaan Destructuring object dapat dilakukan dengan cara dibawah ini
const {movieName, type, idr} = movies
console.log(movieName, type, idr)

// Jika hanya membutuhkan satu objek saja, maka kita dapat menyesuaikannya, seperti contoh dibawah ini
const {duration} = movies
console.log(duration)

// Destructuring Assignment
// Penggunaan Destructuring Assignment, yaitu dapat mengisialisasi nilai baru pada suatu nilai yang terdapat dalam array/object
const biography = {
    name:"Abimanyu",
    age:"20"
}

// Penggunaan Destructuring Assignment dapat dilakukan seperti contoh dibawah ini
let name = "Luthfi"
let age = "19"
console.log(name,age)

// Default Value
// Ketika melakukan destructuring dan menetapkan suatu variable yang belum memiliki nilai
// Maka nilai tersebut akan berisi "Undifined"
const cinema = {
    film: "Day Shift",
    genre: "Thriller"
}

const {film, genre, duration2} = cinema
console.log(film, genre, duration2)

// Alternatif penerapan nilai pada variable yang menerapkan destructuring
const cinema2 = {
    film2: "Now You See  Me",
    genre2: "Thriller"
}
const {film2, genre2, duration3 = "120 Minutes"} = cinema2
console.log(film2, genre2, duration3)

// Assigning to Different Local Variable Names
const cinema3 =["Thor", "Spiderman No Way Home", "Avatar The Last Air Bender"]

// Destructuring Array dapat dilakukan seperti code dibawah ini
const [firstcinema, secondcinema, thirdcinema] = cinema3

console.log(firstcinema)
console.log(secondcinema)
console.log(thirdcinema)

// Jika ingin melakukan destrukturisasi pada array tertentu
const food = ["Fried Rice", "Seafood", "Meat Ball"]

// Contoh melakukan destrukturisasi pada nilai ke 2 di dalam array
const [,secondFood] = food
console.log(secondFood)

// Menukar nilai dengan array destructuring assignment
let a = 5;
let b = 8;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
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
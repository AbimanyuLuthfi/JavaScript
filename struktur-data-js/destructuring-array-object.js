// Destructuring dalam JavaScript berfungsi untuk mengeluarkan nilai array atau properties dari sebuah object
// ke dalam satuan yang lebih kecil

const movies = {
    movieName : "Spiderman",
    type : "Superheroe",
    idr : "Rp 100.000"
}

// Penggunaan Destructuring dapat dilakukan dengan cara dibawah ini
const movieName = movies.movieName
const type = movies.type
const idr = movies.idr

console.log(movieName, type, idr)
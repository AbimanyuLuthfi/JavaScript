// Dari berbagai macam looping pada bahasa pemrograman Javascript, "for" merupakan salah satu cara yang digunakan untuk melakukan looping.
/*for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
}
*/

// Contoh penerapannya pada program dibawah ini.
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// For of Loop
/* for of tidak membutuhkan banyak statement untuk melakukan looping pada sebuah array
contohnya :
for(arrayItem of myArray){
    //do something
}
*/

let myArray = ["Andhika", "Raihan", "Ryan", "Donny"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

// While and do-while
// Contoh looping menggunakan while dapat dilihat pada program dibawah.
// program tersebut berfungsi untuk mencetak angka 1-100 menggunakan while.

let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

// Do-While
let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 100);

//Infinite Looping
// Proses tersebut harus dihindari saat membuat sebuah program karena
// ia akan berjalan terus menerus sampai mengakibatkan crash pada sebuah aplikasi.
// Contohnya pada program dibawah ini.

let x = 1;

while (x <= 5) {
    console.log(i);
}
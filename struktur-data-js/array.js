// Array merupakan tipe data yang dapat mengelompokkan 
// lebih dari satu ni;ai dan menempatkannya dalam satu variable.

let myArray =["Cokelat", 42.5, 25, true, "Programming"];
console.log(myArray);
/* Perbedaan array dengan object adalah data pada array disusun secara berurutan dan
diakses menggunakan index. Untuk mengakses nilai di dalam array, kita dapat menggunakan []
dan diisi menggunakan angka pada posisi nilai yang ingin diakses.
*/

console.log(myArray[1]); // 42.5
console.log(myArray[0]); // Cokelat

// Jika kita mengakses index di luar  ukuran array, maka hasilnya alan undefined.
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang Nilai Array adalah " + myArray.length + "."); // Untuk mengetahui panjang Array.

// Kita dapat menambahkan nilai kepada sebuah array dengan menggunakan metode push

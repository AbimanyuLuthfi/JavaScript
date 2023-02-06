/* Pada bahasa pemrograman Javascript terdapat beberapa tipe data yang dapat
digunakan ketika membuat sebuah program, yaitu Number, BigInt, String, Boolean,
Null, Symbol, dan tipe data Undefined (yang tidak ditentukan)
*/

// Tipe Data Undefined
/* Tipe data ini merupakan sebuah kondisi jika suatu variable tidak berisi/bernilai,
contohnya seperti pada program di bawah ini
*/

let x;
console.log(typeof(x)); //mencetak/mengetahui tipe data pada sebuah variable.

// Tipe Data Number
/* Pada dasarnya tipe data ini berupa angka. Jika angka tersebut tergolong kedalam 
bilangan desimal, maka kita dapat menggunakan titik "." , contohnya seperti pada
program di bawah ini.
*/

let y = 250;
let z = 9.5;
console.log(typeof(y)); //mencetak/mengetahui tipe data pada sebuah variable.
console.log(typeof(z)); //mencetak/mengetahui tipe data pada sebuah variable.

// Tipe Data BigInt
/* Tipe Data ini merupakan tipe data yang mencakup nilai lebih besar dibandingkan
dengan tipe data Number dan dapat digunakan untuk kriptografi ataupun menentukan
waktu yang presisi*/
// Untuk menggunakan tipe data ini, kita dapat menambahkan huruf "n" diakhir angka
const bigNumber = 1550750890n;

console.log(bigNumber); // mencetak output yang disimpan pada variabel bigNumber
console.log(typeof(bigNumber)); // mengetahui tipe data pada sebuah variable.

// BigInteger juga dapat digunakan untuk nilai yang kecil
const smallNumber = 5n;

console.log(smallNumber); 
console.log(typeof(smallNumber));

// Tipe Data Strings
/* Tipe Data ini merupakan tipe data yang menampung nilai string/text
dengan menggunakan (') ataupun ("")
*/

let firstName = "Abimanyu Luthfi"
let lastName = "Rizq Ramadhan"

console.log(firstName + lastName);
console.log(typeof(firstName));
console.log(typeof(lastName));

//Tipe Data Boolean
/* Tipe data ini merupakan tipe data yang menampung */
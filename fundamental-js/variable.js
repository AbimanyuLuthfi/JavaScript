/* Dalam Javascript terdapat tiga jenis yang dapat
digunakan untuk Mendeklarasikan/menentukan variable, yaitu :
1. var
2. let
3. const
*/

let lastName; // Mendeklarasikan variable menggunakan "let"
/* let lastName = "Ramadhan"; 
Bisa juga mengisi variable seperti pada program diatas.
*/

let fullName = "Abimanyu" + "Luthfi" + "Rizq" + "Ramadhan"; // Kita juga dapat mengisi variable lebih dari satu text

lastName = "Ramadhan"; // Mengisi variable yang telah di deklarasikan sebelumnya.

console.log(lastName); // Mencetak nilai yang berada dalam variable lastName.
console.log(fullName); // Mencetak nilai yang berada dalam variable fullName.

// Mendeklarasikan variable menggunakan const
/* Const merupakan singkatan dari Constant, yang artinya
Jika kita mengisi nilai pada variable dengan jenis const, maka nilainya akan tetap
dan tidak bisa diubah, jika nilai tersebut diubah, maka akan terjadi error pada
program tersebut.
*/
const x = 500;
console.log(x); // Mencetak nilai yang berada dalam variable x dengan jenis "Const".
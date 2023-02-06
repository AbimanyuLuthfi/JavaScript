/*If Else merupakan sebuah percabangan yang bergantung pada suatu kondisi yang terjadi.
Statement if tersebut akan dijalankan jika kondisi bernilai true dan jika statement if tersebut 
bernilai false, maka proses tersebut akan dilewatkan pada statement if berikutnya.
*/
// Contoh If Else Pertama
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
else if(isRaining==false) {
    console.log("Tidak hujan, tidak perlu membawa payung");
}
console.log("Berangkat kegiatan.");

// Contoh If Else Kedua
const x = 70;

if(x > 100) {
    console.log("\nNilai x lebih besar dari seratus, yaitu : ", x);
}
else {
    console.log("\nNilai x lebih kecil dari seratus, yaitu : ", x);
}
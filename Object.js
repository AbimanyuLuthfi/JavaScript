// Object mampu menyimpan nilai dari beragam tipe data dan membentuk data
// yang lebih kompleks
// Untuk menetapkan objek pada sebuah variable kita dapat menggunakan tanda {}

const user = {}

/* Object berisi key dan value, fungsi key yaitu sama seperti variable, untuk menampung sebuah nilai
sedangkan value berisi nilai dengan tipe data apa pun.
*/
// Key harus berupa string dan berada sebelum :

let object = {key1: "value1", key2: "value2", key3: "value3"}

// Jika penamaan key terdapat karakter khusus, dapat menggunakan ""
const biodata = {
    nama:"Abimanyu Luthfi Rizq Ramadhan",
    umur : 19,
    "Jenis Kelamin": "Laki-Laki"
}

/* Penulisan baris baru dalam membuat object, tidak akan berpengaruh terhadap apapun.
Akan lebih baik jika kita membuat baris baru ketika ingin membuat object
*/
// Untuk memanggil sebuah object, kita dapat menuliskan nama object, kemudian diikuti tanda titik dengan nama propertinya

const biodata2 = {
    nama:"Abimanyu Luthfi Rizq Ramadhan",
    umur: 19,
    "Jenis Kelamin": "Laki-Laki"
}
console.log(`Halo nama saya ${biodata2.nama}, Umur saya ${biodata2.umur}`)

/* 
1. Sama halnya dengan if else, switch statement merupakan sebuah pengecekan pada banyak kondisi
dengan lebih mudah dan ringkas. 
2. Case yang terletak di dalam switch tersebut akan dijalankan jika variable yang terletak setelah
switch sama dengan salah satu case yang sudah ditentukan sebelumnya.
*/

// Contoh penerapan Switch Case 1
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning! How Are You Today"
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi";
}
console.log(greeting);

// Contoh Penerapan Switch Case 2
const makanan = "donat";

switch (makanan){
    case "pizza":
        console.log("\nPizza merupakan makanan/hidangan yang berasal dari italia yang dipanggang menggunakan oven dengan saus tomat.");

    case "spaghetti":
        console.log("\nSpaghetti merupakan pasta yang berbentuk panjang, tipis serta padat. Makanan tersebut berasal dari negara Italia.");

    case "donat":
        console.log("\nDonat Merupakan sebuah adonan yang terbuat dari tepung terigu, gula pasir, kuning telur, ragi roti, dan mentega. Umumnya makanan ini berbentuk bulat.");
}

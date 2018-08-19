// Imtahan neticesine gore qiymetin tapilmasi

// var result = Number(prompt("imtahan neticesini yazin"));

// if (result >= 0 && result <= 100) {

//     if (result <= 40) {
//         console.log("FF");
//     } else if (result >= 41 && result <= 50) {
//         console.log("DD");
//     } else if (result >= 51 && result <= 60) {
//         console.log("CC");
//     } else if (result >= 61 && result <= 80) {
//         console.log("BB");
//     } else {
//         console.log("AA");
//     }
// } else {
//     console.log("Netice 0-100 arasinda ola biler");
// }


// // input
// var month = Number(prompt("ay yazin"));

// // control
// if (month >= 1 && month <= 12) {

//     // process
//     if (month >= 3 && month <= 5) {
//         // output
//         console.log("Yaz");
//     } else if (month >= 6 && month <= 8) {
//         console.log("Yay");
//     } else if (month >= 9 && month <= 11) {
//         console.log("Payiz");
//     } else {
//         console.log("Qis");
//     }

// } else {
//     console.log("Ay 1-12 arasinda ola biler");
// }


// var n = 12;

// var i = 1;

// while (i <= n) {
//     if (n % i == 0) {
//         console.log(i);
//     }
//     i++;
// }


// var n = 10, m = 25;

// n++;
// while (n < m) {
//     if (n % 3 == 0 && n % 7 == 0) {
//         console.log(n);
//     }
//     n++;
// }


// var n = 7;
// var count = 0, i = 2;

// while (i < n) {
//     if (n % i == 0) {
//         count++;
//         break;
//     }
//     i++;
// }

// if(count>0){
//     console.log("Murekkeb")
// }else{
//     console.log("Sade");
// }


// var n = 549;
// var count = 0;

// if (n < 0) {
//     n *= -1;
// }

// while (n > 0) {
//     n = (n - n % 10) / 10;
//     count++;
// }

// console.log(count);


// var n = -21469, count = 0, d = 1;

// if (n < 0) {
//     n *= -1;
// }

// while (n > d) {
//     d *= 10;
//     count++;
// }

// console.log(count);

/* Do While */

// var a = 1;
// do {
//     console.log("oldu");
// } while (a > 1)


// var yaslar = [14, 19, 22, 28, 19];

// var adlar = ["Ziya","Rauf","Abulfat","Elshan"];

// for (var i = 0; i < yaslar.length; i++) {
//     console.log(yaslar[i]);
// }


var stu = {
    name: "Rauf",
    surname: "Refizade",
    age: 19
};


var Student = function (ad, soyad, yas) {
    this.name = ad;
    this.surname = soyad;
    this.age = yas +" yaşında";
    this.education = "Programming";
}

var stu1 = new Student("Rauf", "Refizade", 19);
var stu2 = new Student("Ziya", "Ismayilov", 14);


console.log(stu1, stu2);
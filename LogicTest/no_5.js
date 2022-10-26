var angka = {
    4: "empat",
    20: "dua puluh",
    39: "tiga puluh sembilan",
}

var input = process.argv.slice(2);

if (input[0] > 100) {
    console.log("silahkan masukkan bilangan 1-100")
} else if (typeof angka[input[0]] !== 'undefined') {
    console.log(angka[input[0]]);
}

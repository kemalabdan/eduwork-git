var angka = process.argv.slice(2);

for (let i = 0; i < angka.length; i++) {
    angka[i] = parseInt(angka[i]);
}

var lowest = -1;
var highest = -1;

for (let i = 0; i < angka.length; i++) {
    if (lowest == -1) {
        lowest = angka[i];
    }
    if (highest == -1) {
        highest = angka[i];
    }
    if (angka[i] < lowest) {
        lowest = angka[i];
    }
    if (angka[i] > highest) {
        highest = angka[i];
    }
}

console.log(lowest)
console.log(highest)
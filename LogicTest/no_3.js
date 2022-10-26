var input = process.argv.slice(2)[0];
var angka = [];

function isNumeric(char) {
    return !isNaN(parseInt(char))
}

for (let i = 0; i < input.length; i++) {
    if (isNumeric(input[i])) {
        angka.push(input[i]);
    }
}

console.log(angka.join(''))

for (let i = 0; i < angka.length; i++) {
    console.log(angka[i] * (10 ** (angka.length - 1 - i)));
}
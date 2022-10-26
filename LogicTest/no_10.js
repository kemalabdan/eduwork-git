var input = process.argv.slice(2);

if(input % 4 == 0){
    console.log(input + " adalah tahun kabisat")
} else {
    console.log(input + " bukan tahun kabisat")
}
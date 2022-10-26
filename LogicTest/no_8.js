var input = process.argv.slice(2);

for (let i = 1; i <= input; i++) {
    var value = i;
    if (i % 15 == 0) {
        value = "EduWork"
    } else if (i % 5 == 0) {
        value = "Work";
    } else if (i % 3 == 0) {
        value = "Edu";
    }
    console.log(value)
}
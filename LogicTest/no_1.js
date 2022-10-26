var f = [];

function faktorial(n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = faktorial(n - 1) * n;
}

var input = process.argv.slice(2);
console.log(faktorial(input[0]))
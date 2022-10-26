function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

var input = process.argv.slice(2);
console.log(reverse(input[0]))
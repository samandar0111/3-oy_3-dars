let n = 3
let a = 1
let b = 0
for(i = 1; i <= n; i++){
  a *= i
  console.log(a);
  b += 1 / a
}
console.log(b);
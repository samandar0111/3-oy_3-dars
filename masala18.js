let a = 3
let n = 4
let s = 0
let p = 0
for(i = a; i <= a ** n; i *= a ** 2){


  s -= i
}

for(i = a ** 0; i <= a ** n; i *= a ){


  p += i
}
console.log(p + ( 2 * s));
let output = 1

for (let i=1; i<=100; i++) {
  output += i
}
console.log(output)



const sum = function(limit) {
  let output = 0
  for (let i=1; i<=limit; i++) {
    output += i
  }
  return output
}

console.log(sum(10))
console.log(sum(20))
console.log(sum(30))



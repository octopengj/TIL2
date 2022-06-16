let output = ''

for (let i=0; i<10; i++) {
  for (let j=10; j>i; j--){
    output += '*'
  }
  output += '\n'
}
console.log(output)


let output1 = ''

for (let i=0; i<10; i++) {
  output1 += ' '
  for (let j=0; j<(i*2+1); j++){
    output1 += '*'
  }
  output1 += '\n'
}
console.log(output1)


let output2 = ''

for (let i=0; i<10; i++) {
  for (let k=0; k<9-i; k++) {
  output2 += ' '
  }
  for (let j=0; j<(2*i+1); j++) {
    output2 += '*'
  }
  output2 += '\n'
}
console.log(output2)
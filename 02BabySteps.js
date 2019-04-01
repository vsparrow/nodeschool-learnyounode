
//   Write a program that accepts one or more numbers as command-line arguments  
//   and prints the sum of those numbers to the console (stdout).  

let sum = 0
for(let i=2;i<process.argv.length;i++){
    sum += parseInt(process.argv[i])
}
console.log(sum)

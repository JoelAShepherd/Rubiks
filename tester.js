const factorial = n => {
    return (n != 1) ? n * factorial(n-1) : 1;
}

const bigFact = num => {
    return (num !== 1n) ? num * bigFact(num-1n) : 1n
}

//for 4x4 cube
//sum is 8!·24!·24!·3^8/(3·24^7) 
let ans = bigFact(8n) * bigFact(24n) * bigFact(24n) * (3n**8n)/ (3n * (24n**7n))

console.log(ans)

// gives answer       7401196841564901169412666353740593449339453440n
//Wolfram Alpha gives 7401196841564901869874093974498574336000000000

const factorial = n => {
    return (n != 1) ? n * factorial(n-1) : 1;
}

const bigFact = num => {
    return BigInt(factorial(num))
}

let ans = (bigFact(8) * bigFact(24) * bigFact(24) * ((3n**8n))/ (3n * (24n**7n)))

console.log(ans)

// gives answer       7401196841564901169412666353740593449339453440n
//Wolfram Alpha gives 7401196841564901869874093974498574336000000000
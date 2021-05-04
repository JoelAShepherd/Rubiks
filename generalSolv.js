
const factorial = n => {
    return (n != 1) ? n * factorial(n-1) : 1;
}

const bigFact = num => {
    return BigInt(factorial(num))
}

let corners = bigFact(8) * (3n**7n);
let centerEdges = bigFact(12) * (2n**10n);

let bigSize, edgeLength, centerSize, numOfInnerSets, numOfEdgeSets, odd;

const calculateDimensions = rubiksSize => {
    if (rubiksSize % 2 === 0){
        odd = false;
    } else {
        odd = true;
    }
    bigSize = BigInt(rubiksSize)
    edgeLength = bigSize -2n;
    centerSize = edgeLength ** 2n;
    if (!odd){
        numOfInnerSets = centerSize / 4n;
        numOfEdgeSets = edgeLength / 2n;
    } else {
        numOfInnerSets = (centerSize - 1n)/ 4n;
        numOfEdgeSets = (edgeLength -1n) / 2n;
    }
    console.log(`Rubiks Size: ${rubiksSize}    Edge Length: ${edgeLength}`)
    console.log(`Center Size: ${centerSize}    Number of Inner Sets: ${numOfInnerSets}`);
    console.log(`Number of Edge Sets: ${numOfEdgeSets}`)
}

let reducer, innerSetMultiplier, edgeSetMultiplier, combinations;

const rubiksSolver = r => {
    calculateDimensions(r);
    edgeSetMultiplier = (bigFact(24))**numOfEdgeSets
    if (odd) {
        reducer = (24n**6n)**numOfInnerSets 
        innerSetMultiplier = (bigFact(24))**numOfInnerSets;
        combinations = (corners * centerEdges * innerSetMultiplier * edgeSetMultiplier) / reducer
        console.log(`A cube of size ${r} has ${combinations} different combinations`)
        console.log("***********")
    } else {
        reducer = ((24n**6n)**((edgeLength/2n)**2n))*24n
        innerSetMultiplier = bigFact(24)**((edgeLength/2n)**2n);
        combinations = (corners * innerSetMultiplier * edgeSetMultiplier) / reducer
        console.log(`A cube of size ${r} has ${combinations} different combinations`)
        console.log("***********")
    }
    
}

for (let i=2; i<15; i++){
    rubiksSolver(i)
} 
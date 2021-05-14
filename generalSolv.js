
const bigFact = num => {
    return (num !== 1n) ? num * bigFact(num-1n) : 1n
}

const digits = num => {
    let bigString = num.toString();
    return bigString.length
};

let corners = bigFact(8n) * (3n**7n);
let centerEdges = bigFact(12n) * (2n**10n);

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
    console.log()
    calculateDimensions(r);
    edgeSetMultiplier = (bigFact(24n))**numOfEdgeSets
    if (odd) {
        reducer = (24n**6n)**numOfInnerSets 
        innerSetMultiplier = (bigFact(24n))**numOfInnerSets;
        combinations = (corners * centerEdges * innerSetMultiplier * edgeSetMultiplier) / reducer
        
    } else {
        reducer = ((24n**6n)**((edgeLength/2n)**2n))*24n
        innerSetMultiplier = bigFact(24n)**((edgeLength/2n)**2n);
        combinations = (corners * innerSetMultiplier * edgeSetMultiplier) / reducer
    }
    console.log(`A cube of size ${r} has ${combinations} different combinations`)
    console.log(`The number of combinations has ${digits(combinations)} digits.`)
    console.log("***********")
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Please enter the size of Cube you wish to calculate: `, num => {
    rubiksSolver(parseInt(num));
    readline.close();
  })
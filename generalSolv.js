//Factorial function for BigInts
const bigFact = num => {
    return (num !== 1n) ? num * bigFact(num-1n) : 1n
}

//Count the size of the number of combinations
const digits = num => {
    let bigString = num.toString();
    return bigString.length
};


let corners = bigFact(8n) * (3n**7n);   //contribution of corner pieces to number of combinations

let centerEdges = bigFact(12n) * (2n**10n); //contribution of center-edge pieces, 
//for odd number cubes only

let bigSize, edgeLength, centerSize, numOfInnerSets, numOfEdgeSets, odd;

const calculateDimensions = rubiksSize => {
    if (rubiksSize % 2 === 0){
        odd = false;
    } else {
        odd = true;
    }
    bigSize = BigInt(rubiksSize) //rubik's size as BigInt
    edgeLength = bigSize -2n; //size of the edge without the corners
    centerSize = edgeLength ** 2n;  //size of the center area for each face (no edges or corners)
    if (!odd){
        numOfInnerSets = centerSize / 4n;
        //The centerSize is split into 4 groups of pieces.
        numOfEdgeSets = edgeLength / 2n;
        //Edges are split into sets equal to half the non-corner edge-length.
    } else {
        numOfInnerSets = (centerSize - 1n)/ 4n;
        //-1n for the center piece that remains static
        numOfEdgeSets = (edgeLength -1n) / 2n;
        //-1n for the center edge pieces (odd cubes only)
    }
    console.log(`Rubiks Size: ${rubiksSize}    Edge Length: ${edgeLength}`)
    console.log(`Center Size: ${centerSize}    Number of Inner Sets: ${numOfInnerSets}`);
    console.log(`Number of Edge Sets: ${numOfEdgeSets}`)
}

let reducer, innerSetMultiplier, edgeSetMultiplier, combinations;

const rubiksSolver = r => {
    console.log()
    calculateDimensions(r);
    edgeSetMultiplier = (bigFact(24n))**numOfEdgeSets //contributions of edge sets to the combinations
    if (odd) {
        reducer = (24n**6n)**numOfInnerSets
        //reducer to negate indestinguishable permutations 
        innerSetMultiplier = (bigFact(24n))**numOfInnerSets;
        //contribution of the inner sets
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
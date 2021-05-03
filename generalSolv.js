
const factorial = n => {
    return (n != 1) ? n * factorial(n-1) : 1;
}

let corners = factorial(8) * (3**7);
let centerEdges = factorial(12) * (2**10);

let edgeLength, centerSize, numOfInnerSets, numOfEdgeSets, odd;

const calculateDimensions = rubiksSize => {
    if (rubiksSize % 2 === 0){
        odd = false;
    } else {
        odd = true;
    }
    edgeLength = rubiksSize -2;
    centerSize = edgeLength ** 2;
    if (!odd){
        numOfInnerSets = centerSize / 4;
        numOfEdgeSets = edgeLength / 2
    } else {
        numOfInnerSets = (centerSize - 1)/ 4;
        numOfEdgeSets = (edgeLength -1) / 2;
    }
    console.log(`Rubiks Size: ${rubiksSize}    Edge Length: ${edgeLength}`)
    console.log(`Center Size: ${centerSize}    Number of Inner Sets: ${numOfInnerSets}`);
    console.log(`Number of Edge Sets: ${numOfEdgeSets}`)
}


let reducer, innerSetMultiplier, edgeSetMultiplier, combinations;

const rubiksSolver = r => {
    calculateDimensions(r);
    edgeSetMultiplier = (factorial(24))**numOfEdgeSets
    if (odd) {
        reducer = (24**6)**numOfInnerSets 
        innerSetMultiplier = (factorial(24))**numOfInnerSets;
        combinations = (corners * centerEdges * innerSetMultiplier * edgeSetMultiplier) / reducer
        console.log(`A cube of size ${r} has ${combinations} different combinations`)
    } else {
        reducer = ((24**6)**((edgeLength/2)**2))*24
        innerSetMultiplier = factorial(24)**((edgeLength/2)**2);
        combinations = (corners * innerSetMultiplier * edgeSetMultiplier) / reducer
        console.log(`A cube of size ${r} has ${combinations} different combinations`)
    }
    
}

for (let i=2; i<10; i++){
    rubiksSolver(i)
}
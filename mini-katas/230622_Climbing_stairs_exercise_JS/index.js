// n stairs : possibilities
// 1 : 1
// 2 : 2
// 3 : 3
// 4 : 5
// 5 : 8
// 6 : 13
// -> Fibonacci sequence

climbStairs = (numStairs) => {

    let possibilities = []
    possibilities[0] = 1
    possibilities[1] = 1

    for (i = 2; i <= numStairs; i++) {
        possibilities[i] = possibilities[i-1] + possibilities[i-2]
    }
    
    console.log(possibilities.pop()) // <- method to return last element of an array
}

climbStairs(5)
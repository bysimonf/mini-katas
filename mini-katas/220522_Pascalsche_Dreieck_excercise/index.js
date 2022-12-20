// expecting a row index between 1 - 5
// 1. declare array with the size of rowNum
// 2. generate row by row 
//  first element is 1, last element is one
//  for values in between we need to look at previous row


// espected result per input:
// input/row 1 -> [1]
// input/row 2 -> [1, 1]
// input/row 3 -> [1, 2, 1]
// input/row 4 -> [1, 3, 3, 1]
// input/row 5 -> [1, 4, 6, 4, 1]



// returning the values of the row

returnPascalRows = (rowNum) => {
    

    let previousRowValues = []

    let rowValues = []

    if (rowNum == 1) {
        rowValues = [1]
    }

    else if (rowNum == 2) {
        rowValues = [1, 1]
    }

    else {
        rowValues[0] = 1
        rowValues[1] = 'x'
        rowValues[2] = 'x'
        rowValues[rowValues.length - 1] = 1
    }

    //rowValues[0] = 1

    console.log(rowValues)

}

returnPascalRows(4)


// ---------------------------------------------

// code a function for entered value 5 (can be applied for all scenarios then)
// create an array that stores all the result arrays -> corresponds the actual Pascal's Triangle
// create an array that has the length of the row's number
    // first and last value = 1
    // for values in between we need to look at previous row
        // we are looking at position 1 above and position 1 - 1 above; then position 2 above and position 2 - 1 above etc.
        // so we'll expect an array of 1, _, _, _, 1
// save the final array of the current row in the triangle array

returnPascalRows = (rowNum) => {

    let pascalTriangleArrays = new Array(rowNum)

    for (i = 0; i < rowNum; i++) { // <- this loop will build all the rows
        
        let rowValues = new Array(i+1)

        rowValues[0] = 1
        rowValues[rowValues.length - 1] = 1

        for (j = 1; j < rowValues.length - 1; j++) { // <- this loop will create the values between 1, ... ,1 if row number is > 2
                
            let aboveRowValues = pascalTriangleArrays[i-1]
                
            rowValues[j] = aboveRowValues[j] + aboveRowValues[j-1]
        }
        

        pascalTriangleArrays[i] = rowValues
    
    }

    console.log(pascalTriangleArrays)

}

returnPascalRows(5)
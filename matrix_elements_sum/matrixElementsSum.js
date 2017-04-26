export function matrixElementsSum(matrix) {
    var sum = 0;
    var badColumns = [];

    for(var j = 0; j < matrix.length; j++) {
        for(var i = 0; i < matrix[j].length; i++) {
            if(matrix[j][i] === 0 || badColumns[i]) {
                badColumns[i] = true;
            } else {
                sum += matrix[j][i]
            }
        }
    }

    return sum;
}

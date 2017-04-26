export function allLongestStrings(inputArray) {
    var outputArray = [];
    var len = inputArray.length;

    for(var i = 0; i < len; i++) {
        if(outputArray.length === 0 || inputArray[i].length > outputArray[0].length) {
            outputArray = [inputArray[i]];
        } else if (inputArray[i].length === outputArray[0].length) {
            outputArray.push(inputArray[i]);
        }
    }

    return outputArray;
}

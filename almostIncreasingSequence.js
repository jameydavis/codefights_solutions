export function almostIncreasingSequence(sequence) {
    var errorCount = 0;

    while (errorCount < 2) {
        if (sequence.length === 2) {
            return true;
        }

        if (sequence[0] < sequence[1] && sequence[1] < sequence[2]) {
            sequence.shift();
        } else if (sequence[1] < sequence[2]) {
            sequence.splice(0, 1);
            errorCount++;
        } else if (sequence[0] < sequence[2]) {
            sequence.splice(1, 1);
            errorCount++;
        } else if (sequence[0] < sequence[1]) {
            sequence.splice(2, 1);
            errorCount++;
        } else {
            errorCount = 2;
        }
    }
    return false;
}

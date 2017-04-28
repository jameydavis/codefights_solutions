export function commonCharacterCount(s1, s2) {
    var acc = 0;
    var temp1;
    var temp2;

    for(var i = 0; i < s1.length; i++) {
        for(var j = 0; j < s2.length; j++) {
            if(s1[i] === s2[j]) {
                acc++;
                temp1 = s2.slice(0, j);
                temp2 = s2.slice(j + 1, s2.length);
                s2 = temp1 + temp2;
                break;
            }
        }
    }
    return acc;
}


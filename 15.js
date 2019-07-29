/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let letters = ['a', 'e', 'i', 'o', 'u'];
    let i = 0;
    let j = s.length - 1;
    s = s.split('');
    while (i < j) {
        while (letters.indexOf(s[i].toLowerCase()) === -1 && i < j) {
            i++;
        }

        while (letters.indexOf(s[j].toLowerCase()) === -1 && j > i) {
            j--;
        }

        if (i < j) {
            let curr = s[i];
            s[i] = s[j];
            s[j] = curr;
        }
        i++;
        j--;
    }

    return s.join('');
};

console.log(reverseVowels("aA"))
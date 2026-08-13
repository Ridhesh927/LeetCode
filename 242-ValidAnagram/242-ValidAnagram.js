// Last updated: 8/13/2026, 8:44:41 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
   const countS = {};
   const countT = {};

   for(let char of s){
    if(countS[char]) {
        countS[char] = countS[char] + 1;
    }else {
        countS[char] = 1;
    }
   }
console.log(countS);

    for(let char of t) {
        if(countT[char]) {
            countT[char] = countT[char] + 1;
        }else {
            countT[char] =1;
        }
    }
    console.log(countT);

    for(let char in countS) {
        if(countS[char] !== countT[char]) {
            return false;
        }
    }
    return true;
};
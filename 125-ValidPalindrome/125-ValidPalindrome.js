// Last updated: 8/13/2026, 8:44:57 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const cleared = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left =0;
    let right = cleared.length - 1;

    while(left < right ) {

        if(cleared[left] !== cleared[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;

};
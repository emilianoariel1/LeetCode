/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let done = false;
    let num = 0;
    
    while(done == false){
        
        num++;

        if (num % n == 0 && num % 2 == 0) done = true;
        
    }

    return num;

    
};
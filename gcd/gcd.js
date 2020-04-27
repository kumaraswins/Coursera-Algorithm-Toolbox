/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function gcd_fast(a,b){
    var divident = Math.max(a,b);
    var divisor = Math.min(a,b);
    while(divisor != 0) {
        reminder =  divident%divisor;
        divident = divisor;
        divisor =  reminder
    }
    console.log(divident);
}

gcd_fast(parseInt(100000000000044), parseInt(4000000002323202))
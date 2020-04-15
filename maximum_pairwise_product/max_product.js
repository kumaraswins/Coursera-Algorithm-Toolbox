//nodejs
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

max_product =0
function max(arr){
    const n =  arr.length;
    for (var first = 0;first < n;first++){
        for(var second=first+1;second<n;second++){
            max_product = Math.max(max_product, arr[first]* arr[second])
        }
    }
    return max_product;
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine (line) {
    const count = parseInt(line.toString());
    console.log(fib(count));
    process.exit();
}

function fib(count){
    list = [0,1]
    for (var i=1;i<count-1;i++){

        list.push(parseInt(list[i-1]) + parseInt(list[i]))
    }
    return list;
}


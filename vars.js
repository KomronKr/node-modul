console.log('Startap: vars.js');

let x = 12 
let y = 80

function printX() {
    console.log('vars x: ', x)
}

function changsX(v) {
    x = v
}


module.exports = {
    x, y, printX, changsX
}
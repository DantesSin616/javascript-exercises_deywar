const fibonacci = function(countArg) {
   let count;

    // it's checking whether or not is a number
    if(typeof countArg !== 'number') {
        count = parseInt(countArg); 
    } else {
        count = countArg; // if it is a number it continues as normal, if str it changes it into int
    }

    if(count < 0) return "Oops"; // fibonacc doesn't have negative values 
    if(count == 0) return 0; 

    let firstPrev = 1; //? 
    let secondPrev = 0; //?

    for(let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;

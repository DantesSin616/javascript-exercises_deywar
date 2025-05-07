const sumAll = function(min, max) {
   let finalSum = 0; 

    for(let i = min; i <= max; i++){
        finalSum += i;
    };
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
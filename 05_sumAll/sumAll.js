const sumAll = function(min, max) {
    // Validate inputs
    if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR';
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';

    // Swap if min is greater than max
    if (min > max) [min, max] = [max, min];

    let finalSum = 0;
    for (let i = min; i <= max; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
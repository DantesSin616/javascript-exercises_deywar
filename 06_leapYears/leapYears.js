const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByHundred = year % 400 === 0;

    if (
        isYearDivisibleByFour &&
        !isCentury || isYearDivisibleByHundred
    ){
        return true;
    } else {
        return false;
    }
    
};
// Do not edit below this line
module.exports = leapYears;

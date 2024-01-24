// Code your solution in this file!

// returnFirstTwoDrivers(): Returns the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// returnLastTwoDrivers(): Returns the last two drivers from the passed-in array
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// selectingDrivers: An array containing the two above functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier(): Returns a function that multiplies a fare for a given value
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

// fareDoubler(): A function that doubles fares using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// fareTripler(): A function that triples fares using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers(): Takes an array of drivers and a function, and returns the result of the passed function
function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
}

// Exporting the functions for use in test suites or other modules
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
};
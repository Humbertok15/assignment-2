const fs = require('fs');

function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function findMinMax(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return sumNumbers(numbers) / numbers.length;
}

// Manual testing with file
const numberData = fs.readFileSync('data/sample-numbers.txt', 'utf-8')
  .split('\n')
  .map(Number);

console.log('Sum:', sumNumbers(numberData));
console.log('Min/Max:', findMinMax(numberData));
console.log('Average:', calculateAverage(numberData));

module.exports = {
  sumNumbers,
  findMinMax,
  calculateAverage
};

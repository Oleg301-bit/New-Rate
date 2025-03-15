'use strict';
/**
 *
 * @param {number} yourRate
 * @param {number} opponentRate
 * @param {number} differenceRate
 * @returns {Error}
 */
function calculateNewRate(yourRate, opponentRate) {
  if (
    typeof yourRate !== 'number' ||
    typeof opponentRate !== 'number' ||
    yourRate < 0 ||
    opponentRate < 0
  ) {
    return 'Error';
  }
  if (yourRate === 0) {
    return opponentRate;
  }
  const differenceRate = yourRate - opponentRate;
  if (differenceRate >= 0 && differenceRate <= 2) {
    return Number(yourRate + 2).toFixed(1);
  } else if (differenceRate > 2 && differenceRate < 20) {
    return Number(yourRate + 1).toFixed(1);
  } else if (differenceRate >= 20) {
    return Number(yourRate).toFixed(1);
  } else {
    return Number((opponentRate - yourRate + 5) / 3 + yourRate).toFixed(1);
  }
}
console.log(calculateNewRate(10, 10));
console.log(calculateNewRate(15, 14));
console.log(calculateNewRate(20, 18));
console.log(calculateNewRate(25, 10));
console.log(calculateNewRate(50, 30));
console.log(calculateNewRate('gfgfgfg', 30));
console.log(calculateNewRate(50, 'ffgfgfgfg', 20));
console.log(calculateNewRate(30, 50, -20));
console.log(calculateNewRate(0, 20, 0));
console.log(calculateNewRate(0, 5, 0));


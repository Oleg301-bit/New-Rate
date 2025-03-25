'use strict';
/**
 *
 * @param {number} yourRate
 * @param {number} opponentRate
 * @returns {number}
 */
function calculateNewRate(yourRate, opponentRate) {
  if (
    !isFinite(yourRate) ||
    !isFinite(opponentRate) ||
    yourRate < 0 ||
    opponentRate < 0
  ) {
    return 'Please check your input data';
  }

  if (yourRate === 0) {
    return opponentRate;
  }

  const differenceRate = yourRate - opponentRate;
  if (differenceRate >= 0 && differenceRate <= 2) {
    return +(yourRate + 2).toFixed(1);
  } else if (differenceRate > 2 && differenceRate < 20) {
    return +(yourRate + 1).toFixed(1);
  } else if (differenceRate >= 20) {
    return +yourRate.toFixed(1);
  }
  return +((Math.abs(differenceRate) + 5) / 3 + yourRate).toFixed(1);
}
console.log(calculateNewRate(10, 10));
console.log(calculateNewRate(10, 20));
console.log(calculateNewRate(15, 14));
console.log(calculateNewRate(20, 18));
console.log(calculateNewRate(25, 10));
console.log(calculateNewRate(50, 30));
console.log(calculateNewRate('gfgfgfg', 30));
console.log(calculateNewRate(50, 'ffgfgfgfg'));
console.log(calculateNewRate(30, 50));
console.log(calculateNewRate(0, 20));
console.log(calculateNewRate(0, 5));
console.log(calculateNewRate(NaN, 5));

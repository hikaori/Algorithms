// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === n * 2 - 1) {
    console.log(level);
    pyramid(n, row++);
  }
  const midpoint = Math.floor((n * 2 - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, add);
}

module.exports = pyramid;

// solution1
// function pyramid(n) {
//   const mid = Math.floor((n * 2 - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

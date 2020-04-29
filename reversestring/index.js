// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution1
  // return str.split('').reverse().join("");

  // solution2
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
    //debugger;
  }
  return reversed;

  // solution3
  // return str.split('').reduce((rev, char) => char + rev, '');
}

// when use "debugger" , need to call function manually
//reverse('asdf');

module.exports = reverse;

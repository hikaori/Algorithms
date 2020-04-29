// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const maxChars = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    maxChars[char] = maxChars[char] + 1 || 1;
  }
  for (let char in maxChars) {
    if (maxChars[char] > max) {
      max = maxChars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

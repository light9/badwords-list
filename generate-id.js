/**
 * Generate Indonesian data files from source wildcard patterns.
 */
const fs = require('fs');
const patterns = require('./lib/id/patterns.js');

function expandPattern(pattern, pos) {
  if (pos < pattern.length) {
    let curChar = pattern[pos];
    let nextPos = pos + 1;
    let repeat = false;
    let curStrings = [curChar];
    if (curChar === 'a') {
      curStrings.push('4');
    }
    if (curChar === 'i') {
      curStrings.push('1');
    }
    if (curChar === 'o') {
      curStrings.push('0');
    }
    if (curChar === 'e') {
      curStrings.push('3');
    }
    if (nextPos < pattern.length && pattern[nextPos] === '+') {
      repeat = true;
      nextPos = pos + 2;
      curStrings.push(curChar + curChar);
      curStrings.push(curChar + curChar + curChar);
    }

    let inners = expandPattern(pattern, nextPos);
    let result = [];
    inners.forEach(inner => {
      if (inner !== '.') {
        curStrings.forEach(x => result.push(x + inner));
      } else {
        curStrings.forEach(x => result.push(x));
      }
    })
    return result;
  } else {
    return ['.'];
  }
}

let array = []

patterns.forEach(pattern => {
  //let plain = pattern.replace(/\+/g, '');
  let plain = expandPattern(pattern, 0);
  array.push.apply(array, plain);
})

let arrayJsPath = 'lib/id/array.js';
let arrayJs = "module.exports = " + JSON.stringify(array, null, 2) + ";\n";
console.info('Writing', arrayJs.length, 'bytes to', arrayJsPath, '...')
fs.writeFile(arrayJsPath, arrayJs, err => {
  if (err) {
    console.error('Error:', err);
  }
});

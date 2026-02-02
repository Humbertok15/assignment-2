const fs = require('fs');

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

function findLongestWord(text) {
  if (!text) return '';
  const words = text.trim().split(/\s+/);
  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  , '');
}

function countLines(text) {
  if (!text) return 0;
  return text.split('\n').length;
}

// Manual testing with files
const sampleText = fs.readFileSync('data/sample-text.txt', 'utf-8');
console.log('Word count:', countWords(sampleText));
console.log('Longest word:', findLongestWord(sampleText));
console.log('Line count:', countLines(sampleText));

module.exports = {
  countWords,
  findLongestWord,
  countLines
};

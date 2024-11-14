// Time -> O(n) where n is the length of the string | Space -> O(1)

function firstNonRepeatingCharacter(string) {
  
  let characters = {};
  for (let i = 0; i < string.length; i++) {
    if (!characters.hasOwnProperty(string[i])) {
      characters[string[i]] = 0;
    }
    characters[string[i]]++;
  }
  for (let i = 0; i < string.length; i++) {
    if (characters[string[i]] === 1) {
      return i;
    }
  }
  return -1;
}

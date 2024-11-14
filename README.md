# First Non-Repeating Character

---
## Description

The `firstNonRepeatingCharacter` function identifies the first character in a given string that does not repeat. If such a character exists, it returns the index of this character; if all characters repeat, it returns `-1`. This function can be useful in text analysis or data processing scenarios where identifying unique elements is essential.

## Function Signature

```javascript
function firstNonRepeatingCharacter(string) -> number
```

## Parameters

- **string** (`String`): The input string in which the first non-repeating character needs to be identified.

## Returns

- **`number`**: The index of the first non-repeating character in the string. If all characters repeat, the function returns `-1`.

## Time and Space Complexity

- **Time Complexity**: `O(n)`, where `n` is the length of the string. The function uses two loops: the first loop builds a frequency map, and the second loop checks the map to find the first unique character.
- **Space Complexity**: `O(1)`, as the unique characters will be at most 26, not more than that. So, the space consumed will be at most O(26), equivalent to O(1). 

## Algorithm Explanation

1. **Character Frequency Counting**:
   - The function creates an empty object `characters` to store each character's frequency.
   - It iterates through each character in the string. If the character is not already in the object, it initializes it to `0` and then increments it.
2. **Identify First Unique Character**:
   - A second iteration checks the characters in the order they appear in the string.
   - It returns the index of the first character with a frequency of `1`, indicating it's non-repeating.
   - If no such character is found, the function returns `-1`.

## Examples

```javascript
firstNonRepeatingCharacter("abcab") // returns 2
// 'c' is the first character that does not repeat.

firstNonRepeatingCharacter("aabbcc") // returns -1
// All characters in the string repeat, so the function returns -1.

firstNonRepeatingCharacter("abcd") // returns 0
// 'a' is the first non-repeating character in the string.
```

## Edge Cases

- **Empty String**: If the input is an empty string `""`, the function will return `-1`.
- **All Characters Repeating**: If every character repeats, e.g., `"aabb"`, the function should return `-1`.
- **Single Character String**: If the input contains a single character, it should return `0` since it’s non-repeating by default.

## License

This code is available for use under the MIT License.

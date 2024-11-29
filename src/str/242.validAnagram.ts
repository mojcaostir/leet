/** Hash Table, String, Sorting
    
    Given two strings s and t, return true if t is an anagram of s, and false otherwise. 

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false

    Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
 */

function isAnagram(s: string, t: string): boolean {
        // If the lengths are different, they can't be anagrams
    if (s.length !== t.length) return false;

    // Create a map to count character frequencies
    const charCount: Record<string, number> = {};

    // Count frequencies in the first string
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract frequencies using the second string
    for (const char of t) {
        if (!charCount[char]) {
            return false; // If a character is not present or exceeds the count
        }
        charCount[char]--;
    }

    return true; // All counts should balance to zero
};
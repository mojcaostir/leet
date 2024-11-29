/** Hash Table, String
    
    Given two strings s and t, determine if they are isomorphic.

    Two strings s and t are isomorphic if the characters in s can be replaced to get t.

    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

    Example 1:
    Input: s = "egg", t = "add"
    Output: true
    Explanation:
    The strings s and t can be made identical by:
    Mapping 'e' to 'a'.
    Mapping 'g' to 'd'.

    Example 2:
    Input: s = "foo", t = "bar"
    Output: false
    Explanation:
    The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

    Example 3:
    Input: s = "paper", t = "title"
    Output: true

    Constraints:
    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.
 */

function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false; // Strings of different lengths can't be isomorphic
    }

    const sToTMap = new Map<string, string>();
    const tToSMap = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if there is a conflicting mapping for s -> t
        if (sToTMap.has(charS) && sToTMap.get(charS) !== charT) {
            return false;
        }

        // Check if there is a conflicting mapping for t -> s
        if (tToSMap.has(charT) && tToSMap.get(charT) !== charS) {
            return false;
        }

        // Establish the mappings
        sToTMap.set(charS, charT);
        tToSMap.set(charT, charS);
    }

    return true; // All characters are mapped consistently
}


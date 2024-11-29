/** Two Pointers, String, String Matching
    
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

    Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.

    Constraints:
    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.
 */

function strStr(haystack: string, needle: string): number {
    // Edge case: if needle is an empty string, return 0
    if (needle === "") return 0;

    const haystackLength = haystack.length;
    const needleLength = needle.length;

    // Loop through the haystack, ensuring there's enough room for needle
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        // Check if the substring of haystack matches needle
        if (haystack.substring(i, i + needleLength) === needle) {
            return i; // Return the starting index of the match
        }
    }

    return -1; // No match found
}
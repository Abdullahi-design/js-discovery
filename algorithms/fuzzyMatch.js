// Function to perform fuzzy matching between two strings
function fuzzyMatch(str1, str2) {
    const maxDistance = 2; // Set a maximum allowed edit distance
  
    // Helper function to calculate the Levenshtein distance between two strings
    function levenshteinDistance(a, b) {
      // Create a 2D array 'dp' to store intermediate values for Levenshtein distance
      const dp = Array.from(Array(a.length + 1), () => Array(b.length + 1).fill(0));
    //   console.log(dp, 'here');
  
      // Fill in the base cases for empty substrings
      for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
          if (i === 0) dp[i][j] = j;
          else if (j === 0) dp[i][j] = i;
          // If characters at current positions match, no edit needed, use previous value
          else if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
          // If characters don't match, calculate the minimum edit distance
          else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
  
      // Return the final Levenshtein distance between the two strings
      return dp[a.length][b.length];
    }
  
    // Calculate the Levenshtein distance between the lowercased input strings
    const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
    console.log(distance);
  
    // Return true if the Levenshtein distance is within the maximum allowed distance
    return distance <= maxDistance;
}
  
// Example usage:
const inputString = "A";
const databaseString = "a";

const isMatch = fuzzyMatch(inputString, databaseString);
console.log(isMatch); // Output: true
  
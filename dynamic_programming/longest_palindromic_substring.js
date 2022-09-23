// Q:5 - https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let longest = "";
  
  for (let i = 0; i < s.length; i++){
      // odd palindrome length
      let left = i, right = i;
      
      while (left >= 0 && right < s.length && s[left] === s[right]){
          if (right - left + 1 > longest.length){
              longest = s.slice(left, right + 1)
          }
          
          left -= 1;
          right += 1;
      }
      
      // even palindrome length
      left = i, right = i + 1;
      
      while (left >= 0 && right < s.length && s[left] === s[right]){
          if (right - left + 1 > longest.length){
              longest = s.slice(left, right + 1)
          }
          
          left -= 1;
          right += 1;
      }
      
  }
  
  return longest;
};
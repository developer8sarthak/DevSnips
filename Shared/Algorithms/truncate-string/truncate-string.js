/* Snippet Name: Truncate String | Use Case: Truncate a string to a specified length | Description: Truncates a string to a specified length, including an ellipsis if truncated. The final string will not exceed the specified length. */
const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  // Return the truncated string with '...'
  return str.slice(0, num > 3 ? num - 3 : num) + (num > 3 ? '...' : '');
};

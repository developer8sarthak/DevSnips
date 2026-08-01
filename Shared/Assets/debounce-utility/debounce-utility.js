/**
 * Snippet Name: Debounce Utility
 * Description: Delays rapid function calls until user input settles.
 * Author: DevSnips Contributors
 * Usage Example: const onInput = debounce(fetchResults, 250);
 */

const debounce = (callback, wait = 200) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), wait);
  };
};

export default debounce;

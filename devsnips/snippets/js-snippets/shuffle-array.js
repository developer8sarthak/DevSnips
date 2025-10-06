/* Snippet Name: Shuffle Array | Use Case: Randomize the order of elements in an array | Description: Shuffles an array in place using the Fisher-Yates algorithm for a uniform, unbiased shuffle. */
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/* Snippet Name: Has Duplicates in Array | Use Case: Check if an array has duplicate values | Description: A one-liner to check if an array contains duplicate values. */
const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

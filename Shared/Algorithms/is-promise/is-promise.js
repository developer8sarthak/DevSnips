/* Snippet Name: Is Promise | Use Case: Check if a value is a Promise | Description: A one-liner to check if a given value is a Promise. */
const isPromise = (value) => value && typeof value.then === 'function';

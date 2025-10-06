/* Snippet Name: Average of Numbers | Use Case: Calculate the average of multiple numbers | Description: A one-liner to calculate the average of a set of numbers. */
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

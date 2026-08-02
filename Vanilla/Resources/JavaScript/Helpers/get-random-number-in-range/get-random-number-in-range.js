/* Snippet Name: Get Random Number in Range | Use Case: Generate a random number within a specified range | Description: A one-liner to get a random number between two values (inclusive). */
const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/* Snippet Name: Is Date Valid | Use Case: Check if a given date is valid | Description: A one-liner to check if a given date is valid. */
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

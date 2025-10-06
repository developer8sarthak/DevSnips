/* Snippet Name: Is Valid JSON | Use Case: Check if a string is a valid JSON | Description: A one-liner to check if a string can be parsed as JSON. */
const isValidJSON = (str) => { try { JSON.parse(str); return true; } catch (e) { return false; } };

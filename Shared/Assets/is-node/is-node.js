/* Snippet Name: Is Node | Use Case: Check if the current environment is Node.js | Description: A one-liner to determine if the code is running in a Node.js environment. */
const isNode = () => typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

/* Snippet Name: Is Browser | Use Case: Check if the current environment is a browser | Description: A one-liner to determine if the code is running in a browser environment. */
const isBrowser = () => typeof window !== 'undefined' && typeof window.document !== 'undefined';

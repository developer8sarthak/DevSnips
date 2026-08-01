/* Snippet Name: Is Apple Device | Use Case: Detect if the user is on an Apple device | Description: A one-liner to check if the user's device is an Apple product. */
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

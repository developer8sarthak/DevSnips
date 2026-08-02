/* Snippet Name: Check for Touch Support | Use Case: Detect if the user's browser supports touch events | Description: A one-liner to check for touch event support in the current browser. */
const hasTouchSupport = () => 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch);

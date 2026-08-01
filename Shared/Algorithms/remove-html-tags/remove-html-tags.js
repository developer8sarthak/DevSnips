/* Snippet Name: Remove HTML Tags | Use Case: Strip HTML tags from a string | Description: A one-liner to remove all HTML tags from a string. This snippet is for browser environments only. */
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

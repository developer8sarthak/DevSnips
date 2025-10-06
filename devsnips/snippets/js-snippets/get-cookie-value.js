/* Snippet Name: Get Cookie Value | Use Case: Get the value of a cookie by its name | Description: A one-liner to extract the value of a cookie from document.cookie. */
const getCookieValue = (name) =>
  `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

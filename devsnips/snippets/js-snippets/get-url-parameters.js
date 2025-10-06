/* Snippet Name: Get URL Parameters | Use Case: Get URL parameters as an object | Description: A one-liner to get all URL query parameters as a key-value object. */
const getUrlParams = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

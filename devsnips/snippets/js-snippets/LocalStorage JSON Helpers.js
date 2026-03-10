/**
 * Snippet Name: Localstorage Json Helpers
 * Description: Reusable localstorage json helpers JavaScript utility snippet for frontend projects.
 * Author: DevSnips Contributors
 * Usage Example: Open `devsnips/snippets/js-snippets/LocalStorage JSON Helpers.js` and copy the snippet into your project.
 */

const storage={get(k){try{return JSON.parse(localStorage.getItem(k))}catch{return null}},set(k,v){localStorage.setItem(k,JSON.stringify(v))},remove(k){localStorage.removeItem(k)}}
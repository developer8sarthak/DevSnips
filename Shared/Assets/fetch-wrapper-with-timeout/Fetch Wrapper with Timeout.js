/**
 * Snippet Name: Fetch Wrapper With Timeout
 * Description: Reusable fetch wrapper with timeout JavaScript utility snippet for frontend projects.
 * Author: DevSnips Contributors
 * Usage Example: Open `devsnips/snippets/js-snippets/Fetch Wrapper with Timeout.js` and copy the snippet into your project.
 */

async function fetchWithTimeout(url,opts={},t=8000){
const controller=new AbortController();const id=setTimeout(()=>controller.abort(),t);
try{const res=await fetch(url,{...opts,signal:controller.signal});clearTimeout(id);if(!res.ok)throw new Error(res.statusText);return await res.json();}catch(e){throw e}
}
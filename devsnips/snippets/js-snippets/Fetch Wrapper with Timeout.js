async function fetchWithTimeout(url,opts={},t=8000){
const controller=new AbortController();const id=setTimeout(()=>controller.abort(),t);
try{const res=await fetch(url,{...opts,signal:controller.signal});clearTimeout(id);if(!res.ok)throw new Error(res.statusText);return await res.json();}catch(e){throw e}
}
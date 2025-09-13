function debounce(fn,ms=300){let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),ms);};}


// Usage
const onType=debounce(e=>console.log(e.target.value),350);
document.querySelector('#q').addEventListener('input',onType);
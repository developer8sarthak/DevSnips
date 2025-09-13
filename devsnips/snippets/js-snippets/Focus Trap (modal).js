function trapFocus(container){const focusable='a[href],button,input,textarea,select,[tabindex]:not([tabindex="-1"])';
const nodes=[...container.querySelectorAll(focusable)];if(!nodes.length) return;
const first=nodes[0],last=nodes[nodes.length-1];
function key(e){if(e.key!=='Tab')return;if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus()}}
container.addEventListener('keydown',key);return ()=>container.removeEventListener('keydown',key);
}
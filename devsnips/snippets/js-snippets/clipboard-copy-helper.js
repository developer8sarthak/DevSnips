/**
 * Snippet Name: Clipboard Copy Helper
 * Description: Copies text to clipboard with async API and fallback support.
 * Author: DevSnips Contributors
 * Usage Example: await copyToClipboard('hello world');
 */

const copyToClipboard = async (text) => {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);
  return copied;
};

export default copyToClipboard;

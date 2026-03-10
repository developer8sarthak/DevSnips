/**
 * Snippet Name: Local Storage Wrapper
 * Description: Safe JSON-based localStorage helper with get/set/remove methods.
 * Author: DevSnips Contributors
 * Usage Example: storage.set('theme', { mode: 'dark' });
 */

const storage = {
  get(key, fallback = null) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

export default storage;

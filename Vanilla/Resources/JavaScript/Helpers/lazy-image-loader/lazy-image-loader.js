/**
 * Snippet Name: Lazy Image Loader
 * Description: Loads images on demand using IntersectionObserver.
 * Author: DevSnips Contributors
 * Usage Example: lazyLoadImages(document.querySelectorAll('img[data-src]'));
 */

const lazyLoadImages = (images) => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const image = entry.target;
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
      obs.unobserve(image);
    });
  }, { rootMargin: '200px 0px' });

  images.forEach((image) => observer.observe(image));
};

export default lazyLoadImages;

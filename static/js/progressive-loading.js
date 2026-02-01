// Progressive Image Loading Handler
document.addEventListener('DOMContentLoaded', function() {
    // Get all lazy-loaded images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
    // Add loaded class when each image finishes loading
    lazyImages.forEach(function(img) {
      if (img.complete) {
        // Image already loaded
        img.classList.add('loaded');
      } else {
        // Add event listener for when image loads
        img.addEventListener('load', function() {
          img.classList.add('loaded');
        });
  
        // Handle error case
        img.addEventListener('error', function() {
          img.classList.add('loaded'); // Still show even if error
        });
      }
    });
  });
  
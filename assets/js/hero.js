const slider = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');

// Clone images for seamless transition
images.forEach(img => {
  const clone = img.cloneNode(true);
  slider.appendChild(clone);
});

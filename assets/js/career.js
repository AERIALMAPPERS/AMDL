const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

// Clone images for seamless transition
images.forEach(img => {
  const clone = img.cloneNode(true);
  slider.appendChild(clone);
});

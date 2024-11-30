document.addEventListener("DOMContentLoaded", () => {
    const modal = new bootstrap.Modal(document.getElementById("dynamicModal"));
    const modalImage = document.querySelector(".modal-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let images = [];
    let currentIndex = 0;

    // View button click handler
    document.querySelectorAll(".view-btn").forEach(button => {
      button.addEventListener("click", () => {
        const category = button.dataset.category;
        const gridImages = button.parentElement.querySelectorAll(".box img");

        images = Array.from(gridImages).map(img => img.src);
        currentIndex = 0;

        updateModalImage();
        modal.show();
      });
    });

    // Update modal image
    function updateModalImage() {
      modalImage.src = images[currentIndex];
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === images.length - 1;
    }

    // Navigation buttons
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) currentIndex--;
      updateModalImage();
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < images.length - 1) currentIndex++;
      updateModalImage();
    });
  });
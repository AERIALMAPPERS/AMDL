const stars = document.querySelectorAll('.stars span');
const ratingDisplay = document.getElementById('rating-display');
let rating = null; // Initialize rating variable

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('active');
    }
    rating = star.getAttribute('data-value');
    ratingDisplay.textContent = `Selected Rating: ${rating}`;
    console.log('Selected Rating:', rating); // Debugging
  });
});

///////////////////////////////
// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each question
faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling; // Get the corresponding answer

    // Toggle the display of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

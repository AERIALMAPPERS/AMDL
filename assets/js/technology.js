let currentIndex = 1;
    const totalTechnology = 9;

    function showTechnology(index) {
        // Hide all technology items
        const technologies = document.querySelectorAll('.technology');
        technologies.forEach((tech) => {
            tech.classList.remove('active');
        });

        // Remove active class from all dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });

        // Calculate the new index (looping back to the start if necessary)
        currentIndex = index > totalTechnology ? 1 : index < 1 ? totalTechnology : index;

        // Show the selected technology and activate the corresponding dot
        document.getElementById(`technology${currentIndex}`).classList.add('active');
        dots[currentIndex - 1].classList.add('active');
    }

    function nextTechnology() {
        currentIndex++;
        showTechnology(currentIndex);
    }

    function prevTechnology() {
        currentIndex--;
        showTechnology(currentIndex);
    }

    // Set an interval to automatically change Technology every 5 seconds
    setInterval(nextTechnology, 4000);
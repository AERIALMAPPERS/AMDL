
        let currentIndex = 1;
        const totalServices = 4;

        function showService(index) {
            // Hide all services
            const services = document.querySelectorAll('.service');
            services.forEach((service) => {
                service.classList.remove('active');
            });

            // Remove active class from all dots
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot) => {
                dot.classList.remove('active');
            });

            // Calculate the new index (looping back to the start if necessary)
            currentIndex = index > totalServices ? 1 : index < 1 ? totalServices : index;

            // Show the selected service and activate the corresponding dot
            document.getElementById(`service${currentIndex}`).classList.add('active');
            dots[currentIndex - 1].classList.add('active');
        }

        function nextService() {
            currentIndex++;
            showService(currentIndex);
        }

        function prevService() {
            currentIndex--;
            showService(currentIndex);
        }

        // Set an interval to automatically change services every 5 seconds
        // setInterval(nextService, 5000);
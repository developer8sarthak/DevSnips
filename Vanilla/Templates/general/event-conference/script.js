document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    function startCountdown() {
        const countdownElement = document.getElementById('countdown-timer');
        if (!countdownElement) return;

        // Set the date for the conference (e.g., 30 days from now)
        const conferenceDate = new Date();
        conferenceDate.setDate(conferenceDate.getDate() + 30);
        conferenceDate.setHours(9, 0, 0, 0);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        function updateTimer() {
            const now = new Date().getTime();
            const distance = conferenceDate - now;

            if (distance < 0) {
                clearInterval(timerInterval);
                countdownElement.innerHTML = "<h2>The event has started!</h2>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call
    }

    startCountdown();

    // Schedule Tabs
    window.openDay = function(evt, dayName) {
        const tabcontent = document.getElementsByClassName("tab-content");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            tabcontent[i].classList.remove("active");
        }

        const tablinks = document.getElementsByClassName("tab-link");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        document.getElementById(dayName).style.display = "block";
        document.getElementById(dayName).classList.add("active");
        evt.currentTarget.classList.add("active");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Speaker card hover effect for touch devices
    document.querySelectorAll('.speaker-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            // Allows hover effect to work on touch
        });
    });
});
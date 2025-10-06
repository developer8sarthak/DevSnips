document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Integration Logos Carousel
    const logosContainer = document.querySelector('.logos-carousel .logo-slide');
    if (logosContainer) {
        // Clone logos to create a seamless loop
        const logos = logosContainer.querySelectorAll('img');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            logosContainer.appendChild(clone);
        });
        // This is a simple CSS-driven animation. If more complex controls are needed,
        // a library like Swiper.js or a custom JS implementation would be better.
    }


    // Testimonial Carousel
    const testimonialContainer = document.querySelector('.testimonial-carousel');
    if (testimonialContainer) {
        const testimonials = testimonialContainer.querySelectorAll('.testimonial');
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }

        // Initially, hide all but the first testimonial
        if (testimonials.length > 1) {
             testimonials.forEach((testimonial, i) => {
                if (i !== 0) testimonial.style.display = 'none';
            });
            // Change testimonial every 5 seconds
            setInterval(nextTestimonial, 5000);
        }
    }
});
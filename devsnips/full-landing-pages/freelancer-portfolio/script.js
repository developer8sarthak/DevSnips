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

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            testimonialSlides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }

        // Show the first slide initially
        showSlide(currentSlide);

        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // Animate progress bars on scroll
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress');

    function animateProgress() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            // Trigger reflow
            void bar.offsetWidth;
            bar.style.width = width;
        });
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateProgress();
            observer.unobserve(skillsSection); // Animate only once
        }
    }, { threshold: 0.5 });

    if(skillsSection){
      observer.observe(skillsSection);
    }

});
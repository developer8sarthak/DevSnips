document.addEventListener('DOMContentLoaded', function() {
    const pricingSwitch = document.getElementById('pricing-switch');
    const pricingPlans = document.querySelectorAll('.pricing-plan');

    if (pricingSwitch) {
        pricingSwitch.addEventListener('change', function() {
            const isYearly = this.checked;

            pricingPlans.forEach(plan => {
                const priceElement = plan.querySelector('.price');
                const monthlyPrice = plan.getAttribute('data-monthly-price');
                const yearlyPrice = plan.getAttribute('data-yearly-price');

                if (isYearly) {
                    // Assuming yearly price is a total, you might want to show per month
                    // For this example, we just show the total.
                    const yearlyTotal = parseFloat(yearlyPrice.replace('$', ''));
                    priceElement.innerHTML = `$${yearlyTotal / 12}<span class="term">/mo</span>`; // Show monthly price for yearly plan
                } else {
                    priceElement.textContent = monthlyPrice;
                }
            });
        });
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
});
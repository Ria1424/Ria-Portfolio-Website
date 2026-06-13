document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Page Load Transition
    const mainContent = document.querySelector('main.main-content');
    if (mainContent) {
        // Delay slightly for smooth rendering
        setTimeout(() => {
            mainContent.classList.add('loaded');
        }, 50);
    }

    // 2. Responsive Hamburger Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Close menu if a nav link is clicked (useful on mobile anchor jumps)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // 3. Contact Form Submission Logic (Mock handling)
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values (can be used for backend API in the future)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log('Sending message:', { name, email, subject, message });

            // Simulate server network delays
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="btn-text">Sending...</span> <i class="fa-solid fa-spinner fa-spin btn-icon"></i>';

            setTimeout(() => {
                // Show success banner, reset fields, restore button
                contactForm.reset();
                formSuccess.classList.remove('hidden');
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Auto hide success banner after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            }, 1200);
        });
    }

    // 4. Smooth scroll to anchor link targets
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefTarget = this.getAttribute('href');
            if (hrefTarget === '#') return;

            const targetElement = document.querySelector(hrefTarget);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

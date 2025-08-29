function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        function handleFormSubmission(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            event.target.reset();
        }

        function smoothScroll(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function handleScroll() {
            const scrollToTopButton = document.getElementById('scroll-to-top');
            if (window.scrollY > 200) {
                scrollToTopButton.classList.remove('hidden');
            } else {
                scrollToTopButton.classList.add('hidden');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', toggleMobileMenu);
            }

            // Form submission (example)
            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', handleFormSubmission);
            }

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', smoothScroll);
            });

            // Scroll to top button
            const scrollToTopButton = document.getElementById('scroll-to-top');
            if (scrollToTopButton) {
                scrollToTopButton.addEventListener('click', scrollToTop);
                window.addEventListener('scroll', handleScroll);
            }
        });
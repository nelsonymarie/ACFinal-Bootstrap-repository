document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/';

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

        // Fade-in animation for the footer as the user scrolls towards the bottom
        const footer = document.querySelector('footer');
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });

    // Adjusted smooth scrolling for navigation links
    const navbarLinks = document.querySelectorAll('#navbar a');
    for (let link of navbarLinks) {
        link.addEventListener('click', function (e) {
            if (isIndexPage) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = 'index.html' + targetId;
                }
            }
        });
    }
});

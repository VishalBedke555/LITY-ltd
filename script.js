document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const contactForm = document.getElementById('contactForm');
    const footerLinks = document.querySelectorAll('.footer-section a[data-page]');

    function showPage(pageName) {
        pages.forEach(page => {
            page.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            showPage(pageName);
            window.location.hash = pageName;
        });
    });

    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            showPage(pageName);
            window.location.hash = pageName;
        });
    });

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            console.log('Form submitted:', formData);

            alert('Thank you for your message! We will get back to you soon.');

            contactForm.reset();
        });
    }

    const hash = window.location.hash.substring(1);
    if (hash) {
        showPage(hash);
    }

    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showPage(hash);
        }
    });
});

function navigateToPage(pageName) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    window.location.hash = pageName;
}

document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    if (window.innerWidth <= 768 &&
        navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});
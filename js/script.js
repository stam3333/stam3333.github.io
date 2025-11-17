document.addEventListener('DOMContentLoaded', function() {
    const pageContainer = document.getElementById('page-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const brandLink = document.querySelector('.brand-link');
    
    let currentPage = 'home';

    // Load page content from HTML file
    async function loadPage(pageName) {
        try {
            const response = await fetch(`./pages/${pageName}.html`);
            if (response.ok) {
                const content = await response.text();
                pageContainer.innerHTML = content;
                currentPage = pageName;
                updateNavigation(pageName);
            } else {
                pageContainer.innerHTML = '<p>Page not found.</p>';
            }
        } catch (error) {
            console.error('Error loading page:', error);
            pageContainer.innerHTML = '<p>Error loading page.</p>';
        }
    }

    // Update navigation highlight
    function updateNavigation(pageName) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === pageName);
        });
    }

    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            loadPage(target);
        });
    });

    // Handle brand/logo click
    if (brandLink) {
        brandLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage('home');
        });
    }

    // Load home page on init
    loadPage('home');
    
    // Auto-cycle through pages every 5 seconds
    const pageOrder = ['home', 'tree', 'photo'];
    let currentPageIndex = 0;
    setInterval(() => {
        currentPageIndex = (currentPageIndex + 1) % pageOrder.length;
        loadPage(pageOrder[currentPageIndex]);
    }, 5000);
});

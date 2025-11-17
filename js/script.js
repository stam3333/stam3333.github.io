document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    function showSection(id) {
        sections.forEach(s => s.classList.toggle('active', s.id === id));
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === id));
        // ensure contact test panel active when contact clicked
        if (id === 'contact') {
            document.querySelectorAll('.contact-panel').forEach(p => p.classList.remove('active'));
            const panel = document.getElementById('contact-test');
            if (panel) panel.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            const sub = link.dataset.sub;
            showSection(target);
            if (sub) {
                // open the corresponding contact panel when submenu provided
                document.querySelectorAll('.contact-panel').forEach(p => p.classList.remove('active'));
                const panel = document.getElementById(target + '-' + sub);
                if (panel) panel.classList.add('active');
            }
        });
    });

    // handle nav submenu links (if any separate elements)
    const navSubLinks = document.querySelectorAll('.nav-sub-link');
    navSubLinks.forEach(slink => {
        slink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = slink.dataset.target;
            const sub = slink.dataset.sub;
            showSection(target);
            if (sub) {
                document.querySelectorAll('.contact-panel').forEach(p => p.classList.remove('active'));
                const panel = document.getElementById(target + '-' + sub);
                if (panel) panel.classList.add('active');
            }
        });
    });

    // Close submenu when clicking outside
    document.addEventListener('click', (e) => {
        const inside = e.target.closest('.has-sub');
        if (!inside) {
            hasSubs.forEach(li => li.classList.remove('open'));
        }
    });

    // Contact tab handling
    const contactTabs = document.querySelectorAll('.contact-tab');
    contactTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            contactTabs.forEach(t => t.classList.toggle('active', t === tab));
            const tabName = tab.dataset.tab;
            document.querySelectorAll('.contact-panel').forEach(p => p.classList.toggle('active', p.id === ('contact-' + tabName)));
        });
    });

    // Start on Home
    showSection('home');
    
    // Auto-cycle through pages every 4 seconds
    const pageOrder = ['home', 'tree', 'photo', 'contact'];
    let currentPageIndex = 0;
    setInterval(() => {
        currentPageIndex = (currentPageIndex + 1) % pageOrder.length;
        showSection(pageOrder[currentPageIndex]);
    }, 4000);
});

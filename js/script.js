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
            showSection(target);
        });
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

    // Original interactive message logic (moved from old script)
    const messageBtn = document.getElementById('messageBtn');
    const message = document.getElementById('message');
    if (messageBtn && message) {
        const messages = [
            'Welcome to my website!',
            'You clicked the button!',
            'This is interactive!',
            'Hosted on GitHub Pages!',
            'Static websites rock!'
        ];
        let clickCount = 0;
        messageBtn.addEventListener('click', function() {
            clickCount++;
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.textContent = randomMessage + ' (Clicks: ' + clickCount + ')';
        });
    }
    
    // Start on Home
    showSection('home');
});

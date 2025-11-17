document.addEventListener('DOMContentLoaded', function() {
    const messageBtn = document.getElementById('messageBtn');
    const message = document.getElementById('message');
    
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
});

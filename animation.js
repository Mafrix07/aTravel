document.addEventListener('DOMContentLoaded', () => {
    const createFallingElement = () => {
        const element = document.createElement('div');
        const isRose = Math.random() > 0.7; // 30% chance of being a rose

        if (isRose) {
            element.classList.add('rose');
            element.innerHTML = '🌹';
        } else {
            element.classList.add('petal');
        }
        
        // Start position and animation duration
        const startX = Math.random() * window.innerWidth;
        const duration = (isRose ? Math.random() * 7 + 10 : Math.random() * 5 + 8); // Roses fall a bit slower (10-17s), petals (8-13s)
        const delay = Math.random() * 7;

        element.style.left = `${startX}px`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        
        // Add random horizontal drift
        const drift = (Math.random() - 0.5) * 300; // -150px to +150px
        element.style.setProperty('--drift', `${drift}px`);

        document.body.appendChild(element);

        // Remove element after animation finishes
        setTimeout(() => {
            element.remove();
        }, (duration + delay) * 1000);
    };

    const initialElements = 20;
    for (let i = 0; i < initialElements; i++) {
        setTimeout(createFallingElement, i * 400);
    }
    
    // Continuously create new elements
    setInterval(createFallingElement, 1500);
});

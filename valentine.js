document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');

    let confetti = [];
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#fb6f92'];

    // --- Fleeing "No" Button Logic ---
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = '1000';
    });

    // --- Confetti Logic ---
    function createConfetti() {
        for (let i = 0; i < 150; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 3 + 2,
                angle: Math.random() * 6.28,
                rotation: Math.random() * 0.2 - 0.1
            });
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((p, i) => {
            p.y += p.speed;
            p.angle += p.rotation;
            
            ctx.fillStyle = p.color;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            if (p.y > canvas.height) {
                confetti[i].y = -20;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    yesBtn.addEventListener('click', () => {
        responseMessage.textContent = "Yay! Je suis si heureux ! ❤️ C'est le plus beau des cadeaux.";
        responseMessage.style.display = 'block';
        responseMessage.style.fontSize = '1.5rem';
        responseMessage.style.color = '#ff4d6d';
        responseMessage.style.fontWeight = 'bold';
        
        // Hide buttons
        document.querySelector('.buttons').style.display = 'none';

        // Start confetti
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createConfetti();
        drawConfetti();
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});

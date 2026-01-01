
const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
    snowflakes = [];
    let snowflakeCount = 200;
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4 + 1,
            density: Math.random() + 1
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(191, 174, 159, 0.7)"; /* Using theme's accent color with transparency */
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let flake = snowflakes[i];
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        let flake = snowflakes[i];
        flake.y += flake.density;
        
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    }
}

function animate() {
    drawSnowflakes();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createSnowflakes();
});

createSnowflakes();
animate();

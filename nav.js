document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <nav class="main-nav">
            <ul class="nav-links">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="noel.html">✨ Noël ✨</a></li>
                <li><a href="nouvel_an.html">🎉 Bonne Année ! 🎉</a></li>
                <li><a href="pourquoi.html">Pourquoi ce site ?</a></li>
                <li><a href="qualites.html">Ce que j'aime chez toi</a></li>
                <li><a href="journey.html">Souvenirs</a></li>
                <li><a href="galerie.html">Galerie</a></li>
                <li><a href="lettre.html">Un Message</a></li>
                <li><a href="would-you-be-my-valentine.html">Surprise !!</a></li>
            </ul>
        </nav>
    `;

    // Insert navigation at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Set active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }

        // Add fade-out transition logic (moved from main.js to be more global)
        link.addEventListener('click', (e) => {
            if (linkPage === currentPage || link.getAttribute('href').startsWith('#')) {
                return;
            }

            e.preventDefault();
            const destination = link.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = destination;
            }, 500);
        });
    });
});

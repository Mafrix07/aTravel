document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        // Don't add listener to the link of the current page
        if (linkPage === currentPage) {
            return;
        }

        link.addEventListener('click', (e) => {
            // Prevent instant navigation
            e.preventDefault(); 
            const destination = link.href;

            // Add the fade-out class to the body
            document.body.classList.add('fade-out');

            // Wait for the animation to finish, then navigate
            setTimeout(() => {
                window.location.href = destination;
            }, 500); // This duration should match the fadeOut animation time
        });
    });

    // --- Pensée du Jour Logic ---
    const dailyThoughts = [
        "Chaque jour est une nouvelle chance d'écrire une belle histoire ensemble.",
        "Le bonheur est souvent un choix, et choisir de te connaître fut le plus beau.",
        "Les petites attentions sont les grandes preuves de l'affection.",
        "Un sourire est une lumière que l'on offre sans jamais s'éteindre.",
        "Chaque instant passé à penser à toi est un instant de bonheur volé au temps.",
        "La vie est plus douce quand on la partage avec une personne spéciale.",
        "L'amitié est une âme en deux corps, et parfois, elle se transforme en quelque chose de plus grand.",
        "La magie est de croire en soi, si tu peux faire cela, tu peux faire n'importe quoi.",
        "Le plus grand voyage est celui qui nous ramène au cœur de l'autre.",
        "Les étoiles brillent pour éclairer nos rêves les plus chers.",
        "La tendresse est le langage silencieux du cœur.",
        "Être à tes côtés, c'est comme trouver la mélodie parfaite dans le silence.",
        "Le temps passe, mais l'essentiel demeure: les liens qui nous unissent.",
        "Dans le jardin de la vie, tu es la plus belle des fleurs.",
        "Chaque jour est une page blanche, écrivons-y de belles lignes.",
        "La douceur de ton regard est une invitation au voyage.",
        "Les plus belles histoires commencent par un simple bonjour.",
        "Un petit geste, une grande émotion, voilà la recette du bonheur.",
        "La vie est un écho, tu reçois ce que tu donnes.",
        "Ta présence illumine mon quotidien, comme le soleil après la pluie."
    ];

    const displayDailyThought = () => {
        const thoughtElement = document.getElementById('daily-thought');
        if (thoughtElement) {
            const today = new Date();
            const startOfYear = new Date(today.getFullYear(), 0, 0);
            const diff = today - startOfYear;
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);

            const thoughtIndex = dayOfYear % dailyThoughts.length;
            thoughtElement.textContent = dailyThoughts[thoughtIndex];
        }
    };

    // Call the function on page load for the homepage
    if (currentPage === 'index.html' || currentPage === '') { // Check for both index.html and root path
        displayDailyThought();
    }
});

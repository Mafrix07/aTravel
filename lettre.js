document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-message');
    const loveMessage = document.getElementById('love-message');

    if (toggleButton && loveMessage) {
        toggleButton.addEventListener('click', () => {
            loveMessage.classList.toggle('love-message-visible');
            if (loveMessage.classList.contains('love-message-visible')) {
                toggleButton.textContent = "Fermer le message";
            } else {
                toggleButton.textContent = "Ouvrir le message";
            }
        });
    }
});
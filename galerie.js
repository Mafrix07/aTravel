document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImage");
    const modalVideo = document.getElementById("modalVideo");
    const captionText = document.getElementById("caption");
    const photoItems = document.querySelectorAll(".photo-item");

    photoItems.forEach(item => {
        item.onclick = function() {
            const itemType = this.getAttribute('data-type');
            const caption = this.querySelector('figcaption');
            
            modal.style.display = "block";
            captionText.innerHTML = caption.innerHTML;

            if (itemType === 'image') {
                const img = this.querySelector('.grid-img');
                modalImg.src = img.src;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (itemType === 'video') {
                const videoSrc = this.getAttribute('data-src');
                modalVideo.src = videoSrc;
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
                modalVideo.play();
            }
        }
    });

    const closeBtn = document.querySelector(".close-btn");

    function closeModal() {
        modal.style.display = "none";
        modalVideo.pause(); // Pause video when modal is closed
        modalVideo.src = ""; // Reset src to stop download
    }

    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});

let slideIndex = 0;

function showVideos() {
    const videos = document.querySelectorAll('.video');
    const titles = document.querySelectorAll('.video-title'); // Seleciona todos os títulos
    videos.forEach((video, index) => {
        // Usa a classe 'active' para mostrar o vídeo atual
        video.classList.toggle('active', index === slideIndex);
        
        if (index === slideIndex) {
            video.style.display = 'block'; // Mostra o vídeo ativo
            titles[index].style.display = 'block'; // Mostra o título correspondente
        } else {
            video.style.display = 'none'; // Esconde vídeos inativos
            titles[index].style.display = 'none'; // Esconde o título correspondente
            video.pause(); // Para os vídeos que não estão ativos
        }
    });
}

function moveCarrossel(n) {
    const videos = document.querySelectorAll('.video');
    slideIndex = (slideIndex + n + videos.length) % videos.length; 
    showVideos();
}

// Inicializa mostrando o primeiro vídeo
document.addEventListener("DOMContentLoaded", () => {
    showVideos();
});

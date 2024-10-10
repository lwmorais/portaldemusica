let slideIndex = 0;

function showVideos() {
    const videos = document.querySelectorAll('.video');
    const titles = document.querySelectorAll('.video-title');
    videos.forEach((video, index) => {

        video.classList.toggle('active', index === slideIndex);
        
        if (index === slideIndex) {
            video.style.display = 'block';
            titles[index].style.display = 'block';
        } else {
            video.style.display = 'none'; 
            titles[index].style.display = 'none'; 
            video.pause(); 
        }
    });
}

function moveCarrossel(n) {
    const videos = document.querySelectorAll('.video');
    slideIndex = (slideIndex + n + videos.length) % videos.length; 
    showVideos();
}


document.addEventListener("DOMContentLoaded", () => {
    showVideos();
});

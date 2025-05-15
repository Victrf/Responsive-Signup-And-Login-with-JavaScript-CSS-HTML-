document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".bg-video");
    const gradientLayer = document.querySelector(".gradient-layer");
    const background = document.querySelector(".background");

    let showVideo = false;

    function toggleBackground() {
        if (showVideo) {
            // Switch back to default gradient/boxes
            video.style.opacity = "0";
            gradientLayer.style.opacity = "1";
            background.style.animation = "gradientAnimation 10s infinite alternate";
        } else {
            // Switch to video background
            video.style.opacity = "1";
            gradientLayer.style.opacity = "0.5";
            background.style.animation = "none";  // Stop gradient animation
        }
        showVideo = !showVideo;
    }

    // Change background every 10 seconds
    setInterval(toggleBackground, 10000);
});

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "https://vmkt.vedantu.com/homepage/webslide1.png",
        "https://vmkt.vedantu.com/homepage/webslide3.png",
        "https://vmkt.vedantu.com/homepage/webslide2.png"
    ];
    let currentIndex = 0;
    const imageElement = document.querySelector(".slider-image");

    function updateImage() {
        imageElement.src = images[currentIndex];
        imageElement.classList.add("active");
    }

    function startSlider() {
        setInterval(() => {
            imageElement.classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            setTimeout(updateImage, 1000); // Delay to match the transition
        }, 3000); // Change image every 3 seconds
    }

    updateImage();
    startSlider();
});

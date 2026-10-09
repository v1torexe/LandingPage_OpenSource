document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll(".image");

    images.forEach((image) => {
        // Interação para Desktop (Hover)
        image.addEventListener("mouseenter", () => {
            images.forEach((item) => {
                item.classList.remove("active");
            });
            image.classList.add("active");
        });

        // Interação para Mobile (Clique/Toque)
        image.addEventListener("click", () => {
            images.forEach((item) => {
                item.classList.remove("active");
            });
            image.classList.add("active");
        });
    });
});
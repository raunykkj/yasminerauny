document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    // Botão surpresa
    const specialButton = document.getElementById("specialButton");
    const specialMessage = document.getElementById("specialMessage");

    if (specialButton && specialMessage) {
        specialButton.addEventListener("click", function () {
            specialMessage.classList.toggle("hidden");
            specialMessage.style.opacity = "1";
            specialMessage.style.transform = "scale(1)";
        });
    }

    // Música de fundo ao clicar no botão de coração
    const floatingHeart = document.getElementById("floatingHeart");
    const loveMusic = document.getElementById("loveMusic");

    floatingHeart.addEventListener("click", function () {
        if (loveMusic.paused) {
            loveMusic.play();
            floatingHeart.innerHTML = "🎶"; // Ícone de música
        } else {
            loveMusic.pause();
            floatingHeart.innerHTML = "💖"; // Ícone de coração
        }
        
    });
});

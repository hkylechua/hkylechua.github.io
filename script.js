// ===== Parallax Effect =====
window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});

// ===== Scroll Fade-In Animation =====
const fadeEls = document.querySelectorAll(".fade-in");

function checkFade() {
    const triggerBottom = window.innerHeight * 0.9;

    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

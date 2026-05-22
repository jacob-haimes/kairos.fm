(function () {
  function initCarousel(carousel) {
    const track = carousel.querySelector(".team-carousel-track");
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");
    const dotsContainer = carousel.querySelector("[data-carousel-dots]");

    if (slides.length < 2) {
      prevBtn?.remove();
      nextBtn?.remove();
      return;
    }

    let currentIndex = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to team member ${i + 1}`);
      dot.className = "rounded-full transition";
      dot.style.cssText =
        "width: 8px; height: 8px; background: rgba(255,255,255,0.3); border: none; cursor: pointer; padding: 0;";
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    });
    const dots = Array.from(dotsContainer.children);

    function goTo(i) {
      currentIndex = Math.max(0, Math.min(slides.length - 1, i));
      slides[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      updateDots();
    }

    function updateDots() {
      dots.forEach((d, j) => {
        if (j === currentIndex) {
          d.style.cssText =
            "width: 24px; height: 8px; background: rgb(255,255,255); border: none; cursor: pointer; padding: 0; border-radius: 9999px; transition: all .2s;";
        } else {
          d.style.cssText =
            "width: 8px; height: 8px; background: rgba(255,255,255,0.3); border: none; cursor: pointer; padding: 0; border-radius: 9999px; transition: all .2s;";
        }
      });
    }

    // Sync index when user manually swipes
    let scrollTimer;
    track.addEventListener(
      "scroll",
      () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const trackRect = track.getBoundingClientRect();
          const center = trackRect.left + trackRect.width / 2;
          let best = 0,
            bestDist = Infinity;
          slides.forEach((s, i) => {
            const r = s.getBoundingClientRect();
            const d = Math.abs(r.left + r.width / 2 - center);
            if (d < bestDist) {
              bestDist = d;
              best = i;
            }
          });
          currentIndex = best;
          updateDots();
        }, 100);
      },
      { passive: true },
    );

    prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
    nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

    updateDots();
  }

  document.querySelectorAll("[data-team-carousel]").forEach(initCarousel);
})();

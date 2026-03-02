(function () {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

document.addEventListener("DOMContentLoaded", () => {
  const curtain = document.getElementById("curtain");
  const video = document.getElementById("curtainVideo");
  const skipBtn = document.getElementById("skipBtn");
  const pageContent = document.getElementById("pageContent");
  const tapHint = document.getElementById("tapHint");

  if (!curtain || !video || !skipBtn || !pageContent) return;

  function revealHome() {
    // 🔇 STOP SOUND
    video.pause();
    video.currentTime = 0;
    video.muted = true;

    curtain.classList.add("hidden");
    pageContent.classList.remove("hidden-content");
    pageContent.classList.add("visible-content");

    setTimeout(() => {
      curtain.style.display = "none";
    }, 650);
  }

  // Skip button
  skipBtn.addEventListener("click", revealHome);

  // Autoplay muted (allowed)
  video.muted = true;
  video.play().catch(() => {});

  // Enable sound on first tap
  function enableSoundOnce() {
    video.muted = false;
    video.play().catch(() => {});
    if (tapHint) tapHint.style.display = "none";
    window.removeEventListener("pointerdown", enableSoundOnce);
  }
  window.addEventListener("pointerdown", enableSoundOnce, { once: true });

  // When video finishes naturally
  video.addEventListener("ended", revealHome);
});
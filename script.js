(function () {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// Curtain intro on Home (index.html)
document.addEventListener("DOMContentLoaded", () => {
  const curtain = document.getElementById("curtain");
  const video = document.getElementById("curtainVideo");
  const skipBtn = document.getElementById("skipBtn");
  const pageContent = document.getElementById("pageContent");
  const tapHint = document.getElementById("tapHint");

  // If we're not on the home page (or elements not present), do nothing
  if (!curtain || !video || !skipBtn || !pageContent) return;

  function revealHome() {
    curtain.classList.add("hidden");
    pageContent.classList.remove("hidden-content");
    pageContent.classList.add("visible-content");

    // Actually remove it after fade so it doesn't sit on top
    setTimeout(() => {
      curtain.style.display = "none";
    }, 650);
  }

  // Always allow skip
  skipBtn.addEventListener("click", revealHome);

  // Try to autoplay muted (allowed)
  video.muted = true;
  video.play().catch(() => {
    // If autoplay fails, skip still works
  });

  // Enable sound + restart playback on first user interaction
  function enableSoundOnce() {
    // Some browsers like: play muted first, then unmute
    video.muted = false;
    video.play().catch(() => {});
    if (tapHint) tapHint.style.display = "none";
    window.removeEventListener("pointerdown", enableSoundOnce);
  }
  window.addEventListener("pointerdown", enableSoundOnce, { once: true });

  // When video ends, reveal home
  video.addEventListener("ended", revealHome);
});
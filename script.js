(function () {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

(function () {
  const curtain = document.getElementById("curtain");
  const video = document.getElementById("curtainVideo");
  const skipBtn = document.getElementById("skipBtn");
  const pageContent = document.getElementById("pageContent");

  if (!curtain || !video || !skipBtn || !pageContent) return;

  function showHome() {
    curtain.classList.add("hidden");
    pageContent.classList.remove("hidden-content");
    pageContent.classList.add("visible-content");
  }

  video.addEventListener("ended", showHome);
  skipBtn.addEventListener("click", showHome);

  // Start muted autoplay (allowed by browsers)
  video.play().catch(() => {});
})();
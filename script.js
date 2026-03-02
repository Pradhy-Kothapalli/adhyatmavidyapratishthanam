(function () {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

document.addEventListener("click", function () {
  const mantraVideo = document.getElementById("bg-audio");
  if (mantraVideo) {
    mantraVideo.muted = false;   // enable sound
    mantraVideo.play().catch(() => {});
  }
}, { once: true });
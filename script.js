(function () {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

function startMantraOnce() {
  const mantraVideo = document.getElementById("bg-audio");
  if (!mantraVideo) return;

  mantraVideo.muted = false;
  mantraVideo.play().catch(() => {});
  window.removeEventListener("pointerdown", startMantraOnce);
}

window.addEventListener("pointerdown", startMantraOnce);
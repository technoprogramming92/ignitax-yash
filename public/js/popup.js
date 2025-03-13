// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("popup");
  let closeBtn = document.getElementById("popup-close");

  closeBtn.addEventListener("click", function () {
    // Fade out the popup before hiding it
    popup.style.opacity = "0";
    setTimeout(function () {
      popup.style.display = "none";
    }, 500);
  });
});

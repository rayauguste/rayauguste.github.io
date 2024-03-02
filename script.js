document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener("scroll", function() {
      var navSection = document.querySelector(".nav-section");
      if (window.scrollY > 250) {
        navSection.classList.remove("hide");
      } else {
        navSection.classList.add("hide");
      }
    });
  });
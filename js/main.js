/* main.js — mobile menu only (progressive enhancement).
   The site works without JavaScript; this just opens/closes the
   dropdown menu on phones. */
(function () {
  "use strict";

  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close the menu when a link is clicked (handy on mobile)
  nav.querySelectorAll(".nav__links a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Keep the footer year current
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

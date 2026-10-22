```javascript
/* ========================================
   AURUMTRADE — FRONTEND APPLICATION
   Version 1.0
======================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Update the copyright year automatically.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation.
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    // Close the mobile menu after selecting a link.
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Smoothly handle navigation links pointing to page sections.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth",
          block: "start"
        });

        // Keep the URL in sync with the selected section.
        if (window.location.hash !== targetId) {
          window.history.replaceState(null, "", targetId);
        }
      }
    });
  });

  // Make it clear that the current market cards are demonstrations.
  const marketCard = document.querySelector(".market-card");

  if (marketCard) {
    marketCard.setAttribute("data-market-status", "demo");
  }

  // Do not simulate live prices, account balances, deposits, or trades.
  console.info(
    "AurumTrade frontend loaded. Demo interface only; " +
    "authentication, live market data, and trading are not connected."
  );
});
```

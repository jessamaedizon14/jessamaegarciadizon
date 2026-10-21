
// ==================================
// JESSA MAE DIZON - PORTFOLIO
// Interactive JavaScript
// ==================================

// MOBILE NAVIGATION
const menuToggle = document.querySelector("#menuToggle");
const navigation = document.querySelector("#navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  // Close the mobile menu after clicking a link
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// SCROLL REVEAL ANIMATIONS
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
} else {
  // Fallback for older browsers
  revealItems.forEach((item) => {
    item.classList.add("visible");
  });
}

// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.querySelector("#currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if (
  "IntersectionObserver" in window &&
  sections.length &&
  navLinks.length
) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", isActive);
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

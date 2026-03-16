// Mobile nav toggle + a tiny bit of polish
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Countdown timer
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownMessage = document.getElementById("countdownMessage");

if (daysEl && hoursEl && minutesEl && secondsEl) {
  const targetDate = new Date("March 20, 2026 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";

      if (countdownMessage) {
        countdownMessage.textContent = "The wait is over 💗";
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Coming soon modal
const openComingSoon = document.getElementById("openComingSoon");
const comingSoonModal = document.getElementById("comingSoonModal");
const closeComingSoon = document.getElementById("closeComingSoon");
const closeComingSoonBtn = document.getElementById("closeComingSoonBtn");

if (openComingSoon && comingSoonModal) {
  openComingSoon.addEventListener("click", () => {
    comingSoonModal.classList.add("is-open");
    comingSoonModal.setAttribute("aria-hidden", "false");
  });
}

function closeModal() {
  if (comingSoonModal) {
    comingSoonModal.classList.remove("is-open");
    comingSoonModal.setAttribute("aria-hidden", "true");
  }
}

if (closeComingSoon) {
  closeComingSoon.addEventListener("click", closeModal);
}

if (closeComingSoonBtn) {
  closeComingSoonBtn.addEventListener("click", closeModal);
}

if (comingSoonModal) {
  comingSoonModal.addEventListener("click", (event) => {
    if (event.target === comingSoonModal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Fan Mail coming soon modal
const fanmailSoonLinks = document.querySelectorAll(".fanmail-soon-link");
const fanmailSoonModal = document.getElementById("fanmailSoonModal");
const closeFanmailSoon = document.getElementById("closeFanmailSoon");
const closeFanmailSoonBtn = document.getElementById("closeFanmailSoonBtn");

function openFanmailModal() {
  if (fanmailSoonModal) {
    fanmailSoonModal.classList.add("is-open");
    fanmailSoonModal.setAttribute("aria-hidden", "false");
  }
}

function closeFanmailModal() {
  if (fanmailSoonModal) {
    fanmailSoonModal.classList.remove("is-open");
    fanmailSoonModal.setAttribute("aria-hidden", "true");
  }
}

fanmailSoonLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openFanmailModal();
  });
});

if (closeFanmailSoon) {
  closeFanmailSoon.addEventListener("click", closeFanmailModal);
}

if (closeFanmailSoonBtn) {
  closeFanmailSoonBtn.addEventListener("click", closeFanmailModal);
}

if (fanmailSoonModal) {
  fanmailSoonModal.addEventListener("click", (event) => {
    if (event.target === fanmailSoonModal) {
      closeFanmailModal();
    }
  });
}

// Optional: close menu after clicking a link (mobile)
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
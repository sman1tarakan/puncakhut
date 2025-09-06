// ===============================
// 1. Toggle Navbar Menu (Mobile)
// ===============================
const toggleBtn = document.getElementById("toggleBtn");
const navbarMenu = document.getElementById("navbarMenu");

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

// ===============================
// 2. Sticky Navbar Scroll Effect
// ===============================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===============================
// 3. Smooth Scroll to Sections
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // offset navbar
        behavior: "smooth",
      });
    }
  });
});

const revealElements = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // untuk animasi saat pertama kali muncul

// ===============================
// 4. Highlight Active Menu Item
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// 5. Countdown Timer
// ===============================
const countDownDate = new Date("Sep 06, 2025 16:00:00").getTime();
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  // if (distance < 0) {
  //   clearInterval(countdownInterval);
  //   document.querySelector(".countdown").innerHTML =
  //     "<h2>Acara telah dimulai!</h2>";
  // }
}, 1000);

// AUDIO
document.addEventListener("click", () => {
  const song = document.getElementById("song");
  song.muted = false;
  song.play();
});

// POPUP
if (countdownInterval > 0) {
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const song = document.getElementById("song");

    // Tampilkan popup
    popup.style.display = "flex";

    // Mulai audio
    song.muted = false;
    song.play().catch(() => {
      console.log("Audio autoplay diblokir, tunggu interaksi.");
    });

    // Tutup popup saat klik "Lanjutkan"
    document.getElementById("closePopup").addEventListener("click", () => {
      popup.style.display = "none";
    });
  });
} else {
  // Mulai audio
  song.muted = false;
  song.play().catch(() => {
    console.log("Audio autoplay diblokir, tunggu interaksi.");
  });
}

ScrollReveal().reveal("#footer", {
  delay: 300,
  duration: 1000,
  origin: "bottom",
  distance: "60px",
  easing: "ease-in-out",
  reset: false,
});

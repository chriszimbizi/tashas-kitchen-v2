const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");

// sticky header
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

// navbar
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("open");
};

// scroll reveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2250,
  reset: true,
});

scrollReveal.reveal(".home-text", { delay: 300 });
scrollReveal.reveal(".home-img", { delay: 100 });

scrollReveal.reveal(".about-text", { delay: 200 });
scrollReveal.reveal(".about-img");

scrollReveal.reveal(".shop .section-header", { delay: 200 });
scrollReveal.reveal(".shop-content");

scrollReveal.reveal(".reviews .section-header", { delay: 200 });
scrollReveal.reveal(".reviews-content, .contact");

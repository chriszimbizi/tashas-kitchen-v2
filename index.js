// Lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Sticky header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

// Navbar toggle
const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("open");
};

// Active section nav link
// Add an event listener to each link
const navbarLinks = document.querySelectorAll(".nav-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the "active" class from all links
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    this.classList.add("active");
  });
});

// Function to determine the active page based on the current section in view
function determineActivePage() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      // Add the "active" class to the corresponding navbar link
      navbarLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

// Attach scroll event listener to determine the active page dynamically
window.addEventListener("scroll", determineActivePage);

// Progress Bar
const progressBar = document.getElementById("progress-bar");

const animateProgressBar = () => {
  // Calculate the total scrollable height of the document
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the current scroll progress as a percentage
  const scrollProgress = (window.scrollY / documentHeight) * 100;

  // Animate the width of the progress bar
  gsap.to(progressBar, {
    width: `${scrollProgress}%`,
    ease: "power1.out",
  });

  // Request the next animation frame to continuously update the progress bar
  requestAnimationFrame(animateProgressBar);
};

animateProgressBar();

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2250,
  reset: false,
});

scrollReveal.reveal(".home-text", { delay: 300 });
scrollReveal.reveal(".home-img", { delay: 100 });

scrollReveal.reveal(".about-text", { delay: 200 });
scrollReveal.reveal(".about-img");

scrollReveal.reveal(".shop .section-header", { delay: 200 });
scrollReveal.reveal(".shop-content");

scrollReveal.reveal(".reviews .section-header", { delay: 200 });
scrollReveal.reveal(".reviews-content, .contact");

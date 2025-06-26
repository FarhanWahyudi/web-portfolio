const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link-current");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("border-b-[3px]");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("border-b-[3px]");
    }
  });
});
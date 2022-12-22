// menu bolim
const back = document.querySelector(".back");

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      back.classList.toggle("active");
    });
  }

  back.addEventListener("click", () => {
    nav.classList.remove("show");
    back.classList.remove("active");
  });
};

showMenu("nav-toggle", "nav-menu");

//nav

let nav_link = document.querySelectorAll(".nav_link");

function navLinc() {
  nav_link.forEach((n) => n.classList.toggle("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show");
  back.classList.remove("active");
}

nav_link.forEach((n) => n.addEventListener("click", navLinc));

window.addEventListener("scroll", () => {
  let toUpBtn = document.querySelector(".toUpBtn");

  if (window.pageYOffset > 100) {
    toUpBtn.classList.add("active");
  } else {
    toUpBtn.classList.remove("active");
  }
});

// scroll reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 800,
  reset: true,
});
// home scroll

sr.reveal(".home_title", { delay: 70 });
sr.reveal(".button", { delay: 100 });
sr.reveal(".home_image", { delay: 120 });
sr.reveal(".home_social_icon", { interval: 140 });

// about scroll
sr.reveal(".about_img", { delay: 80 });
sr.reveal(".section_title", { delay: 100 });
sr.reveal(".about_subtitle", { delay: 120 });
sr.reveal(".about_text", { delay: 140 });

// skills scroll
sr.reveal(".skills_subtitle", { delay: 80 });
sr.reveal(".section_title", { delay: 100 });
sr.reveal(".skills_text", { delay: 120 });
sr.reveal(".skills_data", { interval: 140 });
sr.reveal(".skills_img", { delay: 160 });

// work scroll
sr.reveal(".section_title", { delay: 100 });
sr.reveal(".work_img", { interval: 120 });

// contact scroll
sr.reveal(".section_title", { delay: 100 });
sr.reveal(".contact_h3 ", { delay: 120 });
sr.reveal(".contact_p", { delay: 140 });
sr.reveal(".info", { delay: 160 });
sr.reveal(".contact_input", { interval: 180 });

window.sr = ScrollReveal({ reset: true });
ScrollReveal({ distance: "15px" });
sr.reveal(".linkedin", { duration: 3000, origin: "left" });
sr.reveal(".about-me", { duration: 3000, origin: "right" });
sr.reveal(".projects-items", { duration: 3000, origin: "bottom" });
sr.reveal(".project", { duration: 3000, origin: "bottom" });
sr.reveal(".github-link", { duration: 3000, origin: "bottom" });
sr.reveal(".conteiner-skills", { duration: 3000, origin: "left" });
sr.reveal(".conteiner-description", { duration: 3000, origin: "right" });

let largura = window.screen.width;

if (largura >= 300 || largura <= 499) {
  sr.reveal(".projects-items", {
    delay: 250,
    duration: 2500,
    reset: true,
    origin: "bottom",
  });
  sr.reveal(".project", {
    delay: 250,
    duration: 2500,
    reset: true,
    origin: "bottom",
  });
  sr.reveal(".github-link", {
    delay: 250,
    duration: 2500,
    reset: true,
    origin: "bottom",
  });
}
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
});
sr.reveal(
  `.home-content, .payment-slip, .merchant, .app-download,`
);
sr.reveal(`.home-content, .merchant`, { origin: "right" });
sr.reveal(`.payment-slip, .app-download`, { origin: "left" });
sr.reveal(`.image-clips,`, { origin: "right" });
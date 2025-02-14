const tl = gsap.timeline();

tl.to(".first-scroll", { opacity: 0 })
  .to(".second-scroll", { opacity: 1 })
  .to(".second-scroll", { opacity: 0 })
  .to(".third-scroll", { opacity: 1 });

const scrollsection = ScrollTrigger.create({
  animation: tl,
  trigger: ".section_second",
  start: "top top",
  pin: true,
  scrub: true,
});

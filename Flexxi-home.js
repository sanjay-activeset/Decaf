let allcontent = gsap.timeline({
  scrollTrigger: {
    trigger: ".latest_heading-wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

allcontent.fromTo(
  ".latest_heading",
  { scale: 1.1 },
  { scale: 0.8, duration: 1 }
);

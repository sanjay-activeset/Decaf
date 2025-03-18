document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const cardAnimTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_latest",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { ease: "none" },
  });

  cardAnimTL.fromTo(".latest_heading", { scale: 1.5 }, { scale: 0.7 });
});

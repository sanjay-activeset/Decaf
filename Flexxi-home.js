document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const cardAnimTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".latest_heading-wrapper",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { ease: "none" },
  });

  cardAnimTL
    .fromTo(".latest_heading", { scale: 1.3 }, { scale: 0.7 })
    .fromTo(".latest_heading", { y: "0" }, { y: 40 });
});

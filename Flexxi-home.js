document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const cardAnimTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".latest_head-wrapper",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { ease: "none" },
  });

  cardAnimTL.fromTo(".latest_heading", { scale: 1.2 }, { scale: 0.7 });
  cardAnimTL.to(".work_wrapper", {
    y: "-40vh",
  });
});

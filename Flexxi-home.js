document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".latest_head-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { ease: "none" },
    })
    .to(".latest_heading", {
      scale: 0.7,
    })
    .to(
      " .work_wrapper",
      {
        marginTop: "-40vh",
      },
      "<"
    );
});

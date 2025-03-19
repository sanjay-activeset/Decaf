document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".latest_head-block",
        start: "top 0%",
        end: "bottom 50%",
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

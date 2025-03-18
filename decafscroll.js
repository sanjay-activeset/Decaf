document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function heroAnim() {
    const heroAnimTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_home",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    heroAnimTL.to(
      ".home_your-content-wrapper",
      { opacity: 0, duration: 2, ease: "power2.out" },
      "1"
    );

    heroAnimTL.to(
      ".home_your-bg-image",
      {
        width: "23rem",
        height: "760px",
        duration: 2,
        ease: "power2.out",
      },
      "1"
    );

    heroAnimTL
      .to(".home_your-bg-image", { opacity: 0.2 }, "1")
      .to(".home_send", { opacity: 1 })
      .to(".home_send-h1", { opacity: 0.2 })
      .to(".home_send-h2", { opacity: 1 })
      .to(".home_send", { opacity: 0 })
      .to(".home_your-bg-image", { opacity: 0 })
      .to(".home_your-app", { opacity: 1 })
      .to(".home_your-app", { opacity: 0 }, "+=1")
      .to(".home_your-set", { opacity: 1 })
      .to(".home_your-set", { opacity: 0 }, "+=1")
      .to(".home_your-make", { opacity: 1 })
      .to(".home_your-make", { opacity: 0 }, "+=1")
      .to(".home_your-trans", { opacity: 1 });
  }

  function checkAndRunAnimation() {
    if (window.innerWidth > 991) {
      heroAnim();
    }
  }

  checkAndRunAnimation();
  window.addEventListener("resize", checkAndRunAnimation);
});

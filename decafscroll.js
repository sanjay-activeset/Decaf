document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Function to prepare text for animation
  function prepareText(selector) {
    return new SplitType(selector, { types: "lines" }).lines;
  }

  function heroAnim() {
    // Run only on desktop (greater than 767px)
    if (window.innerWidth <= 991) return;

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
      { opacity: 0, duration: 1.5, ease: "expo.Out" },
      "0"
    );

    heroAnimTL.to(
      ".home_your-bg-image",
      {
        width: "23rem",
        height: "760px",
        duration: 1.5,
        ease: "expo.Out",
      },
      "0"
    );

    heroAnimTL
      .to(".home_your-bg-image", { opacity: 0.2 })
      .to(".home_send", { opacity: 1 })
      .to(".home_send-h1", { opacity: 0.2 })
      .to(".home_send-h2", { opacity: 1 })
      .to(".home_send", { opacity: 0 })
      .to(".home_your-bg-image", { opacity: 0 })
      .to(".home_your-app", { opacity: 1 })
      .to(".home_your-app", { opacity: 0 }, "+=1.5")
      .to(".home_your-set", { opacity: 1 })
      .to(".home_your-set", { opacity: 0 }, "+=1.5")
      .to(".home_your-make", { opacity: 1 })
      .to(".home_your-make", { opacity: 0 }, "+=1.5")
      .to(".home_your-trans", { opacity: 1 });
  }

  // Run the animation only if on desktop
  if (window.innerWidth > 991) {
    heroAnim();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Ensure prepareText is defined before calling
  function prepareText(selector) {
    return document.querySelectorAll(selector);
  }

  // Additional animations
  const lines1 = prepareText("[home=heading]");
  const lines2 = prepareText("[home2=heading]");
  const home3 = document.querySelector("[home3=heading]");

  let tl = gsap.timeline({ delay: 4 });

  tl.from(
    ".home_your-logo-image",
    {
      y: 60,
      autoAlpha: 0,
      ease: "power3.out",
      duration: 1.5,
    },
    "start"
  )
    .from(
      ".home_your-bg-image",
      {
        scale: 1.2,
        ease: "power3.out",
        duration: 1.5,
      },
      "start"
    )
    .from(
      lines1,
      {
        yPercent: 100,
        autoAlpha: 0,
        ease: "expo.out",
        duration: 1.5,
        stagger: 0.08,
      },
      "start+=0.2"
    )
    .from(
      lines2,
      {
        yPercent: 100,
        autoAlpha: 0,
        ease: "expo.out",
        duration: 1.5,
        stagger: 0.08,
      },
      "-=1.2"
    )
    .from(
      home3,
      {
        y: 50,
        autoAlpha: 0,
        ease: "power2.out",
        duration: 1.5,
      },
      "-=1.2"
    );

  function heroAnim() {
    const heroAnimTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_home",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1.5, ease: "none" },
    });

    heroAnimTL.to(
      ".home_your-content-wrapper",
      { opacity: 0, duration: 1.5, ease: "power2.out" },
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

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

    // Apply SplitType to all elements once
    const splitHeroPara1 = new SplitType("[hero='word']", { types: "lines" });
    const splitHeroline1 = new SplitType("[hero='line']", { types: "lines" });
    const splitHeroPara2 = new SplitType("[hero2='word']", { types: "lines" });
    const splitHeroline2 = new SplitType("[hero2='line']", { types: "lines" });
    const splitHeroPara3 = new SplitType("[hero3='word']", { types: "lines" });
    const splitHeroline3 = new SplitType("[hero3='line']", { types: "lines" });
    const splitHeroPara4 = new SplitType("[hero4='word']", { types: "lines" });
    const splitHeroline4 = new SplitType("[hero4='line']", { types: "lines" });

    document.querySelectorAll("[hero='line'], [hero2='line']").forEach((el) => {
      el.style.display = "block";
      el.style.position = "relative";
    });

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
      { opacity: 0, duration: 1.5 },
      "+=2"
    );

    heroAnimTL.to(
      ".home_your-bg-image",
      {
        width: "23rem",
        height: "760px",
        duration: 2.5,
      },
      "+=2"
    );

    heroAnimTL
      .to(".home_your-bg-image", { opacity: 0.2 })
      .to(".home_send", { opacity: 1 })
      .to(".home_send-h1", { opacity: 0.2 })
      .to(".home_send-h2", { opacity: 1 })
      .to(".home_send", { opacity: 0 })
      .to(".home_your-bg-image", { opacity: 0 })
      .to(".home_your-app", { opacity: 1 })
      .from(
        splitHeroPara1.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitHeroline1.lines, { yPercent: 100, opacity: 0, stagger: 0.5 })
      .to(".home_your-app", { opacity: 0 }, "+=1.5")
      .to(".home_your-set", { opacity: 1 })
      .from(
        splitHeroPara2.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitHeroline2.lines, { yPercent: 100, opacity: 0, stagger: 0.5 })
      .to(".home_your-set", { opacity: 0 }, "+=1.5")
      .to(".home_your-make", { opacity: 1 })
      .from(
        splitHeroPara3.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitHeroline3.lines, { yPercent: 100, opacity: 0, stagger: 0.5 })
      .to(".home_your-make", { opacity: 0 }, "+=1.5")
      .to(".home_your-trans", { opacity: 1 })
      .from(
        splitHeroPara4.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitHeroline4.lines, { yPercent: 100, opacity: 0, stagger: 0.5 });
  }

  // Run the animation only if on desktop
  if (window.innerWidth > 991) {
    heroAnim();
  }
});

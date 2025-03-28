document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({ delay: 2.5 })
    .from(".home_your-logo-image", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    })
    .from(
      ".home_your-heading-wrapper",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );

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
      { y: "-50", duration: 0.5 },
      "0"
    );
    heroAnimTL.to(".home_your-content-wrapper", { opacity: 0, duration: 0.5 });

    heroAnimTL.to(
      ".home_your-bg-image",
      {
        width: "23rem",
        height: "80vh",
        duration: 0.8,
      },
      "<"
    );
    heroAnimTL.to(".home_your-bg-image", { opacity: 0.2, duration: 0.8 });
    heroAnimTL.to(".home_send", { opacity: 1, duration: 0.5 }, "<");

    heroAnimTL

      // .to(".home_send-h1", { opacity: 0.2, duration: 0.2 })
      // .to(".home_send-h2", { opacity: 1, duration: 0.7 })
      .to(".home_send", { opacity: 0, duration: 0.8 })
      .to(".home_your-bg-image", { opacity: 0, duration: 0.8 }, "<")
      .to(".home_your-app", { opacity: 1, duration: 0.8 })
      .to(".home_your-app", { opacity: 0, duration: 0.5 }, "+=0.5")
      .to(".home_your-set", { opacity: 1, duration: 0.5 })
      .to(".home_your-set", { opacity: 0, duration: 0.5 }, "+=0.5")
      .to(".home_your-make", { opacity: 1, duration: 0.5 })
      .to(".home_your-make", { opacity: 0, duration: 0.5 }, "+=0.5")
      .to(".home_your-trans", { opacity: 1, duration: 0.5 });
  }

  // Run the animation only if on desktop
  if (window.innerWidth > 991) {
    heroAnim();
  }

  gsap.set(".send_globe-send", { scale: 0, x: -50, opacity: 0 });
  gsap.set("[send='arrow']", { y: 100, opacity: 0 });
  gsap.set("[send='text']", { y: 100, opacity: 0 });
  gsap.set(".send_globe-recevie", { scale: 0, x: -50, opacity: 0 });
  gsap.set("[send2='arrow']", { y: -100, opacity: 0 });
  gsap.set("[send2='text']", { y: -100, opacity: 0 });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "[send2='animation']",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  tl2
    .to(".send_globe-send", {
      scale: 1,
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    .to(
      "[send='arrow']",
      { y: 0, opacity: 1, delay: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .to(
      "[send='text']",
      { y: 0, opacity: 1, delay: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .to(
      ".send_globe-recevie",
      { scale: 1, x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .to(
      "[send2='arrow']",
      { y: 0, opacity: 1, delay: 0.2, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    )
    .to(
      "[send2='text']",
      { y: 0, opacity: 1, delay: 0.2, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

  gsap.set(".send_image-send", { scale: 2 });

  gsap.to(".send_image-send", {
    scale: 1,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".send_image-send",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("[manage='ball']", {
    x: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".manage-component",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    stagger: {
      amount: 0.5,
      from: "center",
    },
  });

  const cards = [
    "[us1='card']",
    "[us2='card']",
    "[us3='card']",
    "[us4='card']",
    "[us5='card']",
  ];

  cards.forEach((card, index) => {
    gsap.set(card, { scale: 0 });

    gsap.to(card, {
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: index * 0.1,
    });
  });

  gsap.set("[card='margin']", { marginTop: "-0.5rem" });

  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.to("[card='margin']", {
      marginTop: "-3.5rem",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "[card='margin']",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  mm.add("(max-width: 767px)", () => {
    gsap.to("[card='margin']", {
      marginTop: "-2.1rem",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "[card='margin']",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  let cardMM = gsap.matchMedia();

  cardMM.add("(max-width: 768px)", () => {
    let cardAnimTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_decaf",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    cardAnimTL
      .to(".decaf_every", { opacity: 0, duration: 0.3 })
      .to(".decaf_wallet", { opacity: 1, duration: 0.5 })
      .to(".decaf_wallet", { opacity: 0, duration: 0.5 }, "+=0.5")
      .to(".decaf_visa-card", { opacity: 1, duration: 0.5 }, "+=0.1")
      .to(".decaf_bg-layer", {
        scale: 0.95,
        borderRadius: "8px",
        duration: 0.5,
      });

    return () => {
      cardAnimTL.kill();
    };
  });

  cardMM.add("(min-width: 769px)", () => {
    let cardAnimTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_decaf",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    cardAnimTL
      .to(".decaf_every", { opacity: 0, duration: 0.3 })
      .to(".decaf_wallet", { opacity: 1, duration: 0.5 })
      .to(".decaf_wallet", { opacity: 0, duration: 0.5 }, "+=0.5")
      .to(".decaf_visa-card", { opacity: 1, duration: 0.5 }, "+=0.1")
      .to(".decaf_bg-layer", {
        scale: 0.95,
        borderRadius: "24px",
        duration: 0.5,
      });

    return () => {
      cardAnimTL.kill();
    };
  });

  const animations = [
    {
      headingsAttr: "Heading11",
      textLinesAttr: "Textline11",
      trigger: ".send_content",
    },
    {
      headingsAttr: "Heading12",
      textLinesAttr: "Textline12",
      trigger: ".manage-component",
    },
    {
      headingsAttr: "Heading13",
      textLinesAttr: "Textline13",
      trigger: ".grow-component",
    },
    {
      headingsAttr: "Heading14",
      textLinesAttr: "Textline14",
      trigger: ".receive-component",
    },
  ];

  checkAndRunAnimation();
  window.addEventListener("resize", checkAndRunAnimation);
});

// Function to check screen size
function isTabletOrMobile() {
  return window.innerWidth <= 1024; // Adjust breakpoint if needed
}

let heroAnimMobTL; // Declare timeline variable globally
let heroAnimMobInitialized = false; // Track if the animation is initialized

function heroAnimMob() {
  // Kill existing timeline only if it's initialized
  if (heroAnimMobInitialized && heroAnimMobTL) {
    heroAnimMobTL.scrollTrigger?.kill();
    heroAnimMobTL.kill();
    heroAnimMobTL = null; // Reset timeline
  }

  // Create GSAP timeline for mobile & tablet landscape
  heroAnimMobTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".home_your-comp-wrapper",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { duration: 1, ease: "none" },
  });

  heroAnimMobTL
    .to(".home_your-content-wrapper", { opacity: 0 })
    .to(".home_your-bg-image", {
      scale: 0.9,
      borderRadius: "24px",
    })
    .to(".home_your-bg-image", { opacity: 0.2 })
    .to(".home_send", { opacity: 1 });

  heroAnimMobInitialized = true; // Mark animation as initialized
}

// Initial check for screen size
if (isTabletOrMobile()) {
  heroAnimMob();
}

// Re-run animation on resize only if necessary
window.addEventListener("resize", function () {
  if (isTabletOrMobile()) {
    if (!heroAnimMobInitialized) {
      heroAnimMob();
    }
  } else {
    // If switching to a larger screen, kill the animation
    if (heroAnimMobInitialized) {
      heroAnimMobTL?.scrollTrigger?.kill();
      heroAnimMobTL?.kill();
      heroAnimMobTL = null;
      heroAnimMobInitialized = false;
    }
  }
});

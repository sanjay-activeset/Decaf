document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function prepareText(selector) {
    return document.querySelectorAll(selector);
  }

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
      { opacity: 0, duration: 2, ease: "power2.out" },
      "1.5"
    );

    heroAnimTL.to(
      ".home_your-bg-image",
      {
        width: "23rem",
        height: "760px",
        duration: 2,
        ease: "power2.out",
      },
      "1.5"
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

  gsap.set(".send_globe-send", { scale: 0, x: -50, opacity: 0 });
  gsap.set("[send='arrow']", { y: 100, opacity: 0 });
  gsap.set("[send='text']", { y: 100, opacity: 0 });
  gsap.set(".send_globe-recevie", { scale: 0, x: -50, opacity: 0 });
  gsap.set("[send2='arrow']", { y: -100, opacity: 0 });
  gsap.set("[send2='text']", { y: -100, opacity: 0 });

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".send_globe-send",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

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

  checkAndRunAnimation();
  window.addEventListener("resize", checkAndRunAnimation);
});

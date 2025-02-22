document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Function to prepare text for animation
  function prepareText(selector) {
    return new SplitType(selector, { types: "lines" }).lines;
  }

  // Hero Animation
  function heroAnim() {
    const mm = gsap.matchMedia();
    const splitHeroPara = new SplitType("[home='head']", { types: "words" });

    mm.add("(min-width: 768px)", () => {
      const heroAnimTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_home",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        defaults: { duration: 1, ease: "none" },
      });

      heroAnimTL
        .to(".home_your-content-wrapper", { opacity: 0 })
        .to(
          ".home_your-bg-image",
          {
            width: "23rem",
            height: "760px",
            ease: "power1.out",
            duration: 3,
          },
          0
        )
        .to(".home_your-bg-image", { opacity: 0.2 })
        .to(".home_send", { opacity: 1 })
        .from(splitHeroPara.words, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
        })
        .to(".home_send-h1", { opacity: 0.2 })
        .to(".home_send-h2", { opacity: 1 })
        .to(".home_send", { opacity: 0 })
        .to(".home_your-bg-image", { opacity: 0 })
        .to(".home_your-app", { opacity: 1 })
        .to(".home_your-app", { opacity: 0 })
        .to(".home_your-set", { opacity: 1 })
        .to(".home_your-set", { opacity: 0 })
        .to(".home_your-make", { opacity: 1 })
        .to(".home_your-make", { opacity: 0 })
        .to(".home_your-trans", { opacity: 1 })
        .to(".home_your-trans", { opacity: 0 })
        .to(".home_your-phone-image", { opacity: 1 });
    });

    mm.add("(max-width: 767px)", () => {
      const heroAnimTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_home",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        defaults: { duration: 1, ease: "none" },
      });

      heroAnimTL
        .to(".home_your-content-wrapper", { opacity: 0 })
        .to(
          ".home_your-bg-image",
          {
            width: "16rem",
            height: "500px",
            borderRadius: "1.5rem",
            ease: "power1.out",
            duration: 2,
          },
          0
        )
        .to(".home_your-bg-image", { opacity: 0.2 })
        .to(".home_send", { opacity: 1 })
        .from(splitHeroPara.words, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
        })
        .to(".home_send-h1", { opacity: 0.2 })
        .to(".home_send-h2", { opacity: 1 })
        .to(".home_send", { opacity: 0 })
        .to(".home_your-bg-image", { opacity: 0 })
        .to(".home_your-app", { opacity: 1 })
        .to(".home_your-app", { opacity: 0 })
        .to(".home_your-set", { opacity: 1 })
        .to(".home_your-set", { opacity: 0 })
        .to(".home_your-make", { opacity: 1 })
        .to(".home_your-make", { opacity: 0 })
        .to(".home_your-trans", { opacity: 1 })
        .to(".home_your-trans", { opacity: 0 })
        .to(".home_your-phone-image", { opacity: 1 });
    });
  }

  heroAnim();

  // Additional animations
  const lines1 = prepareText("[home=heading]");
  const lines2 = prepareText("[home2=heading]");
  const home3 = document.querySelector("[home3=heading]");

  let tl = gsap.timeline();

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

  let headings = document.querySelectorAll("[Heading=wordanimation]");
  headings.forEach((heading) => {
    heading.style.overflow = "hidden";
    let splitText = new SplitType(heading, { types: "words" });

    splitText.words.forEach((word) => {
      let wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "top";
      word.parentNode.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    gsap.from(splitText.words, {
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "expo.out",
    });
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

  gsap.utils.toArray("[bottomtop='animation']").forEach((element) => {
    gsap.fromTo(
      element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  document.querySelectorAll("[Textline='animation']").forEach((el) => {
    const text = new SplitType(el, { types: "lines" });
    gsap.set(text.lines, { yPercent: 100, opacity: 0 });

    gsap.to(text.lines, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });

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

  gsap.from(".nav", {
    y: -100,
    opacity: 0,
    duration: 2,
    ease: "expo.out",
  });

  const cardAnimTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_decaf",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { duration: 1, ease: "none" },
  });

  cardAnimTL
    .to(".decaf_visa-card", { opacity: 0.2 })
    .to(".decaf_every", { opacity: 1 })
    .to(".decaf_every-content-h-1", { opacity: 0.2 })
    .to(".decaf_every-content-h-2", { opacity: 1 })
    .to(".decaf_every", { opacity: 0 })
    .to(".decaf_wallet", { opacity: 1 })
    .to(".decaf_wallet-content-h-1", { opacity: 0.2 })
    .to(".decaf_wallet-content-h-2", { opacity: 1 })
    .to(".decaf_wallet", { opacity: 0 })
    .to(".decaf_visa-card", { opacity: 1 });

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

  animations.forEach(({ headingsAttr, textLinesAttr, trigger }) => {
    let headings = document.querySelectorAll(`[${headingsAttr}=wordanimation]`);
    let textLines = document.querySelectorAll(`[${textLinesAttr}='animation']`);
    let triggerElement = document.querySelector(trigger);

    if (triggerElement) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      headings.forEach((heading) => {
        heading.style.overflow = "hidden";
        let splitText = new SplitType(heading, { types: "words" });

        splitText.words.forEach((word) => {
          let wrapper = document.createElement("span");
          wrapper.style.display = "inline-block";
          wrapper.style.overflow = "hidden";
          wrapper.style.verticalAlign = "top";
          word.parentNode.insertBefore(wrapper, word);
          wrapper.appendChild(word);
        });

        tl.from(
          splitText.words,
          {
            yPercent: 100,
            opacity: 0,
            stagger: 0.08,
            duration: 1,
            ease: "expo.out",
          },
          0
        );
      });

      textLines.forEach((el) => {
        el.style.overflow = "hidden";
        const text = new SplitType(el, { types: "lines" });
        gsap.set(text.lines, { yPercent: 100, opacity: 0 });

        tl.to(
          text.lines,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      });
    }
  });

  let headings15 = document.querySelectorAll("[Heading15=wordanimation]");
  let textLines15 = document.querySelectorAll("[Textline15='animation']");
  let bottomTopElements15 = document.querySelectorAll(
    "[bottomtop15='animation']"
  );
  let triggerElement15 = document.querySelector(".join_component");

  if (triggerElement15) {
    let tl15 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement15,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    headings15.forEach((heading) => {
      heading.style.overflow = "hidden";
      let splitText = new SplitType(heading, { types: "words" });

      splitText.words.forEach((word) => {
        let wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";
        word.parentNode.insertBefore(wrapper, word);
        wrapper.appendChild(word);
      });

      tl15.from(
        splitText.words,
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          ease: "expo.out",
        },
        0
      );
    });

    textLines15.forEach((el) => {
      el.style.overflow = "hidden";
      const text = new SplitType(el, { types: "lines" });

      gsap.set(text.lines, { yPercent: 100, opacity: 0 });

      tl15.to(
        text.lines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    bottomTopElements15.forEach((el) => {
      gsap.set(el, { yPercent: 100, opacity: 0 });

      tl15.to(
        el,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });
  }

  let headings16 = document.querySelectorAll("[Heading16=wordanimation]");
  let bottomTopElements16 = document.querySelectorAll(
    "[bottomtop16='animation']"
  );
  let triggerElement16 = document.querySelector(".watch_content");

  if (triggerElement16) {
    let tl16 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement16,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    headings16.forEach((heading) => {
      heading.style.overflow = "hidden";
      let splitText = new SplitType(heading, { types: "words" });

      splitText.words.forEach((word) => {
        let wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";
        word.parentNode.insertBefore(wrapper, word);
        wrapper.appendChild(word);
      });

      tl16.from(
        splitText.words,
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          ease: "expo.out",
        },
        0
      );
    });

    bottomTopElements16.forEach((el) => {
      gsap.set(el, { yPercent: 100, opacity: 0 });

      tl16.to(
        el,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });
  }
});

gsap.from("[Image1=Animation]", {
  x: "-100%",
  y: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[Image1=Animation]",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.from(".footer_right-content-image", {
  x: "100%",
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer_right-content",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

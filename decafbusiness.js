document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

  // Timeline 1: Animate .home_contact-image from bottom to top
  tl.from(".home_contact-image", {
    scale: 0.7,
    duration: 1,
    ease: "power2.out",
  });

  // Timeline 2: Animate words inside [business=heading]
  let headingsWords = document.querySelectorAll("[business=heading]");

  if (headingsWords.length) {
    let splitTextWords = new SplitType(headingsWords, { types: "words" });

    tl.from(
      splitTextWords.words,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.5"
    );
  }

  // Timeline 3: Animate lines inside [business=line]
  let headingsLines = document.querySelectorAll("[business=line]");

  if (headingsLines.length) {
    let splitTextLines = new SplitType(headingsLines, { types: "lines" });

    tl.from(
      splitTextLines.lines,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }

  // Timeline 4: Animate .home_contact-button-wrapper from bottom to top
  tl.from(
    ".home_contact-button-wrapper",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

  gsap.registerPlugin(ScrollTrigger);

  let allcontent = gsap.timeline({
    scrollTrigger: {
      trigger: ".all-contant-card-image",
      start: "top 80%",
      end: "bottom 50%",
      toggleActions: "play none none none",
    },
  });

  allcontent
    .from(".all-contant-card-image", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      ".all-contant-card-image-card",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      "[all='animation']",
      {
        y: 50,
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      "[all='animation-2']",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

  gsap.registerPlugin(ScrollTrigger);

  let allCountryName = gsap.timeline({
    scrollTrigger: {
      trigger: ".all-contant-card-image-no",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  allCountryName.from(".all-contant-card-image-no", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
  });

  allCountryName.from(
    "[country='all']",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    },
    "<"
  );
});

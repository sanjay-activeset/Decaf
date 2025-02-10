gsap.to(".story_component-wrapper", {
  scrollTrigger: {
    trigger: ".section_story",
    start: "top top",
    end: "bottom bottom",
    pin: true, // Pin to avoid layout shift
    scrub: 1,
  },
});

let firstaboutSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".is--v1",
    start: "top 80%", // Start earlier
    end: "top 60%",
    scrub: 1,
  },
});

gsap.to(".story_component", {
  scrollTrigger: {
    trigger: ".is--v1",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    scrub: 1,
  },
});

let aboutfirstSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".is--v1",
    start: "top top", // Adjusted to start from the top of the section
    end: "20% top",
    scrub: 1,
  },
});

aboutfirstSequence.to(".story_heading", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll("[Heading=Animation]");

  headings.forEach((heading) => {
    // Ensure the parent has overflow hidden
    heading.style.overflow = "hidden";

    let splitText = new SplitType(heading, { types: "lines" });

    gsap.from(splitText.lines, {
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.2, // Increased stagger for line-by-line effect
      duration: 0.7,
      ease: "power2.out",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll("[Heading=wordanimation]");

  headings.forEach((heading) => {
    // Ensure the parent has overflow hidden
    heading.style.overflow = "hidden";

    let splitText = new SplitType(heading, { types: "words" });

    gsap.from(splitText.words, {
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "expo.out",
    });
  });
});

gsap.from(".new_content-card", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".new_content-card",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.from("[Card='stagger']", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".mission_content",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});

gsap.from("[Image=Animation]", {
  x: "100%",
  y: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[Image=Animation]",
    start: "top 60%",
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
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

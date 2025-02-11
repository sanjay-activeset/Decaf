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

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll("[text='highlight']");
splitTypes.forEach((char) => {
  const text = new SplitType(char, { types: ["lines", "words"] }); // Use "lines"

  gsap.from(text.lines, {
    scrollTrigger: {
      trigger: char,
      start: "top 70%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
    ease: "expoScale.out",
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".story_component", {
  scrollTrigger: {
    trigger: ".story_component-relative-wrap",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

const storyHeading = document.querySelector(".story_heading");

if (storyHeading) {
  // Ensure SplitType is applied only once
  if (!storyHeading.dataset.splitApplied) {
    new SplitType(storyHeading, { types: "lines" });
    storyHeading.dataset.splitApplied = true;
  }

  let firstSequence = gsap.timeline({
    scrollTrigger: {
      trigger: ".story_component-relative-wrap",
      start: "top top",
      end: "80% top",
      scrub: 1,
    },
  });

  firstSequence.from(".story_heading .line", {
    opacity: 0.2, // Ensure it starts invisible
    stagger: 0.1,
    ease: "expo.out",
  });
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".story_component", {
  scrollTrigger: {
    trigger: ".story_component-relative-wrap",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

const storyHeadingLine = document.querySelector(".story_heading-line");

if (storyHeadingLine) {
  // Ensure SplitType is applied only once
  if (!storyHeadingLine.dataset.splitApplied) {
    new SplitType(storyHeadingLine, { types: "lines" });
    storyHeadingLine.dataset.splitApplied = true;
  }

  let firstSequence = gsap.timeline({
    scrollTrigger: {
      trigger: ".story_content-wrapper",
      start: "top top",
      end: "80% top",
      scrub: 1,
    },
  });

  firstSequence.from(".story_heading-line .line", {
    opacity: 0.2, // Ensure it starts invisible
    stagger: 0.1,
    ease: "expo.out",
  });
}

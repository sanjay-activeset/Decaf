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

if (window.innerWidth > 1024) {
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
}

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

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll("[text='highlight']");
splitTypes.forEach((char) => {
  const text = new SplitType(char, { types: ["lines", "words"] });

  gsap.from(text.lines, {
    scrollTrigger: {
      trigger: char,
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
    },
    duration: 0.1,
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

document.querySelectorAll("[Textline='animation']").forEach((el) => {
  // Initialize SplitType for each element separately
  const text = new SplitType(el, { types: "lines" });

  gsap.set(text.lines, { yPercent: 100, opacity: 0 });

  // Create GSAP animation
  gsap.to(text.lines, {
    yPercent: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "bottom 20%", // Ensures it resets when scrolling back up
      toggleActions: "play none none none", // Play on enter, reset when out
      once: true, // Ensures it triggers every time the element enters the viewport
    },
  });
});

///////////////////////// Footer animation

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
gsap.from("[Image1='Animation']", {
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

gsap.from("[Image='Animation']", {
  x: "100%",
  y: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[Image=Animation]",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

if (window.innerWidth > 1024) {
  let headings15 = document.querySelectorAll("[HeadingAB=wordanimation]");
  let animatedHeadings = document.querySelectorAll("[HeadingAB=lineanimation]");

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

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    tl.from(
      splitText.words.map((word) => word.parentNode),
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out",
      }
    );
  });

  animatedHeadings.forEach((heading) => {
    heading.style.overflow = "hidden";
    let splitText = new SplitType(heading, { types: "lines" });

    splitText.lines.forEach((line) => {
      let wrapper = document.createElement("span");
      wrapper.style.display = "block";
      wrapper.style.overflow = "hidden";

      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    tl.from(
      splitText.lines.map((line) => line.parentNode),
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
      }
    );
  });
}

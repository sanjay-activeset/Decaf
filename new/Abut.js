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
});

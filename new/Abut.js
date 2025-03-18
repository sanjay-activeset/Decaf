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

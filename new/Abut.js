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
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".new_content-card", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".new_content",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});

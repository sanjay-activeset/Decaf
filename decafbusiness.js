/// Pin the .inspiration_content element
gsap.to(".section_sign-in", {
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    scrub: 1,
  },
});

//// Pin the .inspiration_content element
gsap.to(".section_sign-in", {
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    scrub: 1,
  },
});

// First Sequence - Height increase with cover fade
let signfirstSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "0% top",
    end: "5% top",
    scrub: 1,
  },
});

signfirstSequence.to(".sign-in_form-block", {
  opacity: 0.2,
  duration: 1.5,
  ease: "power2.inOut",
});

let signsecondSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "6% top",
    end: "11% top",
    scrub: 1,
  },
});

signsecondSequence.to(".sign-in_simple", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let signthirdSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "12% top",
    end: "17% top",
    scrub: 1,
  },
});

signthirdSequence.to(".sign-in_simple-text-1", {
  opacity: 0.2,
  duration: 1.5,
  ease: "power2.inOut",
});

let signfourSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "18% top",
    end: "23% top",
    scrub: 1,
  },
});

signfourSequence.to(".sign-in_simple-text-2", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let signfiveSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "24% top",
    end: "29% top",
    scrub: 1,
  },
});

signfiveSequence.to(".sign-in_simple-text-2", {
  opacity: 0.2,
  duration: 1.5,
  ease: "power2.inOut",
});

let signsixSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "30% top",
    end: "35% top",
    scrub: 1,
  },
});

signsixSequence.to(".sign-in_simple-text-3", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let signsevenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "35% top",
    end: "40% top",
    scrub: 1,
  },
});

signsevenSequence.to(".sign-in_simple", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

let signeightSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "40% top",
    end: "45% top",
    scrub: 1,
  },
});

signeightSequence.to(".sign-in_form-block", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let signeight2Sequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "45% top",
    end: "50% top",
    scrub: 1,
  },
});

signeight2Sequence.to(".sign-in_form-block", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

let signnineSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "51% top",
    end: "56% top",
    scrub: 1,
  },
});

signnineSequence.to(".sign-in_form-create", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let signtenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "57% top",
    end: "62% top",
    scrub: 1,
  },
});

signtenSequence.to(".sign-in_form-create", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

let signelevnSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "63% top",
    end: "68% top",
    scrub: 1,
  },
});

signelevnSequence.to(".sign-in_form-new", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let signtweleSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "68% top",
    end: "73% top",
    scrub: 1,
  },
});

signtweleSequence.to(".sign-in_form-new", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

signelevnSequence.to(".sign-in_form-new", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let sign13Sequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_sign-in",
    start: "74% top",
    end: "80% top",
    scrub: 1,
  },
});

sign13Sequence.to(".sign-in_form-send", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

gsap.fromTo(
  ".home_your-bg-image",
  { scale: 1.2 },
  { scale: 1, duration: 1, ease: "power2.out" }
);

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll("[Heading=Animation]");

  headings.forEach((heading) => {
    // Ensure the parent has overflow hidden
    heading.style.overflow = "hidden";

    let splitText = new SplitType(heading, { types: "lines" });

    gsap.from(splitText.lines, {
      scrollTrigger: {
        trigger: heading,
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.2, // Increased stagger for line-by-line effect
      duration: 0.7,
      ease: "power2.out",
    });
  });
});

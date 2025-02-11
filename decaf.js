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

console.log("Hello");

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

gsap.to(".home_component", {
  scrollTrigger: {
    trigger: ".section_home",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    scrub: 1,
  },
});

// First Sequence - Height increase with cover fade
let firstSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "top top", // Adjusted to start from the top of the section
    end: "5% top",
    scrub: 1,
  },
});

firstSequence.to(".home_your-content-wrapper", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

let secondSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "5% top", // Start after the first sequence
    end: "20% top",
    scrub: 1,
  },
});

secondSequence.to(".home_your-bg-image", {
  width: "348px",
  height: "80vh",
  duration: 2,
  ease: "power3.inOut",
});

let thirdSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "20% top", // After second sequence
    end: "25% top",
    scrub: 1,
  },
});

thirdSequence.to(".home_send", {
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
});

let fourthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "26% top", // After third sequence
    end: "30% top",
    scrub: 1,
  },
});

fourthSequence.to(".home_send-h1", {
  opacity: 0.2,
  duration: 1,
  ease: "power2.inOut",
});

fourthSequence.to(
  ".home_send-h2",
  {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  },
  ">"
);

let sixthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "31% top", // After fourth sequence
    end: "35% top",
    scrub: 1,
  },
});

sixthSequence.to([".home_your-bg-image", ".home_send"], {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
});

let seventhSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "36% top", // After sixth sequence
    end: "40% top",
    scrub: 1,
  },
});

seventhSequence.to(
  ".home_your-app",
  {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  },
  ">"
);

let eighthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "41% top", // After seventh sequence
    end: "45% top",
    scrub: 1,
  },
});

eighthSequence.to(".home_your-app", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
});

let ninthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "46% top", // After eighth sequence
    end: "50% top",
    scrub: 1,
  },
});

ninthSequence.to(".home_your-set", {
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
});

let tenthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "51% top", // After ninth sequence
    end: "55% top",
    scrub: 1,
  },
});

tenthSequence.to(".home_your-set", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
});

let elevenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "56% top", // After tenth sequence
    end: "60% top",
    scrub: 1,
  },
});

elevenSequence.to(".home_your-make", {
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
});

let tweleSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "61% top", // After eleven sequence
    end: "65% top",
    scrub: 1,
  },
});

tweleSequence.to(".home_your-make", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
});

let thirteenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "66% top", // After twele sequence
    end: "70% top",
    scrub: 1,
    // Debugging marker
  },
});

thirteenSequence.to(".home_your-trans", {
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
});

let fourteenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "71% top", // After thirteen sequence
    end: "75% top",
    scrub: 1,
  },
});

fourteenSequence.to(".home_your-trans", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
});

let fifteenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_home",
    start: "76% top", // After fourteen sequence
    end: "80% top",
    scrub: 1,
  },
});

fifteenSequence.to(".home_your-phone-image", {
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
});

gsap.to(".home_component", {
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    scrub: 1,
  },
});

// First Sequence - Height increase with cover fade
let decaffirstSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "top top",
    end: "6% top",
    scrub: 1,
  },
});

decaffirstSequence.to(".decaf_visa-card", {
  opacity: 0.2,
  duration: 1.5,
  ease: "power2.inOut",
});

let decafsecondSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "8% top",
    end: "14% top",
    scrub: 1,
  },
});

decafsecondSequence.to(".decaf_every", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let decafthirdSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "15% top",
    end: "20% top",
    scrub: 1,
  },
});

decafthirdSequence.to(".decaf_every-content-h-1", {
  opacity: 0.2,
  duration: 1.5,
  ease: "power2.inOut",
});

let decaffourthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "22% top",
    end: "28% top",
    scrub: 1,
  },
});

decaffourthSequence.to(".decaf_every-content-h-2", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let decaffifthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "30% top",
    end: "36% top",
    scrub: 1,
  },
});

decaffifthSequence.to(".decaf_every", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

let decafsixthSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "38% top",
    end: "46% top",
    scrub: 1,
  },
});

decafsixthSequence.to(".decaf_wallet", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let decafseventhSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "48% top",
    end: "54% top",
    scrub: 1,
  },
});

decafseventhSequence.to(".decaf_wallet-content-h-1", {
  opacity: 0.2,
  duration: 1.5,
  ease: "power2.inOut",
});

let decafeightSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "56% top",
    end: "62% top",
    scrub: 1,
  },
});

decafeightSequence.to(".decaf_wallet-content-h-2", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});

let decafnineSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "64% top",
    end: "70% top",
    scrub: 1,
  },
});

decafnineSequence.to(".decaf_wallet", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
});

let decaftenSequence = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "72% top",
    end: "80% top",
    scrub: 1,
  },
});

decaftenSequence.to(".decaf_visa-card", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.inOut",
});
///////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  function prepareText(selector) {
    return new SplitType(selector, { types: "lines" }).lines;
  }

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
});

gsap.fromTo(
  ".send_globe-send",
  { scale: 0, x: -50, opacity: 0 },
  {
    scale: 1,
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".send_globe-send",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  }
);

gsap.from("[send='arrow']", {
  y: 100,

  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".send_globe-send",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.from("[send='text']", {
  y: 100,

  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".send_globe-send",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.from("[send2='arrow']", {
  y: 100,

  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[send2='animation']",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.from("[send2='text']", {
  y: 100,

  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[send2='animation']",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.fromTo(
  ".send_globe-recevie",
  { scale: 0, x: -50, opacity: 0 },
  {
    scale: 1,
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "[send2='animation']",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  }
);

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll("[Heading=wordanimation]");

  headings.forEach((heading) => {
    // Ensure the parent has overflow hidden
    heading.style.overflow = "hidden";

    let splitText = new SplitType(heading, { types: "words" });

    // Wrap each word in a div with overflow hidden
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

gsap.registerPlugin(ScrollTrigger);

gsap.from("[manage='ball']", {
  x: "-100%",
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".manage-component",
    start: "top 70%", // Adjust based on when you want it to trigger
    toggleActions: "play none none none",
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
  gsap.set(card, { scale: 0 }); // Set initial scale to 0

  gsap.to(card, {
    scale: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // Adjust based on when you want it to start
      toggleActions: "play none none none",
    },
    delay: index * 0.1, // Ensures the next element starts animating when the previous one is 50% complete
  });
});

gsap.set("[card='margin']", { marginTop: "0.5rem" }); // Initial margin-top set to 0

gsap.to("[card='margin']", {
  marginTop: "-3.5rem", // Animate margin-top to 3.5rem
  duration: 1,
  stagger: 0.2, // Stagger effect
  ease: "power3.out",
  scrollTrigger: {
    trigger: "[card='margin']",
    start: "top 80%", // Adjust based on when you want the animation to start
    toggleActions: "play none none none",
  },
});

gsap.utils.toArray("[bottomtop='animation']").forEach((element) => {
  gsap.fromTo(
    element,
    { y: 100, opacity: 0 }, // Start from 50px below with opacity 0
    {
      y: 0, // Move to normal position
      opacity: 1, // Fade in
      duration: 1, // Animation duration
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 78%", // Triggers when the top of the element reaches 90% of the viewport
        toggleActions: "play none none none", // Play when in view, reverse when out
      },
    }
  );
});

// Select all elements with [Textline='animation']
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

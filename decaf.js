// Pin the .inspiration_content element
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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
    markers: true, // Debugging marker
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

// Pin the .inspiration_content element
gsap.to(".section_sign-in", {
  scrollTrigger: {
    trigger: ".sign-in_component",
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    scrub: 1,
  },
});

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

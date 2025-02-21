///////////////////////////////////////////
function heroAnim() {
  const mm = gsap.matchMedia();

  // Ensure SplitType applies to all screen sizes
  const splitHeroPara = new SplitType("[home='head']", { types: "words" });

  mm.add("(min-width: 768px)", () => {
    // Desktop & Tablet Animation
    const heroAnimTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_home",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    heroAnimTL
      .to(".home_your-content-wrapper", { opacity: 0 })
      .to(
        ".home_your-bg-image",
        {
          width: "23rem",
          height: "760px",
          ease: "power1.out",
          duration: 3,
        },
        0
      )
      .to(".home_your-bg-image", { opacity: 0.2 })
      .to(".home_send", { opacity: 1 })
      .from(splitHeroPara.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
      }) // Word Animation
      .to(".home_send-h1", { opacity: 0.2 })
      .to(".home_send-h2", { opacity: 1 })
      .to(".home_send", { opacity: 0 })
      .to(".home_your-bg-image", { opacity: 0 })
      .to(".home_your-app", { opacity: 1 })
      .to(".home_your-app", { opacity: 0 })
      .to(".home_your-set", { opacity: 1 })
      .to(".home_your-set", { opacity: 0 })
      .to(".home_your-make", { opacity: 1 })
      .to(".home_your-make", { opacity: 0 })
      .to(".home_your-trans", { opacity: 1 })
      .to(".home_your-trans", { opacity: 0 })
      .to(".home_your-phone-image", { opacity: 1 });
  });

  mm.add("(max-width: 767px)", () => {
    // Mobile Animation
    const heroAnimTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_home",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    heroAnimTL
      .to(".home_your-content-wrapper", { opacity: 0 })
      .to(
        ".home_your-bg-image",
        {
          width: "16rem",
          height: "500px",
          borderRadius: "1.5rem",
          ease: "power1.out",
          duration: 2,
        },
        0
      )
      .to(".home_your-bg-image", { opacity: 0.2 })
      .to(".home_send", { opacity: 1 })
      .from(splitHeroPara.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
      }) // Word Animation
      .to(".home_send-h1", { opacity: 0.2 })
      .to(".home_send-h2", { opacity: 1 })
      .to(".home_send", { opacity: 0 })
      .to(".home_your-bg-image", { opacity: 0 })
      .to(".home_your-app", { opacity: 1 })
      .to(".home_your-app", { opacity: 0 })
      .to(".home_your-set", { opacity: 1 })
      .to(".home_your-set", { opacity: 0 })
      .to(".home_your-make", { opacity: 1 })
      .to(".home_your-make", { opacity: 0 })
      .to(".home_your-trans", { opacity: 1 })
      .to(".home_your-trans", { opacity: 0 })
      .to(".home_your-phone-image", { opacity: 1 });
  });
}
gsap.from(".nav", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "expo.out",
});

const cardAnimTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_decaf",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  defaults: { duration: 1, ease: "none" },
});

cardAnimTL
  .to(".decaf_visa-card", { opacity: 0.2 })
  .to(".decaf_every", { opacity: 1 })
  .to(".decaf_every-content-h-1", { opacity: 0.2 })
  .to(".decaf_every-content-h-2", { opacity: 1 })
  .to(".decaf_every", { opacity: 0 })
  .to(".decaf_wallet", { opacity: 1 })
  .to(".decaf_wallet-content-h-1", { opacity: 0.2 })
  .to(".decaf_wallet-content-h-2", { opacity: 1 })
  .to(".decaf_wallet", { opacity: 0 })
  .to(".decaf_visa-card", { opacity: 1 });

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
        start: "top 80%",
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
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".manage-component",
    start: "top 70%",
    toggleActions: "play none none none",
  },
  stagger: {
    amount: 0.5, // Total time for the stagger effect
    from: "center", // Stagger from the center outward
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

gsap.set("[card='margin']", { marginTop: "-4.8rem" }); // Initial margin-top set to 0

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

// Set initial states
gsap.set(".send_globe-send", { scale: 0, x: -50, opacity: 0 });
gsap.set("[send='arrow']", { y: 100, opacity: 0 });
gsap.set("[send='text']", { y: 100, opacity: 0 });
gsap.set(".send_globe-recevie", { scale: 0, x: -50, opacity: 0 });
gsap.set("[send2='arrow']", { y: -100, opacity: 0 });
gsap.set("[send2='text']", { y: -100, opacity: 0 });

// Timeline for animations
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".send_globe-send",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Create a timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[send2='animation']", // Element that triggers the animation
    start: "top 90%", // When the top of the trigger hits 90% from the top of the viewport
    toggleActions: "play none none none", // Play the animation, do not reverse, reset or restart
  },
});

// First animation sequence
tl.to(".send_globe-send", {
  scale: 1,
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out",
})
  .to(
    "[send='arrow']",
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    "-=0.6"
  )
  .to(
    "[send='text']",
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    "-=0.6"
  )

  // Second animation sequence
  .to(
    ".send_globe-recevie",
    {
      scale: 1,
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .to(
    "[send2='arrow']",
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .to(
    "[send2='text']",
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.5"
  );

//////////////  Navbar Animatio
gsap.from(".nav", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "expo.out",
});

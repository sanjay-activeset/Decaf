document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

  // Timeline 1: Animate .home_contact-image from bottom to top
  tl.from(".home_contact-image", {
    scale: 0.7,
    duration: 1,
    ease: "power2.out",
  });

  // Timeline 2: Animate words inside [business=heading]
  let headingsWords = document.querySelectorAll("[business=heading]");

  if (headingsWords.length) {
    let splitTextWords = new SplitType(headingsWords, { types: "words" });

    tl.from(
      splitTextWords.words,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.5"
    );
  }

  // Timeline 3: Animate lines inside [business=line]
  let headingsLines = document.querySelectorAll("[business=line]");

  if (headingsLines.length) {
    let splitTextLines = new SplitType(headingsLines, { types: "lines" });

    tl.from(
      splitTextLines.lines,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }

  // Timeline 4: Animate .home_contact-button-wrapper from bottom to top
  tl.from(
    ".home_contact-button-wrapper",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );
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
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.2, // Increased stagger for line-by-line effect
      duration: 0.7,
      ease: "power2.out",
    });
  });
});

//////////////////////////  common animation for about and business page
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

gsap.from("[Card='stagger']", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "[Card='stagger']", // trigger different from about page
    start: "top 90%",
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

gsap.utils.toArray("[bottom=animation]").forEach((element) => {
  gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
});

gsap.from("[Image=try]", {
  x: "100%",
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[Image=try]",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

///////////////////////// Footer animation

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

// (function () {
//   const animateNumber = (element, target, duration) => {
//     let startTime;
//     const initialNumber = 0;

//     const easingFunction = (t) => 1 - Math.pow(1 - t, 4);

//     const animate = (time) => {
//       if (!startTime) startTime = time;
//       const elapsedTime = time - startTime;
//       const t = Math.min(elapsedTime / duration, 1);
//       const newValue =
//         initialNumber + (target - initialNumber) * easingFunction(t);

//       element.textContent = Math.round(newValue);

//       if (elapsedTime < duration) {
//         requestAnimationFrame(animate);
//       } else {
//         element.textContent = target;
//       }
//     };

//     requestAnimationFrame(animate);
//   };

//   const onIntersection = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const el = entry.target;
//         const finalNumber = parseInt(el.textContent, 10);
//         const animDuration = parseInt(el.getAttribute("duration"), 10) || 2000;

//         animateNumber(el, finalNumber, animDuration);
//         observer.unobserve(el);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(onIntersection);

//   document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll('[counter-element="number"]').forEach((el) => {
//       observer.observe(el);
//     });
//   });
// })();

gsap.set(".all-contant-card-image-block", { y: 100, opacity: 0 });
gsap.set("[user='card']", { opacity: 0 });

const hovercard = gsap.timeline({
  scrollTrigger: {
    trigger: ".all-contant-card-image-block",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none none",
  },
});

hovercard
  .to(".all-contant-card-image-block", {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
  })
  .to(
    "[user='card']",
    {
      opacity: 1,
      duration: 1,
    },
    "-=0.2"
  );

gsap.registerPlugin(ScrollTrigger);

let allcontent = gsap.timeline({
  scrollTrigger: {
    trigger: ".all-contant-card-image",
    start: "top 80%",
    end: "bottom 50%",
    toggleActions: "play none none none",
  },
});

allcontent
  .from(".all-contant-card-image", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    ".all-contant-card-image-card",
    {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    "[all='animation']",
    {
      y: 50,
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    "[all='animation-2']",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.5"
  );

gsap.registerPlugin(ScrollTrigger);

let allCountryName = gsap.timeline({
  scrollTrigger: {
    trigger: ".all-contant-card-image-no",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
});

allCountryName.from(".all-contant-card-image-no", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: "power3.out",
});

allCountryName.from(
  "[country='all']",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  },
  "<"
);

// Function to prepare text for animation
function prepareText(selector) {
  return new SplitType(selector, { types: "lines" }).lines;
}

function visa() {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const splitDecafPara1 = new SplitType("[decaf1='word']", {
      types: "lines",
    });
    const splitDecafline1 = new SplitType("[decaf1='line']", {
      types: "lines",
    });

    const splitDecafPara2 = new SplitType("[decaf2='word']", {
      types: "lines",
    });
    const splitDecafline2 = new SplitType("[decaf2='line']", {
      types: "lines",
    });
    const splitDecafPara3 = new SplitType("[decaf3='word']", {
      types: "lines",
    });
    const splitDecafline3 = new SplitType("[decaf3='line']", {
      types: "lines",
    });

    const splitDecafPara4 = new SplitType("[decaf4='word']", {
      types: "lines",
    });
    const splitDecafline4 = new SplitType("[decaf4='line']", {
      types: "lines",
    });

    // Create the timeline
    const form = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_sign-in",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    form
      .to(".is--form-top", { y: "0%" }) // Updated to transform: translateY(0%)
      .to(".is--sign-1", { opacity: 0.2 })
      .to(".sign-in_simple", { opacity: 1 })
      .to(".sign-in_simple-text-1", { opacity: 0.2 })
      .to(".sign-in_simple-text-2", { opacity: 1 })
      .to(".sign-in_simple-text-2", { opacity: 0.2 })
      .to(".sign-in_simple-text-3", { opacity: 1 })
      .to(".sign-in_simple", { opacity: 0 })
      .to(".is--sign-1", { opacity: 1 })
      .to("[signform='image']", { x: "-10%", width: "70%" })

      .to(".is--sign-contenr1", { opacity: 1 })
      .from(
        splitDecafPara1.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitDecafline1.lines, { yPercent: 100, opacity: 0, stagger: 0.5 })
      .to(".is--sign-1", { opacity: 0 }, "+=1.5")
      .to(".is--sign-2", { opacity: 1 })
      .from(
        splitDecafPara2.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitDecafline2.lines, { yPercent: 100, opacity: 0, stagger: 0.5 })
      .to(".is--sign-2", { opacity: 0 }, "+=1.5")
      .to(".is--sign-3", { opacity: 1 })
      .from(
        splitDecafPara3.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitDecafline3.lines, { yPercent: 100, opacity: 0, stagger: 0.5 })
      .to(".is--sign-3", { opacity: 0 }, "+=1.5")
      .to(".is--sign-4", { opacity: 1 })
      .from(
        splitDecafPara4.lines,
        { yPercent: 100, opacity: 0, stagger: 0.5 },
        "-=0.5"
      )
      .from(splitDecafline4.lines, { yPercent: 100, opacity: 0, stagger: 0.5 });

    return () => {
      form.kill();
    };
  });

  mm.add("(max-width: 767px)", () => {
    const formMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_sign-in",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      defaults: { duration: 1, ease: "none" },
    });

    formMobile
      .to(".is--form-top", { y: "0%" }) // Updated to transform: translateY(0%)
      .to(".is--sign-1", { opacity: 0.2 })
      .to(".sign-in_simple", { opacity: 1 })
      .to(".sign-in_simple-text-1", { opacity: 0.2 })
      .to(".sign-in_simple-text-2", { opacity: 1 })
      .to(".sign-in_simple-text-2", { opacity: 0.2 })
      .to(".sign-in_simple-text-3", { opacity: 1 })
      .to(".sign-in_simple", { opacity: 0 })
      .to(".is--sign-1", { opacity: 1 })
      .to("[signform='image']", { y: "22%" })
      .to(".is--sign-contenr1", { opacity: 1 })
      .to(".is--sign-1", { opacity: 0 })
      .to(".is--sign-2", { opacity: 1 })
      .to(".is--sign-2", { opacity: 0 })
      .to(".is--sign-3", { opacity: 1 })
      .to(".is--sign-3", { opacity: 0 })
      .to(".is--sign-4", { opacity: 1 });

    return () => {
      formMobile.kill();
    };
  });
}

visa();

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".is--usd-3",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 1, ease: "power1.inOut" },
  })
  .to(".is--usd-3", { backgroundColor: "#000", color: "#fcee54" })
  .to(".is--usd-3", { backgroundColor: "#a3abe3", color: "#000" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".is--usd-3",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 1, ease: "power1.inOut" },
  })
  .to(".is--usd-arrow3", { backgroundColor: "#fcee54", color: "#000" })
  .to(".is--usd-arrow3", { backgroundColor: "#000", color: "white" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".is--usd-3",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 1, ease: "power1.inOut" },
  })
  .to(".is--usd-1", { backgroundColor: "white", color: "#000" })
  .to(".is--usd-1", { backgroundColor: "#000", color: "#fcee54" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".is--usd-3",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 1, ease: "power1.inOut" },
  })
  .to(".is--usd-arrow-23", { backgroundColor: "#000", color: "white" })
  .to(".is--usd-arrow-23", { backgroundColor: "#fcee54", color: "#000" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".is--usd-3",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 1, ease: "power1.inOut" },
  })
  .to(".is--usd-2", { backgroundColor: "#a3abe3", color: "#000" })
  .to(".is--usd-2", { backgroundColor: "white", color: "black" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".is--usd-3",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 1, ease: "power1.inOut" },
  })
  .to(".is--usd-arrow33", { backgroundColor: "#000", color: "#a3abe3" })
  .to(".is--usd-arrow33", { backgroundColor: "black", color: "white" });

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll("[Heading=wordanimationb]");

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
        start: "top 90%",
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

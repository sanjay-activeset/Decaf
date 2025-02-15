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

let tl = gsap.timeline();

// Split text into words
let splitText = new SplitType("[business=heading]", { types: "words" });

// Wrap each word in a container
splitText.words.forEach((word) => {
  let wrapper = document.createElement("span");
  wrapper.style.overflow = "hidden";
  wrapper.style.display = "inline-block";
  wrapper.style.verticalAlign = "top";
  word.parentNode.insertBefore(wrapper, word);
  wrapper.appendChild(word);
});

let splitLine = new SplitType("[business=line]", { types: "lines" });

splitLine.lines.forEach((line) => {
  let wrapper = document.createElement("div");
  wrapper.style.overflow = "hidden";
  wrapper.style.display = "block";
  line.parentNode.insertBefore(wrapper, line);
  wrapper.appendChild(line);
});

// Select business images
let businessImage = document.querySelectorAll("[business=image]");

// Timeline animations
tl.fromTo(
  splitText.words,
  { yPercent: 100, opacity: 0 },
  {
    yPercent: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.1,
  }
)
  .fromTo(
    splitLine.lines,
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
    },
    "-=0.5"
  )
  .fromTo(
    businessImage,
    { scale: 0.8, y: 100, opacity: 0 },
    {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    },
    "-=0.6"
  );

gsap.from("[up=animation]", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "[up=animation]",
    start: "top 80%",
    toggleActions: "play none none none",
  },
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

//////////////  Navbar Animatio
gsap.from(".nav", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "expo.out",
});

(function () {
  const animateNumber = (element, target, duration) => {
    let startTime;
    const initialNumber = 0;

    const easingFunction = (t) => 1 - Math.pow(1 - t, 4);

    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const t = Math.min(elapsedTime / duration, 1);
      const newValue =
        initialNumber + (target - initialNumber) * easingFunction(t);

      element.textContent = Math.round(newValue);

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target;
      }
    };

    requestAnimationFrame(animate);
  };

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const finalNumber = parseInt(el.textContent, 10);
        const animDuration = parseInt(el.getAttribute("duration"), 10) || 2000;

        animateNumber(el, finalNumber, animDuration);
        observer.unobserve(el);
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[counter-element="number"]').forEach((el) => {
      observer.observe(el);
    });
  });
})();

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
  .to(".is--sign-1", { opacity: 0 })
  .to(".is--sign-2", { opacity: 1 })
  .to(".is--sign-2", { opacity: 0 })
  .to(".is--sign-3", { opacity: 1 })
  .to(".is--sign-3", { opacity: 0 })
  .to(".is--sign-4", { opacity: 1 })
  .to(".is--sign-4", { opacity: 0 });

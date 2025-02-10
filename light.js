gsap.registerPlugin(ScrollTrigger);

// Function to animate basic text elements
function animateText() {
  gsap.fromTo(
    "[text=animation]",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "[text=animation]",
        start: "top 80%",
        once: true,
      },
    }
  );
}

// Function to animate SplitType text (line-based)
function animateSplitType() {
  const peoplePara = new SplitType(".people_para", { types: "lines" });

  peoplePara.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.style.overflow = "hidden";
    wrapper.style.display = "block";
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".people_para",
      start: "top 80%",
      once: true,
    },
  });

  tl.fromTo(
    peoplePara.lines,
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      delay: 0.3,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out",
    },
    "start" // Label for timing reference
  ).call(animateImages, [], "-=0.8"); // Start `animateImages` 0.5s before text finishes
}

// Function to animate images
function animateImages() {
  const images = [
    { selector: ".is--image-4", left: "33%", top: "1%" },
    { selector: ".is--image-5", left: "56%", top: "14%" },
    { selector: ".is--image-6", left: "80%", top: "3%" },
    { selector: ".is--image-1", left: "84%", top: "28%" },
    { selector: ".is--image-7", left: "80%", top: "72%" },
    { selector: ".is--image-8", left: "56%", top: "67%" },
    { selector: ".is--image-9", left: "32%", top: "70%" },
    { selector: ".is--image-2", left: "-2%", top: "35%" },
    { selector: ".is--image-3", left: "10%", top: "10%" },
  ];

  images
    .sort(() => Math.random() - 0.5)
    .forEach((image, index) => {
      gsap.to(image.selector, {
        left: image.left,
        top: image.top,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: image.selector,
          start: "top 80%",
          once: true,
        },
      });
    });
}

// Function to animate home component image
function animateHomeComponent() {
  gsap.fromTo(
    ".home_component-image",
    { y: "-100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to("[home='animation']", {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.5,
        });
      },
    }
  );
}

// Function to animate word-based SplitType elements
function animateWords() {
  document.querySelectorAll("[word='animation']").forEach((char) => {
    const text = new SplitType(char, { types: ["words"] });

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: char,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
      opacity: 0,
      stagger: 0.1,
    });
  });
}

// Function to handle page loader
function handlePageLoader() {
  gsap.to(".page_load-lottie-wrap", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    delay: 4, // Delay to match loader time
    onComplete: () => {
      document.querySelector(".page_load-lottie-wrap").style.display = "none";
      initAnimations();
    },
  });
}

// Initialize all animations after loader completes
function initAnimations() {
  animateText();
  animateSplitType();
  animateHomeComponent();
  animateWords();
}

document.addEventListener("DOMContentLoaded", handlePageLoader);

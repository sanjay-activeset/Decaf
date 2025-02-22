const cardAnimTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-scroll_section-height",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  defaults: { duration: 1, ease: "none" },
});

function animateLineAndDot(line, dot, hideElement, showElement) {
  cardAnimTL
    .to(line, { width: "100%", opacity: "1" })
    .to(dot, { backgroundColor: "white" }, "<")
    .to(hideElement, { opacity: 0, duration: 0.6, ease: "power1.out" }, ">")
    .to(showElement, { opacity: 1, duration: 0.6, ease: "power1.inOut" }, ">");
}

console.log("Hello");

animateLineAndDot(
  ".is--line-2",
  ".is--dot-2",
  ".is--our-2014",
  ".is--our-2015"
);
animateLineAndDot(
  ".is--line-3",
  ".is--dot-3",
  ".is--our-2015",
  ".is--our-2016"
);
animateLineAndDot(
  ".is--line-4",
  ".is--dot-4",
  ".is--our-2016",
  ".is--our-2017"
);
animateLineAndDot(
  ".is--line-5",
  ".is--dot-5",
  ".is--our-2017",
  ".is--our-2018"
);
animateLineAndDot(
  ".is--line-6",
  ".is--dot-6",
  ".is--our-2018",
  ".is--our-2019"
);
animateLineAndDot(
  ".is--line-7",
  ".is--dot-7",
  ".is--our-2019",
  ".is--our-2020"
);
animateLineAndDot(
  ".is--line-8",
  ".is--dot-8",
  ".is--our-2020",
  ".is--our-2021"
);
animateLineAndDot(
  ".is--line-9",
  ".is--dot-9",
  ".is--our-2021",
  ".is--our-2022"
);

const Gallery = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  //spaceBetween: 16,
  speed: 600,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const images = [
//   { selector: ".is--image-4", position: { top: "8%", left: "25%" } },
//   { selector: ".is--image-5", position: { top: "10%", left: "20%" } },
//   { selector: ".is--image-6", position: { top: "5%", left: "72.5vw" } },
//   { selector: ".is--image-1", position: { top: "32%", left: "-24%" } },
//   { selector: ".is--image-7", position: { bottom: "8%", right: "8%" } },
//   { selector: ".is--image-8", position: { bottom: "19%", right: "20%" } },
//   { selector: ".is--image-9", position: { top: "71%", left: "25%" } },
//   { selector: ".is--image-2", position: { bottom: "10%", left: "-17%" } },
//   { selector: ".is--image-3", position: { top: "-9%", left: "16vh" } },
// ];

// // Shuffle images randomly
// const shuffledImages = images.sort(() => Math.random() - 0.5);

// // Create a GSAP timeline to animate text and images at the same time
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".people_para",
//     start: "top 80%",
//     once: true,
//   },
// });

// Create a GSAP timeline
// Create a GSAP timeline
// Create a GSAP timeline with scrollTrigger using .people_component as the trigger
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".people_component", // The element that will trigger the animation
//     start: "top center", // When the top of the trigger element reaches the center of the viewport
//     end: "bottom top", // When the bottom of the trigger element reaches the top of the viewport
//     toggleActions: "play none none none", // Play animation on enter, no action on leave, etc.
//     markers: true, // Optional, to visualize the start and end of the ScrollTrigger
//   },
// });

// // Add animations for each element (total duration = 1 second)
// tl.to(".is--image-2", {
//   position: "absolute",
//   left: "-17%",
//   bottom: "10%",
//   ease: "power1.inOut",
//   duration: 0.5, // 50% of the total time
// })
//   .to(".is--image-3", {
//     position: "absolute",
//     left: "-9%",
//     top: "16%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-4", {
//     position: "absolute",
//     left: "25%",
//     top: "8%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-5", {
//     position: "absolute",
//     right: "25%",
//     top: "10%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-6", {
//     position: "absolute",
//     left: "90%",
//     top: "5%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-1", {
//     position: "absolute",
//     top: "32%",
//     right: "-24%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-7", {
//     position: "absolute",
//     bottom: "8%",
//     right: "-15%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-9", {
//     position: "absolute",
//     top: "71%",
//     left: "25%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   })
//   .to(".is--image-8", {
//     position: "absolute",
//     bottom: "  15%",
//     right: "22%",
//     ease: "power1.inOut",
//     duration: 0.5, // 50% of the total time
//   });

//
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".people_component",
    start: "top center",
    end: "bottom top",
    toggleActions: "play none none none",
  },
});

tl.to(".is--image-2", {
  position: "absolute",
  left: "-17%",
  bottom: "10%",
  ease: "power1.out",
  duration: 0.2,
})
  .to(
    ".is--image-3",
    {
      position: "absolute",
      left: "-9%",
      top: "16%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  ) // Overlapping for smoothness
  .to(
    ".is--image-4",
    {
      position: "absolute",
      left: "25%",
      top: "8%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  )
  .to(
    ".is--image-5",
    {
      position: "absolute",
      right: "25%",
      top: "10%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  )
  .to(
    ".is--image-6",
    {
      position: "absolute",
      left: "90%",
      top: "5%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  )
  .to(
    ".is--image-1",
    {
      position: "absolute",
      top: "32%",
      right: "-24%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  )
  .to(
    ".is--image-7",
    {
      position: "absolute",
      bottom: "8%",
      right: "-15%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  )
  .to(
    ".is--image-9",
    {
      position: "absolute",
      top: "71%",
      left: "25%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  )
  .to(
    ".is--image-8",
    {
      position: "absolute",
      bottom: "15%",
      right: "22%",
      ease: "power1.out",
      duration: 0.2,
    },
    "-=0.1"
  );

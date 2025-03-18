document.addEventListener("DOMContentLoaded", function () {
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

  function visa() {
    const mm = gsap.matchMedia();

    // Only for desktop (min-width: 1024px)
    mm.add("(min-width: 1024px)", () => {
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
        .to(".is--form-top", { y: "50%" })
        .to(".is--form-top", { y: "0%", scale: 1 })
        .to(".is--sign-1", { opacity: 0.2 })
        .to(".sign-in_simple", { opacity: 1 })
        .to(".sign-in_simple-text-1", { opacity: 0.2 })
        .to(".sign-in_simple-text-2", { opacity: 1 }, "0.5")
        .to(".sign-in_simple-text-2", { opacity: 0.2 }, "0.5")
        .to(".sign-in_simple-text-3", { opacity: 1 }, "0.5")
        .to(".sign-in_simple", { opacity: 0 })
        .to(".is--sign-1", { opacity: 1 })
        .to("[signform='image']", { x: "-10%", width: "70%" })
        .to(".is--sign-contenr1", { opacity: 1 })
        .to(".is--sign-1", { opacity: 0 }, "+=1.5")
        .to(".is--sign-2", { opacity: 1 })
        .to(".is--sign-2", { opacity: 0 }, "+=1.5")
        .to(".is--sign-3", { opacity: 1 })

        .to(".is--sign-3", { opacity: 0 }, "+=1.5")
        .to(".is--sign-4", { opacity: 1 });

      return () => {
        form.kill();
      };
    });
  }

  visa();
});

//Mobile---------------------------------------------------

gsap.matchMedia().add("(max-width: 768px)", () => {
  const contactMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home-contact",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { duration: 1, ease: "none" },
  });

  contactMobile
    .to(
      ".section_home-contact",
      {
        scale: 0.9,
        borderRadius: "24px",
      },
      0
    ) // Added time parameter properly
    .to(
      ".home_contact-image",
      {
        borderRadius: "16px",
      },
      0
    ); // Synchronized animations using the same start time
});

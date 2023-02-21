gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

   requestAnimationFrame(raf)

  const parallax = new Ukiyo(".ukiyo", {
    externalRAF: true
  });

  function raf(time) {
    parallax.animate();

    lenis.raf(time);
    requestAnimationFrame(raf);
  }

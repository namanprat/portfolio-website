const marqueeContent = document.querySelector('.marquee-content');

let marquee2 = marqueeContent.cloneNode(true);
marqueeContent.parentElement.append(marquee2);

let tween;

function loop() {
  let progress = tween ? tween.progress() : 0;
  tween && tween.progress(0).kill();
  let gap = parseInt(getComputedStyle(marqueeContent).gap);
  let marqueeWidth = parseInt(getComputedStyle(marqueeContent).width);
  let gapDistPercent = (gap / marqueeWidth) * 100;
  let distanceToMove = gapDistPercent + 100;

  tween = gsap.fromTo('.marquee-content',
      { xPercent: 0 },
      {
        xPercent: -distanceToMove,
        duration: 6,
        ease: "none",
        repeat: -1
      }
  );
  tween.progress(progress);
}
loop();
window.addEventListener("resize", loop);
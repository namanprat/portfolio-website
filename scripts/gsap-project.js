function introAnimation(){
    gsap.from("#navbar, .coverimg , .title, crumb , #about",2,
    {
      y: "250",
      opacity: 0,
      ease: "expo.inOut",
      stagger: 0.08,
    }
  );
}

function imgShrink(){
    gsap.from('.bg-section',{
        scrollTrigger:{
            trigger:'.bg-section',
            scrub:true
        },
        width:'80%',
        duration: 4,
    });
}

function runGsap(){
      let gsapLoaded = setInterval(function(){
       if(window.gsap && window.ScrollTrigger){
               imgShrink();
           clearInterval(gsapLoaded);
       }
   }, 500);
  }

introAnimation();
runGsap();  
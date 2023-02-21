function revealToplug() {
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    var parent = document.createElement("plug");
    var child = document.createElement("plug");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML= elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
})
}

function valueSetters(){
    // gsap.set ("header" , { y: "-100%"});
    gsap.set("#home .parent .child" , {y: "100%"});
    gsap.set('#bg-svg', {xPercent:0});
    gsap.set('#nav-svg', {xPercent:0});
    gsap.set ("bruv" , {y:"100%"});
    //gsap.set ("#work-title" , {y:"150%" , opacity: '1'});
    gsap.set (".bg" , {opacity: 0});
    
}

function loaderAnimation() {
    var tl = gsap.timeline();

tl
.from("#loader .child plug", {
    y:"100%",
    duration: 1.5,
    stagger: 0.2,
    ease: "expo.inOut"
})
.to("#loader .parent .child", {
    y:"-100%",
    duration: 1,
    delay: 1,
    ease: "expo.inOut"
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease: "circ.inOut",
    onComplete: function(){
        animateHomepage();
    }
})
}

function animateHomepage(){
    var tl = gsap.timeline();
    tl
    .to("#home .parent .child", {
        y: 0,
        delay: -1.2,
        duration: 3,
        stagger: 0.135,
        ease: "expo.inOut"
    })
    .to('.bg' , { 
        duration: 1,
        opacity: 1, 
        ease: Expo.easeInOut,
        delay: -2,
      })
}
function animateBgElement(){
const tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".bg",
    delay: 1,
    pin: true,
    scrub: true,
    start: 'top top',
    end:'+=750',
  }
})
.to('#bg-svg', {
  rotation:100,
  duration:3, 
})
}

 function aboutAnimation(){
    var tl = gsap.timeline();
    tl
    .to("bruv", { 
         y: 0,
         //duration: 4,
         //stagger: 0.2,
         ease: "power4.inOut",
         scrollTrigger: {
         scrub: true,
         trigger: '#desc',
         //start: "top 80%",
         end: "bottom 40%",
         scroller: "body",
         //markers: true,
         }
     })
 }
 function workTitle(){
    gsap.to("#work-title", {
        y: 0,
        //delay: -0.5,
        //duration: 0.75,
        stagger: 2,
         scrollTrigger: {
         //scrub: true,
         trigger: '.cta',
        start: "top top",
         scroller: "body",
         //markers: true
          }
     })
 }


 function bgColor(){
 const sections = gsap.utils.toArray("#about");
 const container = document.querySelector('#work');

 const tl = gsap.timeline({
  
    scrollTrigger: {
         trigger: "#work",
         start: "top 1%",
         ease: "expo.inOut",
         delay: 1,
         scrub: true,
        //  markers: true,
         end: () => `+=${container.offsetWidth}`
     }
 })

  tl
 .to(sections, { duration: 1, xPercent: -100 * (sections.length - 1), ease: "none" })
 .to(container, { duration: 1, backgroundColor: "#968874", ease: "none" }, 0)
 }

 function titleFade(){
    gsap.to("#work-title", {
        opacity: 0.065,
        //delay: -0.5,
        //duration: 0.75,
         scrollTrigger: {
         scrub: true,
         trigger: '#work-title',
        start: "top top",
         scroller: "body",
         //markers: true
          }
     })
 }
gsap.registerPlugin(ScrollTrigger);
revealToplug();
valueSetters();
loaderAnimation();
// navElement();
animateBgElement();
aboutAnimation();
//workTitle();
// bgColor();
titleFade();




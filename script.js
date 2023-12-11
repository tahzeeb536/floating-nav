gsap.registerPlugin(ScrollTrigger);
const burger = gsap.timeline();
const loader = gsap.timeline();

document.addEventListener("DOMContentLoaded", function () {
    loader.to("#site-loader", { 
      duration: .75, 
      x: "100%", 
      ease: "power2.out" 
    })
    .fromTo('#burger', 
    {
      duration: 0.3,
      right: '-60px',
    },
    { 
      duration: .75,
      right: '0px',
    });
});

ScrollTrigger.create({
  start: 0,
  end: 100,
  onEnter: () => {
    burger.to('#burger', {
      duration: 0.3,
      right: '-60px',
    });
  },
  onLeaveBack: () => {
    burger.to('#burger', {
      duration: 0.3,
      right: '0px',
    });
  },
});


gsap.registerPlugin(ScrollTrigger);

const burger = gsap.timeline();

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


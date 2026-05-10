import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

ScrollTrigger.config({
  ignoreMobileResize: true,
  limitCallbacks: true,    // only fire onEnter/onLeave when threshold crossed, not every pixel
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load', // no resize re-calc spam
});

// Smoother default ticker — prevents GSAP from fighting the browser compositor
gsap.ticker.lagSmoothing(500, 33);

export { gsap, ScrollTrigger };

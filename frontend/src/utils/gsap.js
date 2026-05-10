import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: self => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-gradient-red pointer-events-none"
      style={{ transformOrigin: 'left center' }}
    />
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  up:    { hidden: { opacity: 0, y: 28, scale: 0.98 },  visible: { opacity: 1, y: 0, scale: 1 } },
  down:  { hidden: { opacity: 0, y: -20 },              visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -36 },              visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 },               visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },                      visible: { opacity: 1 } },
  zoom:  { hidden: { opacity: 0, scale: 0.90 },         visible: { opacity: 1, scale: 1 } },
  flip:  { hidden: { opacity: 0, rotateX: 14, y: 20 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
};

const eases = {
  spring: [0.34, 1.56, 0.64, 1],
  smooth: [0.25, 0.46, 0.45, 0.94],
  out:    [0.0, 0.0, 0.2, 1],
};

export default function Reveal({
  children,
  dir = 'up',
  delay = 0,
  duration = 0.42,
  ease = 'smooth',
  threshold = 0.08,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  const v = variants[dir] ?? variants.up;

  return (
    <motion.div
      ref={ref}
      variants={v}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: eases[ease] ?? eases.smooth }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger wrapper — animates children with index-based delay */
export function StaggerReveal({ children, stagger = 0.08, className = '', threshold = 0.08 }) {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, dir = 'up', className = '' }) {
  const v = variants[dir] ?? variants.up;
  return (
    <motion.div
      variants={v}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

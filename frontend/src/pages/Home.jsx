import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight, Play, MapPin, Clock, Award, TrendingUp, Shield, Globe } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';
import { useCountUp } from '../hooks/useReveal';
import { gsap, ScrollTrigger } from '../utils/gsap';

/* ── Hero Slides ── */
const slides = [
  {
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85&auto=format',
    eyebrow: 'Dubai 5-Star Hotel Placements',
    h1a: 'Your Culinary',
    h1b: 'Journey Starts Here',
    sub: 'Get placed in world-class Dubai hotels & cruise ships within 3–6 months of training.',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&auto=format',
    eyebrow: 'International Career Training',
    h1a: 'Learn. Excel.',
    h1b: 'Work Abroad.',
    sub: 'Professional hospitality training in Hindi, Marathi & English — no experience needed.',
  },
  {
    img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=85&auto=format',
    eyebrow: 'Cruise Ship Careers',
    h1a: 'Sail the World',
    h1b: 'With Your Career',
    sub: 'Join international cruise lines & 5-star hotels with our guaranteed placement programmes.',
  },
];

/* ── CountUp component ── */
function Count({ to, suffix = '' }) {
  const ref = useCountUp(to);
  return <><span ref={ref}>0</span>{suffix}</>;
}

const stats = [
  { icon: '🏆', value: 100, suffix: '+', label: 'Students Placed', sub: 'Globally' },
  { icon: '⭐', value: 5,   suffix: '★',  label: 'Star Dubai Hotels', sub: 'Partners' },
  { icon: '🌍', value: 10,  suffix: '+', label: 'Countries',      sub: 'Reached' },
  { icon: '📈', value: 98,  suffix: '%', label: 'Placement Rate', sub: 'Track record' },
];

const testimonials = [
  {
    name: 'Rahul Patil', city: 'Kolhapur', course: '3-Month',
    role: 'Housekeeping Attendant', hotel: 'Dubai Marriott',
    quote: 'मैंने सिर्फ 3 महीने में Dubai placement पाई। Mauli College ने मेरी जिंदगी बदल दी! AED 1,500/month + accommodation + meals.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    salary: 'AED 1,500/mo',
  },
  {
    name: 'Priya Desai', city: 'Sangli', course: '6-Month',
    role: 'F&B Supervisor', hotel: 'Atlantis The Palm, Dubai',
    quote: 'The 6-month course gave me skills that got me into Atlantis The Palm. AED 2,000/month with all benefits — dream come true!',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    salary: 'AED 2,000/mo',
  },
  {
    name: 'Siddharth K.', city: 'Belgaum', course: '3-Month',
    role: 'Room Service Staff', hotel: 'Hilton JBR Beach, Dubai',
    quote: '10th pass boy with zero experience — now working at Hilton JBR Beach! Mauli College made the impossible possible.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    salary: 'AED 1,400/mo',
  },
];

const marqueeItems = ['Dubai 5-Star Hotels', 'Cruise Ship Placements', '2-Year UAE Work Permit', 'Tax-Free Salary', 'Free Accommodation', 'Airport Pickup', 'Visa Assistance', 'GCC Countries'];

const galleryImgs = [
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', label: 'Training Kitchen', col: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', label: 'Practical Session' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', label: 'Dubai Placement' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', label: '5-Star Hotel' },
  { src: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80', label: 'Cruise Ships' },
];

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* Auto-advance hero */
  useEffect(() => {
    const t = setInterval(() => setSlideIdx(i => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  /* Auto-advance testimonials */
  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  const goSlide = (i) => setSlideIdx((i + slides.length) % slides.length);

  /* ── GSAP ScrollTrigger animations ── */
  useEffect(() => {
    // 1. Placements background parallax
    const placementsBg = document.querySelector('.gsap-placements-bg');
    if (placementsBg) {
      gsap.to(placementsBg, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: '#placements-section', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      });
    }

    // 2. Footer CTA background parallax
    const ctaBg = document.querySelector('.gsap-cta-bg');
    if (ctaBg) {
      gsap.to(ctaBg, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: '#cta-section', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      });
    }

    // 3. Timeline line draws itself
    const timelineLine = document.querySelector('.gsap-timeline-line');
    if (timelineLine) {
      gsap.fromTo(timelineLine,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: timelineLine.parentElement, start: 'top 70%', end: 'bottom 50%', scrub: 0.4 },
        }
      );
    }

    // 4. Timeline steps stagger
    gsap.utils.toArray('.gsap-timeline-step').forEach((step, i) => {
      gsap.from(step, {
        x: -24, opacity: 0, duration: 0.35, ease: 'power3.out',
        scrollTrigger: { trigger: step, start: 'top 80%', toggleActions: 'play none none none' },
      });
    });

    // 5. About images — clip-path wipe
    gsap.utils.toArray('.gsap-about-img').forEach((img, i) => {
      gsap.fromTo(img,
        { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.05 },
        {
          clipPath: 'inset(0% 0% 0% 0%)', scale: 1,
          duration: 0.65, ease: 'power3.inOut', delay: i * 0.07,
          scrollTrigger: { trigger: img, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    });

    // 6. Gallery items — stagger reveal
    const galleryItems = gsap.utils.toArray('.gsap-gallery-item');
    if (galleryItems.length) {
      gsap.fromTo(galleryItems,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 12 },
        {
          clipPath: 'inset(0% 0% 0% 0%)', y: 0,
          stagger: { amount: 0.4, from: 'start' },
          duration: 0.55, ease: 'power3.out',
          scrollTrigger: { trigger: '#gallery-section', start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    }

    // 7. Course cards — entrance
    gsap.utils.toArray('.gsap-course-card').forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, rotateX: 6, opacity: 0, transformPerspective: 900 },
        {
          y: 0, rotateX: 0, opacity: 1,
          duration: 0.55, ease: 'power3.out', delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 84%', toggleActions: 'play none none none' },
        }
      );
    });

    // 8. Placement cards
    gsap.utils.toArray('.gsap-placement-card').forEach((card, i) => {
      gsap.fromTo(card,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.45, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 84%', toggleActions: 'play none none none' },
        }
      );
    });

    // 9. Floating shapes parallax
    gsap.utils.toArray('.gsap-float').forEach((el, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      const amount = 24 + i * 12;
      gsap.to(el, {
        y: amount * dir, x: (amount / 3) * dir, rotate: 12 * dir,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      });
    });

    // 10. Stat count-up
    gsap.utils.toArray('.gsap-stat-num').forEach(el => {
      const target = parseFloat(el.dataset.target);
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target, duration: 1.4, ease: 'power2.out',
            onUpdate: () => { el.textContent = Number.isInteger(target) ? Math.round(obj.val) : obj.val.toFixed(1); },
          });
        },
      });
    });

    // 11. Accent lines width reveal
    gsap.utils.toArray('.gsap-line').forEach(line => {
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 0.5, ease: 'power3.inOut',
          scrollTrigger: { trigger: line, start: 'top 87%', toggleActions: 'play none none none' },
        }
      );
    });

    // 12. Why-choose items slide in
    gsap.utils.toArray('.gsap-why-item').forEach((item, i) => {
      gsap.fromTo(item,
        { x: -32, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.42, ease: 'power3.out', delay: i * 0.07,
          scrollTrigger: { trigger: item, start: 'top 84%', toggleActions: 'play none none none' },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <main className="overflow-x-hidden">

      {/* ════════════════════════════════ HERO ════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[680px] max-h-[980px] overflow-hidden">

        {/* Slide images with parallax */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slideIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              style={{ y: heroImgY }}
              src={slides[slideIdx].img}
              alt=""
              className="absolute inset-0 w-full h-[115%] object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navy gradient overlay — left-heavy for text legibility */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(13,27,46,0.93) 0%, rgba(13,27,46,0.78) 40%, rgba(13,27,46,0.35) 70%, rgba(13,27,46,0.1) 100%)' }} />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

        {/* Hero content — vertically centered with navbar offset */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex items-center">
          <div className="container-pad w-full" style={{ paddingTop: '72px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-[640px]"
              >
                {/* Eyebrow badge */}
                <motion.span
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 }}
                  className="inline-flex items-center gap-2 bg-primary text-white text-[0.68rem] font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full mb-5"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse flex-shrink-0" />
                  {slides[slideIdx].eyebrow}
                </motion.span>

                {/* Headline */}
                <h1 className="font-black text-white leading-[1.06] mb-5"
                  style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}>
                  <span className="block drop-shadow-lg">{slides[slideIdx].h1a}</span>
                  <span className="block text-gradient-red drop-shadow-lg">{slides[slideIdx].h1b}</span>
                </h1>

                {/* Sub */}
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-[500px]">
                  {slides[slideIdx].sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 mb-7">
                  <motion.button
                    onClick={openAdmissionForm}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gradient-red text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-[0.1em] shadow-red flex items-center gap-2.5"
                  >
                    Apply Now — Free <ArrowRight size={15} />
                  </motion.button>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Link to="/courses"
                      className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/10"
                    >
                      Explore Courses
                    </Link>
                  </motion.div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {['10th Pass Eligible', 'No Experience Needed', 'Guaranteed Placement'].map(b => (
                    <span key={b} className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
                      <CheckCircle size={13} className="text-primary flex-shrink-0" /> {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Prev / Next arrows */}
        <button onClick={() => goSlide(slideIdx - 1)}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-200">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => goSlide(slideIdx + 1)}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-200">
          <ChevronRight size={18} />
        </button>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === slideIdx ? 'w-7 h-2 bg-primary' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════ STATS ════════════════════════════════ */}
      <section className="relative z-10 bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-2 lg:grid-cols-4 -mt-8 gap-px bg-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(13,27,46,0.10)]">
            {stats.map(({ icon, value, suffix, label, sub }, i) => (
              <Reveal key={label} dir="up" delay={i * 0.08}>
                <div className="bg-white px-6 py-7 text-center hover:bg-cream transition-colors duration-300 group">
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{icon}</span>
                  <p className="text-3xl sm:text-4xl font-black text-primary mb-1">
                    <span className="gsap-stat-num" data-target={value}>0</span>{suffix}
                  </p>
                  <p className="font-bold text-charcoal text-sm">{label}</p>
                  <p className="text-mid-gray text-xs mt-0.5">{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ MARQUEE ════════════════════════════════ */}
      <div className="bg-gradient-red py-4 overflow-hidden mt-0">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-2.5 text-white font-semibold text-[0.78rem] uppercase tracking-[0.18em] px-8 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════ ABOUT ════════════════════════════════ */}
      <section className="section-pad bg-off-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Reveal dir="left">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-6 h-0.5 bg-gradient-red" /> About Mauli College
              </span>
              <h2 className="heading-lg text-charcoal mb-6">
                Chandgad's Gateway to<br />
                <span className="text-gradient-red">International Hospitality</span>
              </h2>
              <p className="text-mid-gray leading-[1.8] mb-6 text-[0.95rem]">
                Mauli College of Hotel Management, based in Chandgad, Maharashtra, is a premier hospitality training institution offering specialized short-duration courses with <strong className="text-charcoal font-semibold">guaranteed international job placements</strong>. We bridge the gap between aspiration and achievement.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Multilingual training — Hindi, Marathi & English',
                  '10th Pass eligible · No prior experience required',
                  'End-to-end visa & documentation support',
                  'Dubai 5-star hotel & cruise ship placements',
                  '98%+ placement rate over 10+ years',
                ].map(pt => (
                  <div key={pt} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-primary" />
                    </div>
                    <span className="text-dark-gray text-[0.88rem] font-medium">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={openAdmissionForm}
                  className="bg-gradient-red text-white font-bold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider hover:shadow-red hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Start Your Journey
                </button>
                <Link to="/career-guide" className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
                  Career Guide <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.15}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80', alt: 'Training kitchen', cls: 'h-36 sm:h-52' },
                    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80', alt: 'Hotel training', cls: 'h-36 sm:h-52 sm:mt-8' },
                    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=80', alt: 'Dubai hotel', cls: 'h-36 sm:h-52 sm:-mt-4' },
                    { src: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=80', alt: 'Cruise ship', cls: 'h-36 sm:h-52' },
                  ].map(({ src, alt, cls }) => (
                    <div key={alt} className={`gsap-about-img overflow-hidden rounded-2xl ${cls} group`}>
                      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  ))}
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-red text-white rounded-2xl p-3 sm:p-4 shadow-red shadow-xl"
                >
                  <p className="text-2xl font-black leading-none">100+</p>
                  <p className="text-[0.62rem] font-semibold text-white/80 mt-0.5 leading-tight">Students<br />Placed</p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ COURSES ════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal dir="up" className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-0.5 bg-gradient-red" /> Our Programmes <span className="w-6 h-0.5 bg-gradient-red" />
            </span>
            <h2 className="heading-lg text-charcoal">Choose Your Career Path</h2>
            <p className="text-mid-gray text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Two industry-aligned programmes — both with guaranteed international placements.
            </p>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-2 gap-8" stagger={0.12}>
            {[
              {
                tag: 'Fast Track',
                tagBg: 'bg-primary',
                duration: '3 Months',
                emoji: '🏨',
                title: '3-Month Hotel Management Fundamentals',
                desc: 'Intensive course covering all hotel management essentials. Perfect for school leavers seeking immediate Dubai placement.',
                points: ['Housekeeping Operations', 'F&B Service & Etiquette', 'Kitchen Hygiene & HACCP', 'Front Office Orientation', 'English Communication'],
                placement: 'Dubai 5-Star Hotel',
                salary: 'AED 1,200–1,800/mo',
                path: '/courses/3-month',
                dark: true,
              },
              {
                tag: 'Most Popular',
                tagBg: 'bg-amber-500',
                duration: '6 Months',
                emoji: '🚢',
                title: '6-Month Advanced Hotel Management Training',
                desc: '4-phase programme with department specialization. Opens doors to cruise ships, GCC countries, and senior roles.',
                points: ['Hotel Management Foundations', 'Department Specialization', 'Live Practical Training', 'Full Placement Preparation', 'Cruise Ship Eligibility'],
                placement: 'Dubai / GCC / Cruise',
                salary: 'AED 1,500–2,500/mo',
                path: '/courses/6-month',
                dark: false,
              },
            ].map((c, i) => (
              <StaggerItem key={c.title} dir="up">
                <div className={`gsap-course-card rounded-3xl overflow-hidden border ${c.dark ? 'bg-charcoal border-charcoal' : 'bg-white border-gray-100'} shadow-card h-full flex flex-col hover:-translate-y-2 transition-transform duration-300`}>
                  {/* Card header */}
                  <div className={`p-7 ${c.dark ? '' : 'bg-cream'}`}>
                    <div className="flex items-start justify-between mb-5">
                      <div className={`${c.tagBg} text-white text-[0.65rem] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full`}>{c.tag}</div>
                      <div className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${c.dark ? 'bg-white/10 text-white/70' : 'bg-white text-dark-gray'}`}>
                        <Clock size={13} />
                        {c.duration}
                      </div>
                    </div>
                    <span className="text-5xl block mb-4">{c.emoji}</span>
                    <h3 className={`text-xl font-bold mb-3 ${c.dark ? 'text-white' : 'text-charcoal'}`}>{c.title}</h3>
                    <p className={`text-sm leading-relaxed ${c.dark ? 'text-white/55' : 'text-mid-gray'}`}>{c.desc}</p>
                  </div>

                  {/* Card body */}
                  <div className={`p-7 flex-1 flex flex-col ${c.dark ? 'border-t border-white/10' : 'border-t border-gray-100'}`}>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {c.points.map(pt => (
                        <li key={pt} className="flex items-center gap-2.5">
                          <CheckCircle size={14} className="text-primary flex-shrink-0" />
                          <span className={`text-sm font-medium ${c.dark ? 'text-white/75' : 'text-dark-gray'}`}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`rounded-2xl p-4 mb-5 ${c.dark ? 'bg-white/8' : 'bg-cream'}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <MapPin size={13} className="text-primary" />
                        <span className={`text-xs font-bold ${c.dark ? 'text-white' : 'text-charcoal'}`}>{c.placement}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={13} className="text-primary" />
                        <span className={`text-xs ${c.dark ? 'text-white/55' : 'text-mid-gray'}`}>{c.salary} + Accommodation + Benefits</span>
                      </div>
                    </div>
                    <Link to={c.path}
                      className="w-full bg-gradient-red text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-[0.1em] text-center hover:shadow-red hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                      View Full Details
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ════════════════════════════════ PLACEMENTS ════════════════════════════════ */}
      <section id="placements-section" className="relative section-pad overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="gsap-float absolute top-16 right-16 w-24 h-24 bg-primary/10 rounded-full blur-sm pointer-events-none" />
        <div className="gsap-float absolute bottom-20 left-10 w-16 h-16 bg-white/8 rounded-2xl rotate-45 pointer-events-none" />
        <div className="gsap-float absolute top-1/2 right-1/4 w-10 h-10 bg-primary/20 rounded-lg pointer-events-none" />
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai"
          className="gsap-placements-bg absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/88" />

        <div className="relative container-pad">
          <Reveal dir="up" className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-0.5 bg-gradient-red" /> International Placements <span className="w-6 h-0.5 bg-gradient-red" />
            </span>
            <h2 className="heading-lg text-white">Your Career Passport<br /><span className="text-gradient-red">to the World</span></h2>
            <p className="text-white/60 text-base mt-4 max-w-xl mx-auto">Placed in the world's most prestigious hospitality establishments</p>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-5" stagger={0.1}>
            {[
              { icon: '🏨', title: 'Land Jobs — Dubai', items: ['5-Star Hotels & Resorts', 'Marriott · Hilton · Hyatt', '2-Year UAE Employment Visa', 'Free Staff Accommodation'] },
              { icon: '⚓', title: 'Cruise Ship Jobs', items: ['International Cruise Lines', '6–9 Month Contracts', 'Tax-Free Salary + Tips', 'Travel the World for Free'] },
              { icon: '🌍', title: 'GCC Countries', items: ['Saudi Arabia · Qatar · Kuwait', 'Luxury Hotels & Resorts', 'Full Placement Support', 'Pre-departure Orientation'] },
            ].map(({ icon, title, items }) => (
              <StaggerItem key={title} dir="up">
                <div className="gsap-placement-card rounded-3xl p-7 h-full transition-all duration-300 group border border-white/15 hover:border-primary/50 hover:-translate-y-1" style={{ background: 'rgba(13,27,46,0.75)', backdropFilter: 'blur(16px)' }}>
                  <span className="text-4xl block mb-5 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                  <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
                  <ul className="space-y-2.5">
                    {items.map(it => (
                      <li key={it} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal dir="up" delay={0.35} className="text-center mt-12">
            <Link to="/placements"
              className="inline-flex items-center gap-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-[0.12em] transition-all duration-300 group"
            >
              Explore All Placement Opportunities
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════ WHY CHOOSE US ════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Reveal dir="left">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-6 h-0.5 bg-gradient-red" /> Why Choose Us
              </span>
              <h2 className="heading-lg text-charcoal mb-10">The MCHM Advantage</h2>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Guaranteed Placement', desc: 'We don\'t just train you — we place you. 98%+ students get international jobs after completing our courses.' },
                  { icon: Globe, title: 'Global Network', desc: 'Direct tie-ups with 5-star hotels in Dubai, cruise lines, and GCC properties. Your employer is waiting.' },
                  { icon: TrendingUp, title: 'Fast Career Growth', desc: 'Our graduates become supervisors within 2 years. General Managers within a decade. Clear trajectory.' },
                  { icon: Award, title: 'Recognized Certifications', desc: 'MCHM certificates are recognized by international hospitality employers. HACCP certification included.' },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className="gsap-why-item flex gap-5 group">
                      <div className="w-12 h-12 bg-primary/8 group-hover:bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                        <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1.5">{title}</h4>
                        <p className="text-mid-gray text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                ))}
              </div>
            </Reveal>

            {/* Process timeline */}
            <Reveal dir="right" delay={0.15}>
              <div className="bg-cream rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-bold text-charcoal text-xl mb-8">Your Journey — 4 Steps</h3>
                <div className="relative">
                  <div className="gsap-timeline-line absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                  <div className="space-y-7">
                    {[
                      { n: '01', icon: '📋', t: 'Admission', d: 'Submit enquiry → Counselor call → Admission & enrollment' },
                      { n: '02', icon: '🎓', t: 'Training', d: '3 or 6-month intensive on-campus hotel management training' },
                      { n: '03', icon: '🏆', t: 'Certification', d: 'Receive MCHM & HACCP certificates + visa preparation' },
                      { n: '04', icon: '✈️', t: 'Dubai Placement', d: 'Interview coaching → Visa → Airport to 5-star hotel' },
                    ].map(({ n, icon, t, d }, i) => (
                      <div key={n} className="gsap-timeline-step flex gap-5 pl-1">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-base font-black flex-shrink-0 shadow-red/30 shadow-lg z-10">
                          {icon}
                        </div>
                        <div className="pt-1.5">
                          <p className="font-bold text-charcoal text-sm">{t}</p>
                          <p className="text-mid-gray text-xs mt-0.5 leading-relaxed">{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TESTIMONIALS ════════════════════════════════ */}
      <section className="section-pad bg-charcoal relative overflow-hidden">
        {/* Floating decorative shapes with GSAP parallax */}
        <div className="gsap-float absolute top-10 left-10 w-24 h-24 bg-primary/15 rounded-full blur-md pointer-events-none" />
        <div className="gsap-float absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-2xl rotate-12 blur-sm pointer-events-none" />
        <div className="gsap-float absolute top-1/2 left-1/3 w-14 h-14 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="relative container-pad">
          <Reveal dir="up" className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-0.5 bg-gradient-red" /> Tasty-monials <span className="w-6 h-0.5 bg-gradient-red" />
            </span>
            <h2 className="heading-lg text-white">Hear It From<br /><span className="text-gradient-red">Our Stars</span></h2>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass rounded-3xl p-8 sm:p-10"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-white/85 text-[1.05rem] leading-[1.75] italic mb-7">
                  "{testimonials[testimonialIdx].quote}"
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img src={testimonials[testimonialIdx].img} alt={testimonials[testimonialIdx].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/40" />
                    <div>
                      <p className="text-white font-bold">{testimonials[testimonialIdx].name}</p>
                      <p className="text-white/50 text-sm">{testimonials[testimonialIdx].city} · {testimonials[testimonialIdx].hotel}</p>
                    </div>
                  </div>
                  <div className="bg-primary/20 border border-primary/30 rounded-xl px-4 py-2">
                    <p className="text-primary font-black text-lg leading-none">{testimonials[testimonialIdx].salary}</p>
                    <p className="text-white/40 text-[0.6rem] mt-0.5 uppercase tracking-wider">Monthly</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all">
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  className={`rounded-full transition-all duration-300 ${i === testimonialIdx ? 'w-7 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'}`}
                />
              ))}
              <button onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <Reveal dir="up" delay={0.25} className="text-center mt-10">
            <Link to="/tastymonials" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
              Read All Success Stories <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════ GALLERY ════════════════════════════════ */}
      <section id="gallery-section" className="section-pad bg-off-white">
        <div className="container-pad">
          <Reveal dir="up" className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-0.5 bg-gradient-red" /> Campus Life <span className="w-6 h-0.5 bg-gradient-red" />
            </span>
            <h2 className="heading-lg text-charcoal">Glimpses of Excellence</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImgs.map(({ src, label }, i) => (
              <div key={src} className={`gsap-gallery-item ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? 'h-full min-h-[260px]' : 'h-40 md:h-44'}`}>
                  <img src={src} alt={label} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
                    <span className="text-white text-xs font-semibold">{label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Reveal dir="up" delay={0.3} className="text-center mt-10">
            <Link to="/gallery"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-[0.12em] transition-all duration-300 group">
              View Full Gallery <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════ FOOTER CTA ════════════════════════════════ */}
      <section id="cta-section" className="relative py-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80" alt=""
          className="gsap-cta-bg absolute inset-0 w-full h-[120%] -top-[10%] object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/90 to-primary/70" />

        <div className="relative container-pad text-center">
          <Reveal dir="up">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block text-5xl mb-6">✈️</motion.span>
            <h2 className="heading-lg text-white mb-5">
              Ready to Start Your<br />International Hotel Management Career?
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join 100+ students from Kolhapur, Sangli, Belgaum who've already secured international placements through Mauli College.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={openAdmissionForm}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white text-primary font-black px-10 py-4 rounded-xl text-sm uppercase tracking-[0.15em] hover:bg-off-white transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
              >
                Apply Now — It's Free
              </motion.button>
              <Link to="/contact"
                className="btn-outline px-10 py-4 text-sm uppercase tracking-[0.15em]">
                Talk to a Counselor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const IgIcon = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const FbIcon = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const YtIcon = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Courses', path: '/courses',
    children: [
      { label: '3-Month Programme', path: '/courses/3-month', tag: 'Fast Track' },
      { label: '6-Month Programme', path: '/courses/6-month', tag: 'Popular' },
    ],
  },
  { label: 'Placements', path: '/placements' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Career Guide', path: '/career-guide' },
  { label: 'Tastymonials', path: '/tastymonials' },
  { label: 'Contact', path: '/contact' },
];

function NavLogo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <img
        src="/mauli-logo.png"
        alt="Mauli College of Hotel Management"
        className={`object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
      />
      {/* Fallback text logo when image not found */}
      <div style={{ display: 'none' }} className="flex-col leading-none">
        <span className="font-black text-[1.5rem] leading-none" style={{ fontFamily: 'Mukta, sans-serif', color: '#C0000C' }}>मौली</span>
        <span className="text-[0.5rem] font-bold tracking-[0.15em] uppercase text-navy/80">College of Hotel Management</span>
        <span className="text-[0.44rem] font-semibold tracking-[0.2em] uppercase text-primary/70">• Chandgad •</span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 30), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (p) => p === '/' ? location.pathname === '/' : location.pathname.startsWith(p);

  return (
    <>
      {/* Red accent line at very top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gradient-red" />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-navbar py-1.5' : 'bg-white shadow-sm py-2'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">

          {/* Logo */}
          <NavLogo scrolled={scrolled} />

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-0 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.label} className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <>
                    <button className={`flex items-center gap-0.5 px-2.5 py-2 text-[0.73rem] font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${
                      isActive(link.path) ? 'text-primary bg-cream' : 'text-navy hover:text-primary hover:bg-cream'
                    }`}>
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform duration-200 flex-shrink-0 ${activeDropdown === link.label ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,27,46,0.12)] border border-gray-100 overflow-hidden z-50"
                        >
                          <div className="p-1.5">
                            {link.children.map((c) => (
                              <Link key={c.path} to={c.path}
                                className="flex items-center justify-between px-4 py-2.5 text-[0.78rem] text-navy hover:bg-cream hover:text-primary rounded-xl transition-all duration-150 group"
                              >
                                <span className="font-medium">{c.label}</span>
                                {c.tag && (
                                  <span className="text-[0.58rem] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full ml-2 flex-shrink-0">
                                    {c.tag}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={link.path}
                    className={`block px-2.5 py-2 text-[0.73rem] font-semibold rounded-lg whitespace-nowrap transition-all duration-200 relative ${
                      isActive(link.path) ? 'text-primary bg-cream' : 'text-navy hover:text-primary hover:bg-cream'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.div layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="tel:+918793364860"
              className="hidden xl:flex items-center gap-1.5 text-[0.72rem] font-semibold text-navy/70 hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone size={12} className="text-primary flex-shrink-0" />
              +91 87933 64860
            </a>
            <div className="hidden xl:block w-px h-4 bg-gray-200" />
            <div className="flex gap-1">
              {[IgIcon, FbIcon, YtIcon].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-navy/50 hover:text-white hover:bg-primary transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <Link to="/contact"
              className="ml-1 bg-navy text-white text-[0.72rem] font-bold px-4 py-2.5 rounded-xl hover:bg-navy-light transition-all duration-300 hover:-translate-y-0.5 tracking-wide uppercase whitespace-nowrap shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-gray-100 text-navy hover:bg-cream transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={19} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={19} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-100 overflow-hidden bg-white"
            >
              <div className="px-4 py-4 space-y-0.5 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <motion.div key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link to={link.path}
                      className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                        isActive(link.path) ? 'bg-cream text-primary' : 'text-navy hover:bg-cream hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 mt-0.5 space-y-0.5 mb-1">
                        {link.children.map(c => (
                          <Link key={c.path} to={c.path}
                            className="flex items-center justify-between px-4 py-2.5 text-sm text-mid-gray hover:text-primary hover:bg-cream rounded-xl transition-colors"
                          >
                            <span>{c.label}</span>
                            <span className="text-[0.58rem] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">{c.tag}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-3 pb-1 space-y-2.5 border-t border-gray-100 mt-2">
                  <a href="tel:+918793364860" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-navy bg-cream rounded-xl">
                    <Phone size={15} className="text-primary flex-shrink-0" /> +91 87933 64860
                  </a>
                  <Link to="/contact" className="block w-full text-center bg-navy text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wide hover:bg-navy-light transition-colors">
                    Apply Now — Free
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

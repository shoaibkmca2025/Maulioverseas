import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from './Reveal';

const IgIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const FbIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const YtIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;

const footerLinks = [
  { heading: 'Programmes', links: [
    { label: '3-Month Hotel Management', path: '/courses/3-month' },
    { label: '6-Month Advanced', path: '/courses/6-month' },
    { label: 'Dubai Land Jobs', path: '/placements' },
    { label: 'Cruise Ship Jobs', path: '/placements' },
  ]},
  { heading: 'Explore', links: [
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/tastymonials' },
    { label: 'Career Guide', path: '/career-guide' },
    { label: 'Contact Us', path: '/contact' },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Top red accent */}
      <div className="h-1 bg-gradient-red" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative container-pad pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-4">
            <Reveal dir="left">
              <Link to="/" className="inline-block mb-5 group">
                <div className="bg-white rounded-2xl p-3 inline-block shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/mauli-logo.png"
                    alt="Mauli College of Hotel Management, Chandgad"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                Premier hotel management training institution with guaranteed international placements in Dubai 5-star hotels and cruise ships since 2010.
              </p>
              <div className="flex gap-2 mb-6">
                {[
                  { Icon: IgIcon, label: 'Instagram' },
                  { Icon: FbIcon, label: 'Facebook' },
                  { Icon: YtIcon, label: 'YouTube' },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label}
                    className="w-9 h-9 rounded-xl bg-white/8 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 text-sm text-white/50">
                <a href="tel:+918793364860" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                  <Phone size={14} className="text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                  +91 87933 64860
                </a>
                <a href="mailto:info@maulicollege.com" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                  <Mail size={14} className="text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                  info@maulicollege.com
                </a>
                <span className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  Chandgad, Kolhapur District, Maharashtra, India
                </span>
              </div>
            </Reveal>
          </div>

          {/* Links cols */}
          {footerLinks.map(({ heading, links }, gi) => (
            <div key={heading} className="lg:col-span-2">
              <Reveal dir="up" delay={0.1 + gi * 0.08}>
                <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map(({ label, path }) => (
                    <li key={path + label}>
                      <Link to={path}
                        className="text-white/45 hover:text-white text-sm flex items-center gap-1 group transition-colors duration-200"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 text-primary">→</span>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}

          {/* CTA col */}
          <div className="lg:col-span-4">
            <Reveal dir="right" delay={0.2}>
              <div className="bg-gradient-red rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-white font-bold text-lg mb-2 relative">Start Your Dubai Journey</h4>
                <p className="text-white/75 text-sm mb-5 leading-relaxed relative">
                  Join 100+ students who transformed their careers through Mauli College.
                </p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-5 py-3 rounded-xl hover:bg-off-white transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  Apply Now — Free
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© 2026 Mauli College of Hotel Management, Chandgad. All rights reserved.</p>
          <p>Designed & Developed by <span className="text-primary font-semibold">4AM Global Media</span></p>
        </div>
      </div>
    </footer>
  );
}

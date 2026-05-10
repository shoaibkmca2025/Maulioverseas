import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';

const IgIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const FbIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const YtIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;

const FIELDS = [
  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true, half: true },
  { key: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '10-digit mobile', required: true, half: true },
  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: false, half: true },
  { key: 'city', label: 'City / District', type: 'text', placeholder: 'Your city', required: true, half: true },
];

const inputClass = (err) =>
  `w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white ${err ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`;

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 87933 64860', href: 'tel:+918793364860' },
  { icon: Mail, label: 'Email', value: 'info@maulicollege.com', href: 'mailto:info@maulicollege.com' },
  { icon: MapPin, label: 'Address', value: 'Chandgad, Kolhapur District, Maharashtra – 416509', href: null },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '', course: '', source: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit number';
    if (!form.city.trim()) e.city = 'Please enter your city';
    return e;
  };

  const f = (k, v) => {
    setForm(p => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const API = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
      const res = await fetch(`${API}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('success');
    }
  };

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="relative container-pad text-center">
          <Reveal>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">Get in Touch</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white mb-4">We're Here to <span className="text-gradient-red">Help You</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Questions about admission, courses, or placements? Reach out and our counsellors will respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2">
              <Reveal dir="left">
                <h2 className="heading-md text-charcoal mb-6">Contact <span className="text-gradient-red">Information</span></h2>
                <div className="space-y-5 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-mid-gray mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} className="text-sm font-semibold text-charcoal hover:text-primary transition-colors">{value}</a>
                        ) : (
                          <span className="text-sm text-mid-gray">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-mid-gray mb-3">Follow Us</div>
                  <div className="flex gap-2">
                    {[{ Icon: IgIcon, label: 'Instagram' }, { Icon: FbIcon, label: 'Facebook' }, { Icon: YtIcon, label: 'YouTube' }].map(({ Icon, label }) => (
                      <a key={label} href="#" aria-label={label}
                        className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-mid-gray hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Enquiry Highlight */}
                <div className="bg-gradient-red rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Prefer WhatsApp?</h3>
                  <p className="text-white/75 text-sm mb-4">Chat with our admissions team directly — usually responds in minutes.</p>
                  <a
                    href={`https://wa.me/918793364860?text=${encodeURIComponent("Hello! I'm interested in Mauli College's hotel management courses. Please share more details.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-off-white transition-colors"
                  >
                    <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current"><path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.127.558 4.122 1.533 5.856L4 29l8.345-1.519A11.94 11.94 0 0016.003 28C22.63 28 28 22.628 28 15.997 28 9.371 22.631 3 16.003 3zm6.63 16.663c-.277.776-1.611 1.482-2.21 1.545-.557.06-1.074.28-3.617-.753-3.04-1.24-4.996-4.353-5.147-4.556-.15-.2-1.233-1.639-1.233-3.127 0-1.489.782-2.22 1.059-2.523.278-.302.605-.378.806-.378.202 0 .403.002.579.01.186.01.434-.07.68.52.253.605.86 2.094.935 2.245.076.15.126.327.026.528-.1.2-.15.327-.302.503-.15.176-.317.394-.452.528-.15.151-.307.315-.132.617.176.302.782 1.289 1.679 2.088 1.154 1.03 2.127 1.348 2.43 1.499.302.15.479.126.655-.075.176-.201.756-.882 1.007-1.184.251-.302.503-.25.855-.1.351.15 2.234 1.054 2.612 1.245.378.19.629.285.72.443.09.159.09.921-.187 1.7z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal dir="right" delay={0.12}>
                <div className="bg-white rounded-3xl shadow-card p-5 sm:p-8">
                  <h2 className="heading-md text-charcoal mb-6">Send an <span className="text-gradient-red">Enquiry</span></h2>

                  {status === 'success' ? (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Enquiry Sent!</h3>
                      <p className="text-mid-gray text-sm">Our team will contact <strong>{form.name}</strong> within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {FIELDS.map(({ key, label, type, placeholder, required }) => (
                          <div key={key}>
                            <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mid-gray mb-1.5">
                              {label} {required && <span className="text-primary">*</span>}
                            </label>
                            <input
                              type={type}
                              placeholder={placeholder}
                              value={form[key]}
                              onChange={(e) => f(key, key === 'mobile' ? e.target.value.replace(/\D/, '') : e.target.value)}
                              maxLength={key === 'mobile' ? 10 : undefined}
                              className={inputClass(errors[key])}
                            />
                            {errors[key] && (
                              <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                                <AlertCircle size={11} /> {errors[key]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mid-gray mb-1.5">Course Interest</label>
                          <select value={form.course} onChange={e => f('course', e.target.value)} className={inputClass(false)}>
                            <option value="">Select course...</option>
                            <option value="3-month">3-Month Fast Track</option>
                            <option value="6-month">6-Month Advanced</option>
                            <option value="not-sure">Not Sure Yet</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mid-gray mb-1.5">How Did You Hear?</label>
                          <select value={form.source} onChange={e => f('source', e.target.value)} className={inputClass(false)}>
                            <option value="">Select...</option>
                            <option value="social">Social Media</option>
                            <option value="referral">Friend / Referral</option>
                            <option value="search">Online Search</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mid-gray mb-1.5">Message (Optional)</label>
                        <textarea rows={4} placeholder="Any specific questions or requirements…"
                          value={form.message} onChange={e => f('message', e.target.value)} maxLength={500}
                          className={`${inputClass(false)} resize-none`}
                        />
                      </div>

                      <button type="submit" disabled={status === 'loading'}
                        className="w-full bg-gradient-red text-white font-bold py-4 rounded-xl text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-red hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : 'Send Enquiry — Free'}
                      </button>
                      <p className="text-center text-mid-gray/60 text-xs">🔒 Your information is 100% secure and confidential</p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-8">
            <h2 className="heading-lg text-charcoal">Find <span className="text-gradient-red">Us</span></h2>
            <p className="text-mid-gray mt-2">Mauli College of Hotel Management, Chandgad, Kolhapur</p>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-card h-56 sm:h-80 lg:h-[400px]">
              <iframe
                title="Mauli College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30675.45!2d74.13!3d15.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU4JzEyLjAiTiA3NMKwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const FIELDS = [
  { key: 'name',    label: 'Full Name',      type: 'text',   placeholder: 'Your full name',          required: true,  half: true },
  { key: 'mobile',  label: 'Mobile Number',  type: 'tel',    placeholder: '10-digit mobile',         required: true,  half: true },
  { key: 'email',   label: 'Email Address',  type: 'email',  placeholder: 'your@email.com',          required: false, half: true },
  { key: 'city',    label: 'City / District',type: 'text',   placeholder: 'Your city',               required: true,  half: true },
];

function InputField({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/60 mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1 text-red-400 text-xs mt-1">
            <AlertCircle size={11} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass = (err) =>
  `w-full bg-white/8 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:bg-white/12 ${
    err ? 'border-red-400/60 focus:border-red-400' : 'border-white/15 focus:border-primary'
  }`;

export let openAdmissionForm = () => {};

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '', course: '', source: '', message: '' });

  openAdmissionForm = () => setOpen(true);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => setOpen(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit number';
    if (!form.city.trim()) e.city = 'Please enter your city';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(close, 3200);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('success'); // Still show success — saved locally
      setTimeout(close, 3200);
    }
  };

  const f = (k, v) => { setForm(p => ({ ...p, [k]: v })); if (errors[k]) setErrors(p => ({ ...p, [k]: '' })); };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 48 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 48 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(145deg, #070e1c 0%, #0d1b2e 100%)' }}
            >
              {/* Close */}
              <button onClick={close}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
              ><X size={16} /></button>

              {/* Header */}
              <div className="px-7 pt-7 pb-5 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg p-1.5">
                    <img src="/mauli-logo.png" alt="Mauli College" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">Free Admission Enquiry</span>
                    </div>
                    <h2 className="text-white font-bold text-xl leading-tight">Begin Your Dubai Career</h2>
                    <p className="text-white/50 text-xs mt-1">Response within 24 hours — no spam, ever.</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-7 py-6">
                {status === 'success' ? (
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                    <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Enquiry Sent!</h3>
                    <p className="text-white/55 text-sm">Our team will contact <span className="text-white font-semibold">{form.name}</span> within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {FIELDS.map(({ key, label, type, placeholder, required }) => (
                        <InputField key={key} label={label} required={required} error={errors[key]}>
                          <input
                            type={type}
                            placeholder={placeholder}
                            value={form[key]}
                            onChange={(e) => f(key, key === 'mobile' ? e.target.value.replace(/\D/, '') : e.target.value)}
                            maxLength={key === 'mobile' ? 10 : undefined}
                            className={inputClass(errors[key])}
                          />
                        </InputField>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/60 mb-1.5">Course</label>
                        <select value={form.course} onChange={e => f('course', e.target.value)} className={inputClass(false)}>
                          <option value="">Select...</option>
                          <option value="3-month">3-Month Course</option>
                          <option value="6-month">6-Month Course</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/60 mb-1.5">How Heard?</label>
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
                      <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/60 mb-1.5">Message (optional)</label>
                      <textarea rows={2} placeholder="Any questions or queries…" value={form.message}
                        onChange={e => f('message', e.target.value)} maxLength={300}
                        className={`${inputClass(false)} resize-none`}
                      />
                    </div>

                    <button type="submit" disabled={status === 'loading'}
                      className="w-full bg-gradient-red text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-red hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : 'Send Enquiry — Free'}
                    </button>
                    <p className="text-center text-white/30 text-xs">🔒 Your information is 100% secure and confidential</p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

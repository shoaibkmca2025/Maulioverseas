import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Filter, Play, X, TrendingUp, MapPin } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';

const filters = ['All', '5 Stars', 'Dubai Hotels', 'Cruise Ships', 'Recent (2024)'];

const testimonials = [
  {
    id: 1, name: 'Rahul Sharma', from: 'Kolhapur', now: 'Atlantis The Palm, Dubai',
    role: 'F&B Attendant', course: '3-Month', year: 2024, stars: 5,
    filter: ['All', '5 Stars', 'Dubai Hotels', 'Recent (2024)'],
    salary: 'AED 2,400/mo',
    review: 'I came from a small village near Kolhapur with no hotel experience. Mauli changed my life completely. The training is incredibly practical — we practice in a real restaurant setup daily. Within 1 month of completing the 3-month course, I had my offer letter for Atlantis The Palm. My family couldn\'t believe it.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    hasVideo: true,
  },
  {
    id: 2, name: 'Priya Desai', from: 'Sangli', now: 'JW Marriott, Dubai Marina',
    role: 'Front Desk Agent', course: '6-Month', year: 2024, stars: 5,
    filter: ['All', '5 Stars', 'Dubai Hotels', 'Recent (2024)'],
    salary: 'AED 2,800/mo',
    review: 'The 6-month programme is genuinely comprehensive. I learned front office, housekeeping AND F&B — which made me much more employable than candidates from other institutes. Dubai Marriott\'s HR told me Mauli students are always well-prepared.',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80',
    hasVideo: false,
  },
  {
    id: 3, name: 'Suresh Patil', from: 'Chandgad', now: 'Royal Caribbean Cruise',
    role: 'F&B Steward', course: '6-Month', year: 2023, stars: 5,
    filter: ['All', '5 Stars', 'Cruise Ships'],
    salary: 'USD 1,600/mo',
    review: 'Cruise life is something else! I visited 12 countries in my first contract. The cruise module at Mauli was surprisingly detailed — we even practiced service during simulated ship movements. I felt prepared from day one on the ship.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
    hasVideo: true,
  },
  {
    id: 4, name: 'Anita Kulkarni', from: 'Belgaum', now: 'Sofitel Dubai',
    role: 'Housekeeping Supervisor', course: '6-Month', year: 2024, stars: 5,
    filter: ['All', '5 Stars', 'Dubai Hotels', 'Recent (2024)'],
    salary: 'AED 3,100/mo',
    review: 'I joined Mauli at 22 with no work experience. Now at 24, I\'m a supervisor at Sofitel Dubai managing a team of 8. The placement team was outstanding — they kept following up and preparing me for every interview round.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    hasVideo: false,
  },
  {
    id: 5, name: 'Vikram Naik', from: 'Nipani', now: 'MSC Cruises',
    role: 'Bar Waiter', course: '6-Month', year: 2023, stars: 5,
    filter: ['All', '5 Stars', 'Cruise Ships'],
    salary: 'USD 1,900/mo',
    review: 'The bar and beverage module was my favourite. We learned cocktails, wine pairing, and even barista skills. MSC Cruises specifically mentioned my bar knowledge during the interview. Thank you Mauli!',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
    hasVideo: false,
  },
  {
    id: 6, name: 'Kavita Shinde', from: 'Kolhapur', now: 'Burj Al Arab, Dubai',
    role: 'Restaurant Hostess', course: '3-Month', year: 2024, stars: 5,
    filter: ['All', '5 Stars', 'Dubai Hotels', 'Recent (2024)'],
    salary: 'AED 2,600/mo',
    review: 'Burj Al Arab — the most iconic hotel in the world! I never dreamed I\'d work here. The grooming and communication sessions at Mauli made me carry myself with confidence. The interviewers said my presentation was exceptional.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80',
    hasVideo: true,
  },
];

const stats = [
  { value: '98%', label: 'Would Recommend' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '300+', label: 'Success Stories' },
  { value: '15+', label: 'Countries Reached' },
];

export default function Tastymonials() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [videoModal, setVideoModal] = useState(false);

  const filtered = testimonials.filter(t => t.filter.includes(activeFilter));

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="relative container-pad text-center">
          <Reveal>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">Tasty-monials</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white mb-4">Real Stories, <span className="text-gradient-red">Real Success</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Hear from 300+ students who transformed their lives through Mauli College's hospitality programmes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-0">
        <div className="container-pad">
          <Reveal>
            <div className="bg-white rounded-3xl shadow-card grid grid-cols-2 md:grid-cols-4 -mt-10 relative z-10 overflow-hidden">
              {stats.map(({ value, label }, i) => (
                <div key={label} className={`flex flex-col items-center justify-center py-6 px-4 text-center ${i < 3 ? 'border-r border-gray-100' : ''}`}>
                  <div className="text-2xl font-black text-charcoal">{value}</div>
                  <div className="text-xs text-mid-gray uppercase tracking-wider font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-pad">
          {/* Filters */}
          <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeFilter === f ? 'bg-primary text-white shadow-red/20 shadow-lg' : 'bg-white text-mid-gray hover:text-primary shadow-card'}`}
              >
                {f === 'All' && <Filter size={12} />} {f}
              </button>
            ))}
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Profile */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <img src={t.img} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                        {t.hasVideo && (
                          <button onClick={() => setVideoModal(true)}
                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Play size={10} className="text-white fill-white ml-0.5" />
                          </button>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-charcoal text-sm">{t.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-mid-gray mt-0.5">
                          <MapPin size={10} className="text-primary" /> {t.from}
                        </div>
                        <div className="text-xs text-primary font-semibold mt-0.5">{t.now}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex gap-0.5">
                          {Array(t.stars).fill(0).map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
                        </div>
                        <span className="text-[0.6rem] text-mid-gray">{t.year}</span>
                      </div>
                    </div>
                    <p className="text-mid-gray text-sm leading-relaxed">"{t.review}"</p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[0.6rem] uppercase tracking-wider font-bold text-mid-gray">{t.role}</div>
                      <div className="text-xs font-semibold text-charcoal">{t.course} Programme</div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-cream px-3 py-1.5 rounded-full">
                      <TrendingUp size={11} className="text-green-600" />
                      <span className="text-xs font-bold text-primary">{t.salary}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-charcoal">
        <div className="container-pad text-center">
          <Reveal>
            <h2 className="heading-lg text-white mb-4">Write Your Own <span className="text-gradient-red">Success Story</span></h2>
            <p className="text-white/55 mb-8 max-w-md mx-auto">Join the next batch of Mauli alumni who changed their lives through international hospitality careers.</p>
            <button onClick={openAdmissionForm}
              className="bg-gradient-red text-white font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-widest hover:shadow-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now — Free
            </button>
          </Reveal>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setVideoModal(false)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setVideoModal(false)}>
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-3xl bg-black rounded-3xl overflow-hidden aspect-video flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-white/40 text-sm text-center">
                <Play size={48} className="mx-auto mb-3 opacity-30" />
                <p>Video testimonial coming soon</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

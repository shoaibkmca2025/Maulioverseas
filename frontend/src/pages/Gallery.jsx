import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';

const tabs = ['All', 'Campus', 'Training', 'Placements', 'Events'];

const photos = [
  { id: 1, tab: 'Campus', src: 'https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=800&q=80', label: 'Training Kitchen' },
  { id: 2, tab: 'Training', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', label: 'Restaurant Service Practice' },
  { id: 3, tab: 'Placements', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80', label: 'Dubai Batch 2024' },
  { id: 4, tab: 'Campus', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', label: 'Hospitality Lab' },
  { id: 5, tab: 'Training', src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', label: 'Bar & Mixology Class' },
  { id: 6, tab: 'Placements', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', label: 'Atlantis, The Palm Batch' },
  { id: 7, tab: 'Events', src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80', label: 'Annual Convocation 2024' },
  { id: 8, tab: 'Campus', src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80', label: 'Grooming & Presentation Class' },
  { id: 9, tab: 'Training', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', label: 'Banquet Setup Training' },
  { id: 10, tab: 'Placements', src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', label: 'JW Marriott Placement' },
  { id: 11, tab: 'Events', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', label: 'Industry Expert Talk' },
  { id: 12, tab: 'Campus', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', label: 'Classroom Sessions' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTab === 'All' ? photos : photos.filter(p => p.tab === activeTab);

  const prev = () => {
    const idx = filtered.findIndex(p => p.id === lightbox.id);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
  };
  const next = () => {
    const idx = filtered.findIndex(p => p.id === lightbox.id);
    setLightbox(filtered[(idx + 1) % filtered.length]);
  };

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-85" />
        <div className="relative container-pad text-center">
          <Reveal>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">Gallery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white mb-4">Life at <span className="text-gradient-red">Mauli College</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-xl mx-auto">A glimpse into our campus, training facilities, placement drives, and student celebrations.</p>
          </Reveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === tab ? 'bg-primary text-white shadow-lg shadow-red/20' : 'bg-white text-mid-gray hover:text-primary shadow-card'}`}
              >
                {tab}
              </button>
            ))}
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  onClick={() => setLightbox(photo)}
                >
                  <img src={photo.src} alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <ZoomIn size={28} className="text-white mb-2" />
                    <span className="text-white text-xs font-semibold text-center px-3">{photo.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronRight size={24} />
            </button>
            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full"
            >
              <img src={lightbox.src} alt={lightbox.label} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <p className="text-center text-white/70 text-sm mt-4">{lightbox.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Teaser */}
      <section className="section-pad bg-charcoal">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <h2 className="heading-lg text-white">Campus <span className="text-gradient-red">Tour</span></h2>
            <p className="text-white/50 mt-2 max-w-md mx-auto text-sm">See our state-of-the-art training facilities, classrooms, and mock hotel setups.</p>
          </Reveal>
          <Reveal>
            <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img src="https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=1200&q=80" alt="Campus Tour" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[22px] border-l-white ml-1.5" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Building2, Globe, CheckCircle, MapPin, Clock, Star, ChevronRight, TrendingUp } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';

const tabs = ['All', 'Dubai Hotels', 'Cruise Ships'];

const placements = [
  { name: 'Rahul Sharma', role: 'F&B Attendant', company: 'Atlantis The Palm, Dubai', tab: 'Dubai Hotels', salary: 'AED 2,400/mo', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', year: '2024' },
  { name: 'Priya More', role: 'Front Desk Agent', company: 'JW Marriott, Dubai Marina', tab: 'Dubai Hotels', salary: 'AED 2,800/mo', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80', year: '2024' },
  { name: 'Suresh Patil', role: 'Bar Waiter', company: 'Royal Caribbean Cruise', tab: 'Cruise Ships', salary: 'USD 1,600/mo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', year: '2023' },
  { name: 'Anita Desai', role: 'Housekeeping Supervisor', company: 'Sofitel Dubai', tab: 'Dubai Hotels', salary: 'AED 3,100/mo', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', year: '2024' },
  { name: 'Vikram Naik', role: 'F&B Steward', company: 'MSC Cruises', tab: 'Cruise Ships', salary: 'USD 1,900/mo', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', year: '2023' },
  { name: 'Kavita Joshi', role: 'Restaurant Host', company: 'Burj Al Arab, Dubai', tab: 'Dubai Hotels', salary: 'AED 2,600/mo', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', year: '2024' },
  { name: 'Manoj Kulkarni', role: 'Cabin Steward', company: 'Norwegian Cruise Line', tab: 'Cruise Ships', salary: 'USD 1,800/mo', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', year: '2023' },
  { name: 'Deepa Shinde', role: 'Room Service Attendant', company: 'Hyatt Regency, Dubai', tab: 'Dubai Hotels', salary: 'AED 2,200/mo', img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80', year: '2024' },
];

const steps = [
  { num: '01', title: 'Enroll & Train', desc: 'Complete your 3 or 6-month programme at Mauli College' },
  { num: '02', title: 'Placement Drive', desc: 'Attend our campus interviews with Dubai & cruise recruiters' },
  { num: '03', title: 'Offer Letter', desc: 'Receive your international employment offer letter' },
  { num: '04', title: 'Documentation', desc: 'We guide you through visa, medical, and police clearance' },
  { num: '05', title: 'Fly to Dubai', desc: 'Board your flight and begin your international career' },
];

const partners = [
  'Atlantis The Palm', 'Burj Al Arab', 'JW Marriott', 'Sofitel', 'Hyatt Regency',
  'Royal Caribbean', 'MSC Cruises', 'Norwegian Cruise Line', 'Hilton Hotels', 'Marriott International',
];

export default function PlacementsAbroad() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? placements : placements.filter(p => p.tab === activeTab);

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-85" />
        <div className="relative container-pad text-center">
          <Reveal>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              Placements
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white mb-4">
              Real Students. Real <span className="text-gradient-red">Dubai Jobs.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              300+ students placed in Dubai 5-star hotels and cruise ships since 2010. Their success is your roadmap.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6">
              {[['300+', 'Students Placed'], ['5★', 'Hotel Partners'], ['95%+', 'Placement Rate'], ['AED 2,500', 'Avg First Salary']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Placement Process */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-4">Process</span>
            <h2 className="heading-lg text-charcoal">How We Get You <span className="text-gradient-red">To Dubai</span></h2>
          </Reveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-200" />
            <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {steps.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-card relative z-10">
                      <span className="text-primary font-black text-sm">{step.num}</span>
                    </div>
                    <h3 className="font-bold text-charcoal text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-mid-gray leading-relaxed">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Placement Grid */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="text-center mb-10">
            <h2 className="heading-lg text-charcoal mb-6">Our Placed <span className="text-gradient-red">Alumni</span></h2>
            <div className="flex justify-center gap-2">
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === tab ? 'bg-primary text-white shadow-red/20 shadow-lg' : 'bg-cream text-mid-gray hover:text-primary'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
            >
              {filtered.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                  <div className="relative h-40 overflow-hidden">
                    <img src={p.img} alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white text-xs font-bold bg-primary px-2 py-0.5 rounded-full">
                      {p.year}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-green-600">Placed</span>
                    </div>
                    <h3 className="font-bold text-charcoal text-sm">{p.name}</h3>
                    <p className="text-xs text-mid-gray mb-1">{p.role}</p>
                    <p className="text-xs text-primary font-semibold mb-2">{p.company}</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-charcoal">
                      <TrendingUp size={12} className="text-green-500" /> {p.salary}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Partners */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-4">Partners</span>
            <h2 className="heading-lg text-charcoal">Hiring <span className="text-gradient-red">Partners</span></h2>
          </Reveal>
          <StaggerReveal className="flex flex-wrap justify-center gap-3">
            {partners.map(p => (
              <StaggerItem key={p}>
                <div className="bg-white px-5 py-2.5 rounded-xl shadow-card text-sm font-semibold text-mid-gray hover:text-primary hover:bg-cream transition-colors">
                  {p}
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Salary Comparison */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <h2 className="heading-lg text-charcoal">What You <span className="text-gradient-red">Can Earn</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal dir="left">
              <div className="bg-charcoal rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 size={22} className="text-primary" />
                  <h3 className="text-lg font-bold">Dubai Hotels</h3>
                </div>
                <div className="space-y-4">
                  {[
                    ['F&B Attendant', 'AED 1,800–2,400'],
                    ['Front Desk Agent', 'AED 2,200–2,800'],
                    ['Housekeeping Supervisor', 'AED 2,800–3,500'],
                    ['Restaurant Manager', 'AED 4,500–7,000'],
                  ].map(([role, sal]) => (
                    <div key={role} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="text-sm text-white/70">{role}</span>
                      <span className="text-sm font-bold text-primary">{sal}/mo</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-4">+ Accommodation, Meals & Insurance</p>
              </div>
            </Reveal>
            <Reveal dir="right" delay={0.1}>
              <div className="bg-charcoal rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Anchor size={22} className="text-primary" />
                  <h3 className="text-lg font-bold">Cruise Ships</h3>
                </div>
                <div className="space-y-4">
                  {[
                    ['F&B Steward', 'USD 1,200–1,600'],
                    ['Cabin Steward', 'USD 1,400–1,800'],
                    ['Bar Waiter', 'USD 1,600–2,000'],
                    ['Restaurant Supervisor', 'USD 2,500–3,500'],
                  ].map(([role, sal]) => (
                    <div key={role} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="text-sm text-white/70">{role}</span>
                      <span className="text-sm font-bold text-primary">{sal}/mo</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-4">+ All expenses covered onboard</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative container-pad text-center">
          <Reveal>
            <h2 className="heading-lg text-white mb-4">Your Name Could Be on This List</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Enquire today and let us plan your Dubai career journey.</p>
            <button onClick={openAdmissionForm}
              className="inline-flex items-center gap-2 bg-white text-primary font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-widest hover:bg-off-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Start Free Enquiry <ChevronRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

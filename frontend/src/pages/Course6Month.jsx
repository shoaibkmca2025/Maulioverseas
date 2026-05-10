import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ChevronDown, ChevronUp, Star, Award, Users, MapPin, Anchor } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';

const modules = [
  { num: '01', title: 'Hotel Operations Fundamentals', duration: '3 weeks', topics: ['Hotel Departments Overview', 'Hotel Management Standards', 'Organisational Structures', 'Industry Terminology'] },
  { num: '02', title: 'Front Office & Reservations', duration: '4 weeks', topics: ['Check-in / Check-out Procedures', 'PMS Software (Opera)', 'Guest Profile Management', 'Revenue Optimisation Basics'] },
  { num: '03', title: 'Housekeeping Excellence', duration: '3 weeks', topics: ['Room Preparation Standards', 'Linen & Laundry Operations', 'Deep Cleaning Protocols', 'Lost & Found Management'] },
  { num: '04', title: 'F&B Service & Production', duration: '5 weeks', topics: ['Fine Dining Service', 'Banquet & Buffet Setup', 'Basic Culinary Awareness', 'Kitchen Coordination'] },
  { num: '05', title: 'Bar, Beverage & Sommelier', duration: '3 weeks', topics: ['Wine & Spirits Knowledge', 'Cocktail & Mocktail Prep', 'Beer & Soft Drink Service', 'Beverage Costing'] },
  { num: '06', title: 'Cruise Ship Operations', duration: '4 weeks', topics: ['Cruise Industry Overview', 'Ship Safety & STCW Basics', 'Multi-role Cruise Positions', 'Life at Sea Preparation'] },
  { num: '07', title: 'Leadership & Supervision', duration: '2 weeks', topics: ['Team Management', 'Shift Supervision', 'Conflict Resolution', 'Performance KPIs'] },
  { num: '08', title: 'Placement Preparation', duration: '2 weeks', topics: ['Resume & LinkedIn', 'Mock Interviews & GD', 'Visa & Documentation', 'Pre-departure Briefing'] },
];

const placements = [
  { type: 'Dubai 5-Star Hotels', icon: Award, salary: 'AED 2,200–3,500/mo', roles: ['F&B Attendant', 'Front Desk Agent', 'Housekeeping Supervisor', 'Bar Tender'] },
  { type: 'Cruise Ships', icon: Anchor, salary: 'USD 1,200–2,000/mo', roles: ['F&B Steward', 'Cabin Steward', 'Bar Waiter', 'Buffet Attendant'] },
];

const faqs = [
  { q: 'How is 6-month different from 3-month?', a: 'The 6-month covers all hotel departments — including Front Office, Housekeeping, and Cruise Ship operations — not just F&B. It\'s preferred by top Dubai properties and cruise lines, resulting in higher salary offers.' },
  { q: 'Are cruise ship placements included?', a: 'Yes, the 6-month programme specifically trains for both land (Dubai hotels) and sea (cruise ships) placements, including STCW basic safety awareness.' },
  { q: 'What certifications do I receive?', a: 'Mauli Institute Certificate, NSDC-aligned certification, and module-specific awards. Cruise candidates also get an introduction to STCW awareness training.' },
  { q: 'Is accommodation provided in Dubai?', a: 'Hotel employers provide shared staff accommodation as part of the employment package. Meals and medical insurance are also typically included.' },
  { q: 'What is the maximum salary growth?', a: 'Many of our alumni have grown to Supervisory and Managerial roles earning AED 5,000–8,000/month within 3–4 years of starting.' },
];

export default function Course6Month() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openModule, setOpenModule] = useState(0);

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-85" />
        <div className="relative container-pad">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full">Most Popular</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] bg-amber-500 text-white px-3 py-1 rounded-full">Best Value</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="heading-xl text-white mb-4">
                Advanced Hotel<br /><span className="text-gradient-red">Management Programme</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-white/60 text-lg mb-8 max-w-xl leading-relaxed">
                6 months of deep, multi-department training covering Dubai hotels AND cruise ships. The most comprehensive hotel management programme in Kolhapur district.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <button onClick={openAdmissionForm}
                  className="bg-gradient-red text-white font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-wider hover:shadow-red hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply Now — Free
                </button>
                <Link to="/courses"
                  className="border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors"
                >
                  Compare Courses
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-0">
        <div className="container-pad">
          <Reveal>
            <div className="rounded-3xl shadow-card grid grid-cols-2 md:grid-cols-4 -mt-10 relative z-10 overflow-hidden gap-px bg-gray-100">
              {[
                { icon: Clock, label: 'Duration', value: '6 Months' },
                { icon: Users, label: 'Batch Size', value: '25 Students' },
                { icon: MapPin, label: 'Placement', value: 'Dubai + Cruise' },
                { icon: Award, label: 'Course Fee', value: '₹75,000' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={label} className="flex flex-col items-center justify-center py-5 px-3 text-center bg-white">
                  <Icon size={18} className="text-primary mb-2" />
                  <div className="text-lg sm:text-xl font-black text-charcoal">{value}</div>
                  <div className="text-[0.65rem] sm:text-xs text-mid-gray uppercase tracking-wider font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Placement Tracks */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-4">Placement Tracks</span>
            <h2 className="heading-lg text-charcoal">Two World-Class <span className="text-gradient-red">Career Paths</span></h2>
          </Reveal>
          <StaggerReveal className="grid md:grid-cols-2 gap-6">
            {placements.map(({ type, icon: Icon, salary, roles }) => (
              <StaggerItem key={type}>
                <div className="bg-charcoal rounded-3xl p-8 text-white">
                  <div className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{type}</h3>
                  <p className="text-primary font-bold text-sm mb-5">{salary}</p>
                  <div className="space-y-2">
                    {roles.map(r => (
                      <div key={r} className="flex items-center gap-2">
                        <CheckCircle size={13} className="text-primary" />
                        <span className="text-white/65 text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-4">Curriculum</span>
            <h2 className="heading-lg text-charcoal">8 Intensive <span className="text-gradient-red">Modules</span></h2>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-3">
            {modules.map((mod, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-cream transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[0.6rem] font-black text-primary">{mod.num}</span>
                      <span className="font-bold text-charcoal text-sm">{mod.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-mid-gray hidden sm:block">{mod.duration}</span>
                      {openModule === i ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-mid-gray" />}
                    </div>
                  </button>
                  {openModule === i && (
                    <div className="px-4 sm:px-6 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map(t => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          <span className="text-sm text-mid-gray">{t}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <h2 className="heading-lg text-charcoal">Alumni <span className="text-gradient-red">Success Stories</span></h2>
          </Reveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sneha Kulkarni', city: 'Ichalkaranji', review: 'The 6-month programme opened doors I didn\'t even know existed. I\'m now a Front Desk Supervisor at Marriott JBR. The investment was 100% worth it.', rating: 5, salary: 'AED 3,200/mo' },
              { name: 'Ganesh More', city: 'Belgaum', review: 'Got placed on a Royal Caribbean cruise ship! The cruise module was incredibly detailed and gave me real confidence for the ship interviews.', rating: 5, salary: 'USD 1,800/mo' },
              { name: 'Priya Naik', city: 'Chandgad', review: 'From Chandgad to Dubai — something I never imagined possible. The placement team kept following up until I got my offer letter.', rating: 5, salary: 'AED 2,800/mo' },
            ].map((r) => (
              <StaggerItem key={r.name}>
                <div className="bg-white rounded-2xl p-6 shadow-card h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array(r.rating).fill(0).map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-mid-gray text-sm leading-relaxed flex-1 mb-4">"{r.review}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-charcoal text-sm">{r.name}</div>
                      <div className="text-xs text-mid-gray">{r.city}</div>
                    </div>
                    <span className="text-xs font-bold text-primary bg-cream px-2 py-1 rounded-full">{r.salary}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <h2 className="heading-lg text-charcoal">Frequently Asked <span className="text-gradient-red">Questions</span></h2>
          </Reveal>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-cream transition-colors"
                  >
                    <span className="font-semibold text-charcoal text-sm pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={16} className="text-primary flex-shrink-0" /> : <ChevronDown size={16} className="text-mid-gray flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-mid-gray leading-relaxed">{faq.a}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-red relative overflow-hidden">
        <div className="relative container-pad text-center">
          <Reveal>
            <h2 className="heading-lg text-white mb-4">Become a Hotel Management Leader</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Join our next batch and start your international career journey. Seats are limited.</p>
            <button onClick={openAdmissionForm}
              className="bg-white text-primary font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-widest hover:bg-off-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Apply Now — Free
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

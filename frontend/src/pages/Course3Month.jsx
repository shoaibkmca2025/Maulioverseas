import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ChevronDown, ChevronUp, Star, Award, Users, MapPin } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';

const curriculum = [
  { week: 'Week 1–2', title: 'Hotel Management Fundamentals', topics: ['Introduction to Hotel Industry', 'Types of Hotels & Resorts', 'Guest Lifecycle Journey', 'Professional Communication'] },
  { week: 'Week 3–5', title: 'F&B Service Mastery', topics: ['Restaurant Service Styles', 'Table Setting & Protocols', 'Menu Knowledge & Upselling', 'Order Taking & POS Systems'] },
  { week: 'Week 6–8', title: 'Bar & Beverage Operations', topics: ['Beverage Knowledge', 'Cocktail Preparation Basics', 'Wine Service Protocols', 'Bar Hygiene & Safety'] },
  { week: 'Week 9–10', title: 'Guest Relations & Culture', topics: ['Dubai Culture & Etiquette', 'Complaint Handling', 'VIP Guest Management', 'Cross-Cultural Communication'] },
  { week: 'Week 11–12', title: 'Career Preparation', topics: ['Resume & LinkedIn Building', 'Mock Interviews', 'Dubai Labour Laws', 'Pre-Departure Orientation'] },
];

const faqs = [
  { q: 'What is the eligibility for this course?', a: 'Minimum 10th pass. Good communication skills are preferred but not mandatory — we train you from scratch.' },
  { q: 'Is placement guaranteed?', a: 'Yes, we provide 100% placement assistance. Our tie-ups with Dubai 5-star hotels mean you get interview calls before course completion.' },
  { q: 'What documents are needed for Dubai?', a: 'Passport, medical fitness certificate, police clearance certificate, and educational certificates. We guide you through every step.' },
  { q: 'Can I pay the fee in installments?', a: 'Yes, we offer flexible payment plans — 50% at admission and 50% before placement. EMI options also available.' },
  { q: 'What is the starting salary in Dubai?', a: 'Freshers typically start at AED 1,800–2,500/month plus accommodation, meals, and visa. Many students double their salary within a year.' },
];

export default function Course3Month() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openWeek, setOpenWeek] = useState(0);

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-85" />
        <div className="relative container-pad">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full">Fast Track</span>
                <span className="text-white/40 text-sm">3-Month Programme</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="heading-xl text-white mb-4">
                Fast-Track Hotel Management<br /><span className="text-gradient-red">Programme</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-white/60 text-lg mb-8 max-w-xl leading-relaxed">
                90 days of intensive, industry-focused training that takes you from zero to job-ready for Dubai's luxury hotel industry.
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
                { icon: Clock, label: 'Duration', value: '3 Months' },
                { icon: Users, label: 'Batch Size', value: '20 Students' },
                { icon: MapPin, label: 'Placement', value: 'Dubai 5★' },
                { icon: Award, label: 'Course Fee', value: '₹45,000' },
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

      {/* Overview + Includes */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal dir="left">
              <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-4">Programme Overview</span>
              <h2 className="heading-lg text-charcoal mb-4">Everything You Need to <span className="text-gradient-red">Launch in Dubai</span></h2>
              <p className="text-mid-gray leading-relaxed mb-6">
                Our 3-month fast-track is built around a single goal: getting you placed in a Dubai 5-star hotel as fast as possible. Every module, every practice session, and every mock interview is tailored to what Dubai recruiters actually look for.
              </p>
              <div className="space-y-3">
                {['Live hotel simulations with actual equipment', 'Personality & grooming sessions', 'Dubai-specific cultural training', 'Pre-departure legal & logistics guidance', 'Lifetime alumni network & job support'].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-mid-gray">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.15}>
              <div className="bg-charcoal rounded-3xl p-8 text-white">
                <h3 className="text-lg font-bold mb-6 text-white">Programme Includes</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Theory Classes', desc: '5 days/week, 4 hours/day classroom training' },
                    { label: 'Practical Training', desc: 'Live mock restaurant & bar sessions daily' },
                    { label: 'Soft Skills', desc: 'Communication, grooming, etiquette workshops' },
                    { label: 'Placement Support', desc: 'Resume, interviews, recruiter connects' },
                    { label: 'Certification', desc: 'Mauli Institute Certificate + NSDC-aligned' },
                    { label: 'Visa Guidance', desc: 'Complete Dubai employment visa support' },
                  ].map(({ label, desc }) => (
                    <div key={label} className="flex gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">{label}</div>
                        <div className="text-xs text-white/50">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-4">Curriculum</span>
            <h2 className="heading-lg text-charcoal">Week-by-Week <span className="text-gradient-red">Breakdown</span></h2>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-3">
            {curriculum.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <button
                    onClick={() => setOpenWeek(openWeek === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left group hover:bg-cream transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">{item.week}</span>
                      <span className="font-bold text-charcoal text-sm group-hover:text-primary transition-colors">{item.title}</span>
                    </div>
                    {openWeek === i ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-mid-gray" />}
                  </button>
                  {openWeek === i && (
                    <div className="px-4 sm:px-6 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.topics.map(t => (
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
            <h2 className="heading-lg text-charcoal">Student <span className="text-gradient-red">Reviews</span></h2>
          </Reveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ravi Patil', city: 'Kolhapur', review: 'The 3-month course was intense but worth every rupee. I got placed in Atlantis Palm within 2 months of completing the course!', rating: 5, salary: 'AED 2,200/mo' },
              { name: 'Pooja Desai', city: 'Sangli', review: 'Teachers are very helpful and the mock sessions made me confident for real interviews. Dubai life is amazing!', rating: 5, salary: 'AED 1,900/mo' },
              { name: 'Amol Shinde', city: 'Chandgad', review: 'Short course, big impact. The grooming and communication sessions changed how I carry myself. Highly recommend!', rating: 5, salary: 'AED 2,000/mo' },
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
            <h2 className="heading-lg text-white mb-4">Your Dubai Career Starts Here</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Limited seats per batch. Secure your spot with a free enquiry today.</p>
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

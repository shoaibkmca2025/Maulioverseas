import { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, FileText, BookOpen, Compass, CheckSquare, TrendingUp } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';

const sections = [
  {
    icon: Globe,
    title: 'Dubai Hospitality Market',
    color: 'bg-blue-500',
    content: [
      { heading: 'Why Dubai?', body: 'Dubai is the world\'s most visited city (2023) with 14.36 million tourists. It hosts 700+ hotels and is expanding rapidly toward Dubai 2040 — creating thousands of new hospitality jobs every year.' },
      { heading: 'Salary & Benefits', body: 'Hospitality staff earn AED 1,800–5,000/month with free accommodation, meals, medical insurance, and annual flight tickets. No income tax in the UAE means more take-home pay.' },
      { heading: 'Growth Trajectory', body: 'Most F&B attendants become supervisors within 18–24 months. With certifications, managers earn AED 6,000–12,000/month. Career growth is fast and merit-based.' },
    ],
  },
  {
    icon: FileText,
    title: 'Visa & Documentation Guide',
    color: 'bg-emerald-500',
    content: [
      { heading: 'Required Documents', body: 'Valid passport (6+ months validity), educational certificates, police clearance certificate, medical fitness certificate from approved centre, passport-size photos on white background.' },
      { heading: 'Visa Process', body: 'Your employer initiates an Employment Visa via GDRFA Dubai. The process takes 4–6 weeks. Mauli\'s placement team coordinates directly with HR to ensure smooth approval.' },
      { heading: 'Medical Tests', body: 'You\'ll need a chest X-ray and blood test at a HAAD/DHA-approved centre in India. Results must be certified by the Indian Embassy or MEA. We guide you step-by-step.' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Skills That Get You Hired',
    color: 'bg-purple-500',
    content: [
      { heading: 'Communication', body: 'English proficiency is essential. Dubai recruiters test spoken English and service phrasing. Our programme includes 50+ hours of English communication training.' },
      { heading: 'Grooming Standards', body: '5-star hotels have strict grooming codes — hair, nails, uniform, posture. We train you to meet and exceed these standards before you face any recruiter.' },
      { heading: 'Service Excellence', body: 'Technical skills (F&B, housekeeping, front office) combined with emotional intelligence and guest-centric attitude are what separate average candidates from the best.' },
    ],
  },
  {
    icon: Compass,
    title: 'Life in Dubai — What to Expect',
    color: 'bg-amber-500',
    content: [
      { heading: 'Accommodation', body: 'Most hotel employers provide shared staff accommodation in purpose-built residences near the hotel. Rooms are typically shared by 2–4 people with all utilities included.' },
      { heading: 'Culture & Religion', body: 'UAE is a Muslim-majority country with strict laws. Respect for local customs, modest dress in public, no public display of affection, and zero tolerance for alcohol outside designated areas.' },
      { heading: 'Work Culture', body: 'Dubai hotels are international workplaces with colleagues from 30+ nationalities. Punctuality, teamwork, and a positive attitude are paramount to career success.' },
    ],
  },
];

const timeline = [
  { step: 'Month 1–3/6', title: 'Course Training', desc: 'Complete your Mauli programme — theory, practical, grooming' },
  { step: 'Month 3/6', title: 'Campus Interviews', desc: 'Meet Dubai recruiters at our placement drive on campus' },
  { step: '+2 Weeks', title: 'Offer Letter', desc: 'Receive and review your employment offer from the hotel' },
  { step: '+4 Weeks', title: 'Documentation', desc: 'Complete medical, police clearance, visa formalities' },
  { step: '+6 Weeks', title: 'Fly Out', desc: 'Board your flight and report for hotel induction in Dubai' },
];

const skills = [
  { skill: 'F&B Service', level: 95 },
  { skill: 'Communication', level: 88 },
  { skill: 'Grooming', level: 92 },
  { skill: 'Housekeeping', level: 85 },
  { skill: 'Front Office', level: 80 },
  { skill: 'Bar Operations', level: 78 },
];

export default function CareerGuide() {
  const [openSection, setOpenSection] = useState(0);
  const [openItem, setOpenItem] = useState(null);

  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="relative container-pad text-center">
          <Reveal>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">Career Guide</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white mb-4">Your Complete <span className="text-gradient-red">Dubai Career Roadmap</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to know about Dubai hospitality careers — from skills to salary, visa to life abroad.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guide Sections */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Sidebar nav */}
            <Reveal dir="left">
              <div className="lg:sticky lg:top-28 space-y-2">
                {sections.map((sec, i) => {
                  const Icon = sec.icon;
                  return (
                    <button key={i} onClick={() => setOpenSection(i)}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-200 ${openSection === i ? 'bg-primary text-white shadow-red/20 shadow-lg' : 'bg-white text-mid-gray hover:bg-cream hover:text-primary shadow-card'}`}
                    >
                      <Icon size={18} className={openSection === i ? 'text-white' : 'text-primary'} />
                      <span className="font-semibold text-sm">{sec.title}</span>
                    </button>
                  );
                })}
                <div className="pt-4">
                  <button onClick={openAdmissionForm}
                    className="w-full bg-gradient-red text-white font-bold py-4 rounded-2xl text-sm uppercase tracking-wider hover:shadow-red hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get Free Counselling
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <div className="lg:col-span-2">
              <Reveal dir="right">
                {(() => {
                  const sec = sections[openSection];
                  const Icon = sec.icon;
                  return (
                    <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                      <div className={`${sec.color} px-5 sm:px-8 py-5 sm:py-6 flex items-center gap-4`}>
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Icon size={22} className="text-white" />
                        </div>
                        <h2 className="text-white font-bold text-xl">{sec.title}</h2>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {sec.content.map((item, j) => (
                          <div key={j} className="px-4 sm:px-8">
                            <button onClick={() => setOpenItem(openItem === j ? null : j)}
                              className="w-full flex items-center justify-between py-5 text-left"
                            >
                              <span className="font-bold text-charcoal text-sm">{item.heading}</span>
                              {openItem === j ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-mid-gray" />}
                            </button>
                            {openItem === j && (
                              <p className="text-mid-gray text-sm leading-relaxed pb-5">{item.body}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Needed */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <h2 className="heading-lg text-charcoal">Skills We <span className="text-gradient-red">Build in You</span></h2>
          </Reveal>
          <div className="max-w-2xl mx-auto space-y-5">
            {skills.map(({ skill, level }, i) => (
              <Reveal key={skill} delay={i * 0.07}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-charcoal text-sm">{skill}</span>
                    <span className="text-xs font-bold text-primary">{level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-red rounded-full transition-all duration-1000" style={{ width: `${level}%` }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal className="text-center mb-14">
            <h2 className="heading-lg text-charcoal">Your <span className="text-gradient-red">Journey Timeline</span></h2>
          </Reveal>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />
            <StaggerReveal className="space-y-8">
              {timeline.map((item, i) => (
                <StaggerItem key={i} dir="left">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-red/30 shadow-lg">
                      <span className="text-white font-black text-xs text-center leading-tight">{i + 1}</span>
                    </div>
                    <div className="pt-3">
                      <span className="text-[0.62rem] font-bold uppercase tracking-wider text-primary">{item.step}</span>
                      <h3 className="font-bold text-charcoal mt-1 mb-1">{item.title}</h3>
                      <p className="text-mid-gray text-sm">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-red">
        <div className="container-pad text-center">
          <Reveal>
            <h2 className="heading-lg text-white mb-4">Start Your Journey Today</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Our counsellors are ready to map your personalised Dubai career plan — for free.</p>
            <button onClick={openAdmissionForm}
              className="bg-white text-primary font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-widest hover:bg-off-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Get Free Career Counselling
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

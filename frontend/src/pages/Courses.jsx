import { Link } from 'react-router-dom';
import { Clock, CheckCircle, ChevronRight, Globe, Award, Users, TrendingUp } from 'lucide-react';
import Reveal, { StaggerReveal, StaggerItem } from '../components/Reveal';
import { openAdmissionForm } from '../components/PopupForm';

const courses = [
  {
    id: '3-month',
    duration: '3 Months',
    title: 'Fast-Track Hotel Management Programme',
    subtitle: 'Food & Beverage Service',
    badge: 'Fast Track',
    description: 'Intensive training designed for quick entry into Dubai\'s luxury hotel industry. Master food & beverage service, guest relations, and hotel operations in 90 days.',
    fee: '₹45,000',
    placement: 'Dubai 5-Star Hotels',
    salary: 'AED 1,800–2,500/mo',
    highlights: ['F&B Service Excellence', 'Guest Relations Mastery', 'Bar & Beverage Knowledge', 'Dubai Culture & Etiquette', 'Grooming & Presentation', 'Interview Preparation'],
    enrolled: '120+', placed: '95%', rating: '4.8★',
    path: '/courses/3-month',
    dark: true,
  },
  {
    id: '6-month',
    duration: '6 Months',
    title: 'Advanced Hotel Management',
    subtitle: 'Comprehensive Hotel Management Training',
    badge: 'Most Popular',
    description: 'Comprehensive programme covering all facets of hotel management — from housekeeping and front office to F&B and leadership. Preferred by top Dubai recruiters.',
    fee: '₹75,000',
    placement: 'Dubai & Cruise Ships',
    salary: 'AED 2,200–3,500/mo',
    highlights: ['Front Office Operations', 'Housekeeping Management', 'F&B Service & Production', 'Cruise Ship Protocols', 'Leadership & Supervision', 'International Certifications'],
    enrolled: '200+', placed: '98%', rating: '4.9★',
    path: '/courses/6-month',
    dark: false,
  },
];

const whyUs = [
  { icon: Globe, label: 'International Placements', desc: 'Guaranteed Dubai & cruise ship job offers' },
  { icon: Award, label: 'Certified Training', desc: 'Industry-recognised certifications' },
  { icon: Users, label: 'Expert Faculty', desc: '15+ years average industry experience' },
  { icon: TrendingUp, label: 'Career Growth', desc: 'Fast-track promotions in luxury hotels' },
];

export default function Courses() {
  return (
    <main className="pt-20 bg-off-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="relative container-pad text-center">
          <Reveal>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              Our Programmes
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white mb-4">
              Choose Your Path to <span className="text-gradient-red">Dubai Success</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Two world-class hotel management programmes designed for the Indian student — built for international careers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <Reveal key={course.id} dir={i === 0 ? 'left' : 'right'} delay={i * 0.12}>
                <div className={`rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ${course.dark ? 'bg-charcoal text-white' : 'bg-white'}`}>
                  {/* Header */}
                  <div className={`px-5 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 border-b ${course.dark ? 'border-white/10' : 'border-gray-100'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-primary text-white px-3 py-1 rounded-full">
                        <Clock size={11} /> {course.duration}
                      </div>
                      <span className={`text-[0.62rem] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${course.dark ? 'bg-white/10 text-white/70' : 'bg-cream text-primary'}`}>
                        {course.badge}
                      </span>
                    </div>
                    <h2 className={`text-2xl font-black mb-1 ${course.dark ? 'text-white' : 'text-charcoal'}`}>{course.title}</h2>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{course.subtitle}</p>
                    <p className={`text-sm leading-relaxed ${course.dark ? 'text-white/55' : 'text-mid-gray'}`}>{course.description}</p>
                  </div>

                  {/* Stats */}
                  <div className={`grid grid-cols-3 gap-2 px-5 sm:px-8 py-4 sm:py-5 border-b ${course.dark ? 'border-white/10' : 'border-gray-100'}`}>
                    {[['Students', course.enrolled], ['Placed', course.placed], ['Rating', course.rating]].map(([label, val]) => (
                      <div key={label} className="text-center">
                        <div className={`text-xl font-black ${course.dark ? 'text-white' : 'text-charcoal'}`}>{val}</div>
                        <div className={`text-[0.65rem] uppercase tracking-wider font-semibold ${course.dark ? 'text-white/40' : 'text-mid-gray'}`}>{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Body */}
                  <div className="px-5 sm:px-8 py-5 sm:py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {course.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2">
                          <CheckCircle size={13} className="text-primary flex-shrink-0" />
                          <span className={`text-xs ${course.dark ? 'text-white/65' : 'text-mid-gray'}`}>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`rounded-2xl p-4 mb-6 ${course.dark ? 'bg-white/6' : 'bg-cream'}`}>
                      <div className="grid grid-cols-3 gap-1 text-center">
                        {[['Course Fee', course.fee], ['Placement', course.placement], ['Salary Range', course.salary]].map(([label, val]) => (
                          <div key={label}>
                            <div className="text-[0.58rem] uppercase tracking-wider font-bold text-primary mb-0.5">{label}</div>
                            <div className={`text-xs font-bold ${course.dark ? 'text-white' : 'text-charcoal'}`}>{val}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link to={course.path}
                        className="flex-1 text-center bg-gradient-red text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider hover:shadow-red hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        View Details <ChevronRight size={14} />
                      </Link>
                      <button onClick={openAdmissionForm}
                        className={`flex-1 font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 border ${course.dark ? 'border-white/20 text-white hover:bg-white/10' : 'border-primary/30 text-primary hover:bg-cream'}`}
                      >
                        Apply Free
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mauli */}
      <section className="section-pad bg-charcoal">
        <div className="container-pad">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              Why Mauli
            </span>
            <h2 className="heading-lg text-white">The <span className="text-gradient-red">Mauli Difference</span></h2>
          </Reveal>
          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, label, desc }) => (
              <StaggerItem key={label}>
                <div className="glass-dark rounded-2xl p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{label}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative container-pad text-center">
          <Reveal>
            <h2 className="heading-lg text-white mb-4">Ready to Begin?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Fill out our free enquiry form and our counsellors will guide you to the right programme.
            </p>
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

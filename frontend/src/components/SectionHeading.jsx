import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <AnimatedSection variant="fadeUp" className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full ${light ? 'text-white/70 bg-white/10' : 'text-primary bg-off-white'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-dark-gray'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-mid-gray'}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}

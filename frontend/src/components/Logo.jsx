export default function Logo({ white = false }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`flex flex-col items-center leading-none ${white ? 'text-white' : ''}`}>
        <span
          className="font-bold text-2xl"
          style={{
            fontFamily: 'Mukta, sans-serif',
            color: white ? '#fff' : '#C0000C',
            letterSpacing: '0.02em',
          }}
        >
          मौली
        </span>
        <div className={`text-[9px] font-semibold tracking-widest uppercase ${white ? 'text-white/80' : 'text-dark-gray'}`}>
          College of Hotel Management
        </div>
        <div className={`text-[8px] font-medium tracking-widest uppercase ${white ? 'text-white/60' : 'text-mid-gray'}`}>
          • Chandgad •
        </div>
      </div>
    </div>
  );
}

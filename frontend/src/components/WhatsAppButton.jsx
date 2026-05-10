import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const msg = encodeURIComponent("Hello! I'm interested in Mauli College's hospitality courses and Dubai placements. Please share more details.");

  return (
    <motion.a
      href={`https://wa.me/919876543210?text=${msg}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 180, damping: 14 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl wa-pulse relative"
      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white relative z-10">
        <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.127.558 4.122 1.533 5.856L4 29l8.345-1.519A11.94 11.94 0 0016.003 28C22.63 28 28 22.628 28 15.997 28 9.371 22.631 3 16.003 3zm6.63 16.663c-.277.776-1.611 1.482-2.21 1.545-.557.06-1.074.28-3.617-.753-3.04-1.24-4.996-4.353-5.147-4.556-.15-.2-1.233-1.639-1.233-3.127 0-1.489.782-2.22 1.059-2.523.278-.302.605-.378.806-.378.202 0 .403.002.579.01.186.01.434-.07.68.52.253.605.86 2.094.935 2.245.076.15.126.327.026.528-.1.2-.15.327-.302.503-.15.176-.317.394-.452.528-.15.151-.307.315-.132.617.176.302.782 1.289 1.679 2.088 1.154 1.03 2.127 1.348 2.43 1.499.302.15.479.126.655-.075.176-.201.756-.882 1.007-1.184.251-.302.503-.25.855-.1.351.15 2.234 1.054 2.612 1.245.378.19.629.285.72.443.09.159.09.921-.187 1.7z" />
      </svg>
    </motion.a>
  );
}

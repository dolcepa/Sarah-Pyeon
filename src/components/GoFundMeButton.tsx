import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function GoFundMeButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after scrolling past hero section
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gofundmeUrl = 'https://www.gofundme.com'; // TODO: Add actual GoFundMe URL

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {isExpanded ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-korean-gold to-korean-crimson rounded-2xl p-6 shadow-2xl max-w-sm text-white"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="pr-8">
              <Heart className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-2">
                Support Parkinson's Research
              </h3>
              <p className="text-white/90 mb-4 text-sm">
                Help bring music therapy for Parkinson's patients to Carnegie
                Hall. We've raised $24,000 so far!
              </p>
              <motion.a
                href={gofundmeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-korean-crimson px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                Donate Now
              </motion.a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-br from-korean-gold to-korean-crimson text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow"
            aria-label="Support Parkinson's Research"
          >
            <Heart className="w-7 h-7" />
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Calendar, Heart, DollarSign } from 'lucide-react';

export default function Art() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const exhibition = {
    name: 'Manifest Exhibition',
    period: 'May - July 2023',
    location: 'Temiorae Gallery, Daejeon',
    theme: 'Dandelion',
    description:
      'A collaborative art exhibition featuring the theme of dandelions, symbolizing hope, resilience, and the spreading of positive change. Proceeds from the exhibition were donated to support Parkinson\'s art therapy supplies.',
    roles: [
      'Paid Art Exhibitor',
      'Designer',
      'Organizer',
    ],
    impact: 'Proceeds donated for Parkinson\'s art therapy supplies',
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Art & Creative Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of art, design, and social impact through
            visual expression.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Palette className="w-10 h-10 text-purple-600" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                {exhibition.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <Calendar className="w-4 h-4" />
                <span>{exhibition.period}</span>
                <span className="mx-2">•</span>
                <span>{exhibition.location}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Theme: {exhibition.theme}</h4>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {exhibition.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">My Roles</h4>
              <ul className="space-y-2">
                {exhibition.roles.map((role, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Contributions</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  Designed exhibition pamphlets
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  Created promotional videos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  Designed themed merchandise
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 bg-white rounded-xl p-6 border-2 border-purple-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-6 h-6 text-pink-500" />
              <h4 className="text-lg font-bold text-gray-900">Social Impact</h4>
            </div>
            <p className="text-gray-700 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              {exhibition.impact}
            </p>
          </motion.div>
        </motion.div>

        {/* Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-100 rounded-2xl p-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            {/* TODO: Add gallery of artwork and exhibition materials when available */}
            Gallery of artwork and exhibition materials coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}


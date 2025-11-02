import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, Award, Calendar, MapPin, User } from 'lucide-react';
import { useState } from 'react';

export default function Research() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const featuredPublication = {
    title:
      'A Convergent Music Therapy Platform for Parkinson\'s Disease: Integrating Medicine, Arts, Technology, and Genomic Precision',
    conference: '8th International Conference on Culture Technology (ICCT 2025)',
    location: 'Da Nang, Vietnam',
    award: 'Excellent Paper Award',
    role: 'Corresponding Author & Presenter',
    // TODO: Add actual PDF URL when available
    pdfUrl: '#',
  };

  const internships = [
    {
      title: 'Daejeon University',
      period: 'Summer 2025',
      department: 'Department of Cardiology & Neurology of Korean Medicine',
      focus: 'Integrative approaches to Parkinson\'s disease',
      outcome: 'Published research paper',
      location: 'Daejeon, South Korea',
    },
    {
      title: 'Predictiv Care, Inc.',
      period: 'Summer 2024',
      department: 'Scientific Research Division',
      focus: 'Genetic testing and precision healthcare',
      outcome: 'Developed pitch presentations',
      location: 'Mountain View, CA',
    },
    {
      title: 'Lulumedic, Inc.',
      period: 'Summer 2025',
      department: 'Medical Interpreting Services',
      focus: 'Real-time emergency English-Korean interpretation & Premium travel insurance services',
      outcome: 'Supported emergency medical services',
      location: 'Seoul, South Korea',
    },
  ];

  return (
    <section id="research" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Research & Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advancing Parkinson's disease treatment through innovative music
            therapy and integrative medicine research.
          </p>
        </motion.div>

        {/* Featured Publication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-korean-blue to-korean-midnight rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-korean-gold" />
                  <span className="text-korean-gold font-semibold">
                    Featured Publication
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {featuredPublication.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <FileText className="w-5 h-5 mr-3 mt-1 text-korean-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Conference</p>
                  <p className="font-medium">{featuredPublication.conference}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-korean-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Location</p>
                  <p className="font-medium">{featuredPublication.location}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-5 h-5 mr-3 mt-1 text-korean-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Award</p>
                  <p className="font-medium">{featuredPublication.award}</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="w-5 h-5 mr-3 mt-1 text-korean-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Role</p>
                  <p className="font-medium">{featuredPublication.role}</p>
                </div>
              </div>
            </div>

            <motion.a
              href={featuredPublication.pdfUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-korean-crimson hover:bg-korean-red text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.a>
          </div>
        </motion.div>

        {/* Research Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Research Experience
          </h3>
          <div className="space-y-4">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-korean-crimson rounded-xl"
                  aria-expanded={expandedCard === index}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-gray-900">
                          {internship.title}
                        </h4>
                        <span className="px-3 py-1 bg-korean-blue/10 text-korean-blue text-sm font-medium rounded-full">
                          {internship.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{internship.department}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {internship.location}
                      </div>
                    </div>
                  </div>
                </button>

                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Focus:
                        </p>
                        <p className="text-gray-600">{internship.focus}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Outcome:
                        </p>
                        <p className="text-gray-600">{internship.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


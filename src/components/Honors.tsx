import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, GraduationCap } from 'lucide-react';

export default function Honors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const awards = [
    {
      title: 'Excellent Paper Award',
      organization: 'ICCT 2025',
      location: 'Da Nang, Vietnam',
      date: '2025',
      icon: Trophy,
      color: 'from-korean-gold to-yellow-500',
      description: 'Awarded for research paper on music therapy for Parkinson\'s disease',
    },
    {
      title: 'Congressional Recognition Award',
      organization: 'U.S. Congresswoman Young Kim',
      location: 'United States',
      date: 'February 2025',
      icon: Award,
      color: 'from-blue-600 to-blue-800',
      description: 'Recognition for contributions to cultural exchange and community service',
    },
    {
      title: 'California State Senate Recognition Award',
      organization: 'Senator Steven Choi',
      location: 'California',
      date: 'January 2025',
      icon: Star,
      color: 'from-korean-crimson to-red-700',
      description: 'Honored for excellence in leadership and cultural ambassadorship',
    },
    {
      title: 'AP Scholar with Distinction',
      organization: 'College Board',
      location: 'United States',
      date: '2025',
      icon: GraduationCap,
      color: 'from-purple-600 to-purple-800',
      description: 'Recognition for outstanding academic achievement in Advanced Placement courses',
    },
    {
      title: 'Student of Distinction Award',
      organization: 'TCIS',
      location: 'Daejeon, South Korea',
      date: 'January 2023',
      icon: Star,
      color: 'from-green-600 to-green-800',
      description: 'Recognized for excellence in academics, leadership, and character',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Honors & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for excellence in research, leadership, academics, and
            cultural ambassadorship.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-korean-crimson via-korean-gold to-korean-crimson hidden md:block" />

          <div className="space-y-12">
            {awards.map((award, index) => {
              const Icon = award.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-korean-crimson rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left ml-16 md:ml-0'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${award.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={isEven ? 'md:text-right' : ''}>
                          <h3 className="text-xl font-bold text-gray-900">
                            {award.title}
                          </h3>
                          <p className="text-sm text-gray-600">{award.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        {award.organization}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        <span className="inline-flex items-center gap-1">
                          📍 {award.location}
                        </span>
                      </p>
                      <p className="text-gray-600 text-sm">
                        {award.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-16 md:w-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


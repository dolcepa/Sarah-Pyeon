import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Trophy, Calendar } from 'lucide-react';

export default function Leadership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const leadershipRoles = [
    {
      title: 'UN PEACEKOR Ambassador',
      period: 'May 2025 - Present',
      organization: 'K-Culture Ambassadors Initiative',
      location: 'San Francisco Branch',
      description:
        'Founder and organizer of K-Culture Ambassadors initiative, promoting Korean culture through performances and events. Organized student recruitment and cultural events featuring fan dance and K-pop dance performances.',
      icon: Globe,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Miss Teen Chunhyang - Cultural Ambassador',
      period: 'February 2025 - Present',
      organization: 'Miss Teen Chunhyang',
      location: 'Global',
      description:
        'Top 5 Titleholder serving a one-year term as cultural ambassador. Representing Korean traditional culture through performances, community volunteer activities, and international cultural exchange.',
      icon: Trophy,
      color: 'from-korean-gold to-korean-crimson',
    },
    {
      title: 'National Honor Society Member',
      period: 'Fall 2024 - Present',
      organization: 'Evergreen Valley High School',
      location: 'San Jose, CA',
      description:
        'Selected as one of 35 students from a 2000+ student body. Active volunteer in tutoring, special education support, and community service initiatives.',
      icon: Award,
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Basketball Leadership',
      period: '2022 - Present',
      organization: 'Multiple Teams',
      location: 'Various',
      description:
        'Team Manager at Evergreen Valley High School (11th Grade), Varsity Player at YISS (10th Grade) & TCIS (9th Grade). Assistant Coach for YISS Middle School Team & Triple Threat Academy (Paid position).',
      icon: Trophy,
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="leadership" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Leadership & Cultural Ambassadorship
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities through cultural exchange, education, and
            leadership development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {role.title}
                  </h3>
                  {index === 1 && (
                    <span className="px-3 py-1 bg-korean-gold/20 text-korean-crimson text-sm font-bold rounded-full">
                      Top 5
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{role.period}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {role.description}
                </p>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{role.organization}</span>
                  <span className="mx-2">•</span>
                  <span>{role.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-korean-crimson mb-2">
              20+
            </div>
            <div className="text-gray-600">Students Mentored</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-korean-crimson mb-2">
              4+
            </div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-korean-crimson mb-2">
              1000+
            </div>
            <div className="text-gray-600">People Reached</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-korean-crimson mb-2">
              1 Year
            </div>
            <div className="text-gray-600">Ambassadorship Term</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


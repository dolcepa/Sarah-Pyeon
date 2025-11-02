import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Languages, Code } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      school: 'Evergreen Valley High School',
      grade: '11th Grade',
      gpa: '3.83/4.0',
      year: '2024-2025',
      location: 'San Jose, CA',
    },
    {
      school: 'Yongsan International School of Seoul',
      grade: '10th Grade',
      gpa: 'WGPA: 4.00',
      year: '2023-2024',
      location: 'Seoul, South Korea',
    },
    {
      school: 'Taejon Christian International School',
      grade: '9th Grade',
      gpa: '4.28/4.5',
      year: '2022-2023',
      location: 'Daejeon, South Korea',
    },
  ];

  const languages = [
    { name: 'Korean', level: 100, proficiency: 'Native (TOPIK Level 6)' },
    { name: 'English', level: 95, proficiency: 'Fluent' },
    { name: 'Spanish', level: 30, proficiency: 'Beginner' },
    { name: 'Chinese', level: 25, proficiency: 'Beginner' },
    { name: 'Japanese', level: 25, proficiency: 'Beginner' },
  ];

  const technicalSkills = ['Scratch', 'HTML', 'CSS'];

  const countries = [
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Vietnam', flag: '🇻🇳' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A high school senior from San Jose, California, dedicated to
            bridging traditional Korean culture with modern scientific research,
            community leadership, and artistic expression.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-korean-crimson" />
            Educational Journey
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-korean-crimson shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.school}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {edu.grade} • {edu.year}
                    </p>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-2xl font-bold text-korean-crimson">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Languages className="w-6 h-6 mr-2 text-korean-crimson" />
            Languages
          </h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-900">{lang.name}</span>
                  <span className="text-sm text-gray-600">{lang.proficiency}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-korean-crimson to-korean-gold rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="w-6 h-6 mr-2 text-korean-crimson" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="px-6 py-3 bg-korean-blue text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* International Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            International Experience
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-2">{country.flag}</div>
                <p className="text-gray-700 font-medium">{country.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


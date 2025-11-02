import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Gamepad2, Users, ExternalLink, Calendar } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const project = {
    title: 'Animal Learning Aid',
    type: 'Scratch Game',
    period: 'August 2023 - May 2024',
    class: 'YISS AP CS Class Project',
    description:
      'An educational game designed specifically for K-2 students with learning challenges. The game provides an interactive and engaging way to learn about animals while addressing different learning needs and abilities.',
    features: [
      'Interactive learning environment',
      'Age-appropriate content for K-2 students',
      'Designed for students with learning challenges',
      'Educational game mechanics',
    ],
    technologies: ['Scratch'],
    // TODO: Add actual GitHub link when available
    githubUrl: '#',
    demoUrl: '#',
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
            Project Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating technology solutions with a focus on education and
            accessibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.period}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-2 font-medium">
              {project.class}
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 bg-white/60 rounded-lg p-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Code className="w-5 h-5" />
                View on GitHub
              </motion.a>
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Try Demo
              </motion.a>
            </div>

            {/* Demo Preview Placeholder */}
            <div className="mt-8 bg-gray-900 rounded-xl p-12 text-center text-gray-400">
              {/* TODO: Add interactive demo preview or video when available */}
              <Gamepad2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Interactive demo preview coming soon...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


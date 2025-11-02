import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Clock, Users as UsersIcon, DollarSign, TrendingUp } from 'lucide-react';

export default function Volunteer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Clock, value: '100+', label: 'Hours of Community Service', color: 'from-blue-500 to-blue-700' },
    { icon: UsersIcon, value: '1000+', label: 'People Reached Through Performances', color: 'from-purple-500 to-purple-700' },
    { icon: DollarSign, value: '$24,000', label: 'Raised for Parkinson\'s Research', color: 'from-green-500 to-green-700' },
  ];

  const activities = [
    {
      title: 'K-Culture & Tech Festival Performer',
      description: 'Performed traditional Korean music at technology and culture festivals',
      icon: '🎵',
    },
    {
      title: 'SF Peninsula Korean American Chamber of Commerce',
      description: 'Participated in cultural events and community gatherings',
      icon: '🤝',
    },
    {
      title: 'YISS International Bazaar',
      description: 'Volunteered at school fundraising and cultural events',
      icon: '🌍',
    },
    {
      title: 'YISS School Fundraising Event',
      description: 'Contributed to school fundraising initiatives and activities',
      icon: '💝',
    },
    {
      title: 'Tutoring & Special Education Support',
      description: 'Provided academic support to peers and students with special needs',
      icon: '📚',
    },
    {
      title: 'Parkinson\'s Research & Awareness',
      description: 'Organized and participated in events to raise awareness and funds',
      icon: '🧬',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Volunteer Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a positive impact in communities through service, performance,
            and advocacy.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Volunteer Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Volunteer Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {activity.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-korean-crimson/10 to-korean-gold/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <Heart className="w-12 h-12 text-korean-crimson mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Commitment to Service
          </h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Through music, research, and community engagement, I strive to make
            a meaningful difference in the lives of others. Every performance,
            every volunteer hour, and every research project is an opportunity
            to create positive change and inspire others to do the same.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


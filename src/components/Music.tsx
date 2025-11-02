import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music2, Users, ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';
import YouTube from 'react-youtube';

export default function Music() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // TODO: Replace with actual YouTube video IDs when available
  const performances = [
    {
      title: 'Bay Area Chuseok Festival Performance',
      description: 'Performed traditional Haegeum for 1000+ attendees',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      audience: '1000+ attendees',
      category: 'Festival',
    },
    {
      title: 'Carnegie Hall Fundraising Campaign',
      description: 'GoFundMe campaign supporting Parcanto Ensemble\'s Parkinson\'s musical',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      audience: '$24,000 raised',
      category: 'Fundraising',
      gofundme: true,
    },
    {
      title: '1st K-Culture & Tech Festival, Los Angeles',
      description: 'Plug and Play event with 100+ attendees',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      audience: '100+ attendees',
      category: 'Festival',
    },
    {
      title: 'TCIS Orchestra Solo Performance',
      description: 'Featured solo performance with school orchestra',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      audience: 'School Community',
      category: 'Orchestra',
    },
    {
      title: 'Annual Traditional Korean Music Concert',
      description: 'Daejeon, South Korea - November 2022',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      audience: 'Local Community',
      category: 'Concert',
    },
    {
      title: 'California State Treasurer Special Lecture',
      description: 'SF Peninsula Korean American Chamber of Commerce',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      audience: 'Chamber Members',
      category: 'Lecture',
    },
  ];

  const youtubeOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  const gofundmeUrl = 'https://www.gofundme.com'; // TODO: Add actual GoFundMe URL

  return (
    <section id="music" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            Music & Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing the beauty of traditional Korean Haegeum music with audiences
            worldwide while raising awareness for Parkinson's disease research.
          </p>
        </motion.div>

        {/* Haegeum Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-korean-crimson/10 to-korean-gold/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <Music2 className="w-8 h-8 text-korean-crimson" />
              <h3 className="text-2xl font-bold text-gray-900">The Haegeum</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              The Haegeum is a traditional Korean string instrument with a rich
              history dating back over a thousand years. Known for its unique
              sound that bridges Eastern and Western musical traditions, I've
              dedicated myself to preserving and sharing this beautiful art form
              while exploring its therapeutic potential for Parkinson's disease.
            </p>
          </div>
        </motion.div>

        {/* GoFundMe Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-korean-gold to-korean-crimson rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-10 h-10" />
                <h3 className="text-3xl font-bold">Support Parkinson's Research</h3>
              </div>
              <p className="text-xl mb-4">
                Help us bring music therapy for Parkinson's patients to Carnegie
                Hall
              </p>
              <p className="text-lg mb-8 text-white/90">
                Through the Parcanto Ensemble fundraising campaign, we've raised{' '}
                <span className="font-bold text-2xl">$24,000</span> to support
                Parkinson's patients through musical therapy. Your contribution
                helps bring hope and healing to those affected by this disease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={gofundmeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-korean-crimson px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ExternalLink className="w-5 h-5" />
                  Support on GoFundMe
                </motion.a>
                <motion.button
                  onClick={() => {
                    const carnegiePerformance = performances.find(
                      (p) => p.title.includes('Carnegie Hall')
                    );
                    if (carnegiePerformance) {
                      setSelectedVideo(carnegiePerformance.videoId);
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-korean-blue hover:bg-korean-midnight px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Campaign Video
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Performances */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Performances
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performances.map((performance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden">
                  {selectedVideo === performance.videoId ? (
                    <div className="absolute inset-0 p-2">
                      <YouTube
                        videoId={performance.videoId}
                        opts={youtubeOpts}
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${performance.videoId}/maxresdefault.jpg`}
                        alt={performance.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/640x360?text=Video+Coming+Soon';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <motion.button
                          onClick={() => setSelectedVideo(performance.videoId)}
                          className="bg-white/90 hover:bg-white rounded-full p-4"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Play ${performance.title}`}
                        >
                          <Play className="w-8 h-8 text-korean-crimson fill-korean-crimson" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-korean-blue/10 text-korean-blue text-xs font-medium rounded">
                      {performance.category}
                    </span>
                    {performance.gofundme && (
                      <span className="px-2 py-1 bg-korean-gold/20 text-korean-crimson text-xs font-medium rounded">
                        Fundraising
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {performance.title}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {performance.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {performance.audience}
                  </div>
                  {performance.gofundme && (
                    <motion.a
                      href={gofundmeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 inline-flex items-center gap-2 text-korean-crimson font-medium hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Support This Cause
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Busking Tour */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-korean-blue/10 to-korean-crimson/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Haegeum Busking - 4 Countries Tour
            </h3>
            <p className="text-gray-700 mb-6">
              As Miss Teen Chunhyang Global Ambassador, I performed Haegeum
              busking in 4 countries, sharing Korean traditional music with
              international audiences and raising cultural awareness.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">
                🇰🇷 South Korea
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">
                🇺🇸 United States
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">
                🇻🇳 Vietnam
              </span>
              <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">
                🌏 + More
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


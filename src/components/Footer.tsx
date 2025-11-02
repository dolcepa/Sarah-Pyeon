import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-korean-midnight text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Sarah Pyeon</h3>
            <p className="text-gray-400">
              Haegeum Musician | Parkinson's Disease Researcher | Cultural
              Ambassador | Student Leader
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-korean-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-korean-gold transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-korean-gold transition-colors">
                  Music & Performance
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-korean-gold transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-korean-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:spyeon0529@gmail.com"
                  className="hover:text-korean-gold transition-colors"
                >
                  spyeon0529@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Jose, California</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Sarah Pyeon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


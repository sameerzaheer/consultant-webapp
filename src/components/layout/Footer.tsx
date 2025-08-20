import Link from 'next/link';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Strategy Consulting', href: '/services#strategy' },
    { name: 'Operations Management', href: '/services#operations' },
    { name: 'Digital Transformation', href: '/services#digital' },
    { name: 'Project Management', href: '/services#project' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">
              <span className="text-blue-400">AutomateThis.ca</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Strategic consultant with 15+ years of experience helping organizations 
              optimize operations, drive digital transformation, and achieve sustainable growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FiMail className="h-4 w-4 text-blue-400" />
                </div>
                <a href="mailto:sameer@automatethis.ca" className="text-gray-300 hover:text-blue-400 transition-colors">
                  sameer@automatethis.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FiPhone className="h-4 w-4 text-blue-400" />
                </div>
                <a href="tel:+19057829601" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +1-905-7829601
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FiMapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-gray-300">Toronto, Canada</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-blue-400">AutomateThis.ca</span>. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/sameerzaheer/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sameer@automatethis.ca"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

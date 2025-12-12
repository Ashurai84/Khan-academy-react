import { BookOpen, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-teal-500" />
              <span className="text-xl font-bold text-white">Khan Academy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A nonprofit providing free, world-class education for anyone, anywhere.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Learn</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Math
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Computing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Arts & Humanities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Our mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Our team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Our supporters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Khan Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

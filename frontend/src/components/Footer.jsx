import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-gray-600 text-sm">
          © 2025 100Days. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-gray-600 hover:text-blue-500 transition-colors duration-200" size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-gray-600 hover:text-pink-500 transition-colors duration-200" size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-600 hover:text-blue-700 transition-colors duration-200" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
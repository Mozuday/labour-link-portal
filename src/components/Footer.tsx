
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Footer = () => {
  const handleSupportLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Easy HR India</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Comprehensive portal for labour-related resources and job opportunities in India. 
              Bridging the gap between legal awareness and employment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/documents" className="hover:text-white transition-colors">Labour Laws & Acts</Link></li>
              <li><Link to="/jobs" className="hover:text-white transition-colors">Job Opportunities</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-white transition-colors"
                  onClick={handleSupportLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="hover:text-white transition-colors"
                  onClick={handleSupportLinkClick}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-white transition-colors"
                  onClick={handleSupportLinkClick}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 Easy HR India Portal. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for labour awareness and employment opportunities in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

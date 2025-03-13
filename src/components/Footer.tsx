import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-200 text-green-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">La Biche de Saint Gilles</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <p>Sint-Gilliskerkstraat 67, 1060 Sint-Gillis</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:bichesg@gmail.com" className="hover:text-green-700">bichesg@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <p>0479/96.84.24</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <p>VAT: BE 0757.745.489</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us on Instagram</h3>
            <a 
              href="https://www.instagram.com/labichesg/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-green-700"
            >
              <Instagram className="h-5 w-5" />
              <span>@labichesg</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-300 text-center">
          <p>&copy; {new Date().getFullYear()} La Biche de Saint Gilles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
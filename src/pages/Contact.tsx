import React from 'react';
import { MapPin, Mail, Phone, Building, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-amber-700" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>Sint-Gilliskerkstraat 67</p>
                    <p>1060 Sint-Gillis</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-amber-700" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:bichesg@gmail.com" className="text-amber-700 hover:text-amber-800">
                      bichesg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-amber-700" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>0479/96.84.24</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-amber-700" />
                  <div>
                    <p className="font-medium">Company Details</p>
                    <p>VAT: BE 0757.745.489</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Instagram className="h-6 w-6 text-amber-700" />
                  <div>
                    <p className="font-medium">Social Media</p>
                    <a 
                      href="https://www.instagram.com/labichesg/?hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800"
                    >
                      @labichesg
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">Business Hours</h2>
              <p className="mb-4">
                For inquiries about orders, partnerships, or general information, 
                please email us and we'll get back to you as soon as possible.
              </p>
              <p>
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
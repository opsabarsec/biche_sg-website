import React from 'react';
import { Link } from 'react-router-dom';
import { Beer } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-green-100 text-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Beer className="h-8 w-8" />
            <span className="text-xl font-bold">La Biche de Saint Gilles</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <Link to="/about" className="hover:text-green-700">About Us</Link>
            <Link to="/contact" className="hover:text-green-700">Contact</Link>
            <Link to="/orders" className="hover:text-green-700">Orders</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-yellow-50">
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Brussels-_Saint-Gilles_-_52190608464.jpg"
          alt="La Biche de Saint Gilles"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">La Biche de Saint Gilles</h1>
            <p className="text-xl mb-8">The solidarity beer from the heart of Saint-Gilles</p>
            <Link
              to="/register"
              className="bg-green-200 text-green-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-300 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-900">Our Story</h2>
            <p className="text-lg mb-4 text-green-800">
              La Biche de Saint-Gilles is more than just a beer - it's a solidarity project that brings together local 
              producers and social initiatives. Our beer is brewed with care and commitment to support local community 
              projects.
            </p>
            <p className="text-lg mb-6 text-green-800">
              With every box of beer you purchase, you contribute to various social projects in Saint-Gilles, making 
              our community stronger and more connected.
            </p>
            <Link
              to="/about"
              className="text-green-700 font-semibold hover:text-green-900"
            >
              Learn more about our mission →
            </Link>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHe1KmjiUyBYI56WrvU2c-1HQXWhx_KnGpsbLz3etHBSq-DDIFm4s8SAPvc6hPYLT0xk&usqp=CAU"
              alt="La Biche de Saint Gilles Beer"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
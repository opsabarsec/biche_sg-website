import React from 'react';

const About = () => {
  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">About La Biche de Saint Gilles</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
            <p className="mb-4">
              La Biche de Saint-Gilles is a unique solidarity project that emerged from the heart of Saint-Gilles. 
              Our mission is to create a high-quality local beer while supporting social initiatives in our community.
            </p>
            <p>
              The project brings together local producers and social organizations, creating a network of solidarity 
              that benefits the entire Saint-Gilles community. Every bottle of our beer represents a commitment to 
              social change and community development.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Community Impact</h2>
            <p className="mb-4">
              Through our partnership with local organizations and producers, we ensure that our beer production 
              contributes directly to social projects in Saint-Gilles. This approach allows us to combine the 
              pleasure of craft beer with meaningful social impact.
            </p>
            <p>
              By choosing La Biche de Saint-Gilles, you're not just enjoying a quality beer – you're participating 
              in a movement that strengthens our local community and supports those who need it most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
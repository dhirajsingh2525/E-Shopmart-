import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">🛍️ E-Shopmart</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A modern E-commerce web app built with React, Redux Toolkit & JSON-Server. Fast, modular, and beautiful.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          { title: '🧾 Authentication', desc: 'Sign up, login, and logout with persistent session using localStorage.' },
          { title: '📦 Product Management', desc: 'Create, update, and delete products with admin access.' },
          { title: '🛒 Cart System', desc: 'Add/remove products to cart, update quantity in real time.' },
          { title: '🔄 Lazy Loading', desc: 'Infinite scroll product listing with smooth UX.' },
          { title: '👤 User Settings', desc: 'Update profile, delete account, and logout securely.' },
          { title: '🔥 Responsive UI', desc: 'Fully mobile-friendly design using Tailwind CSS.' },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg shadow-emerald-500">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h2>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Tech Stack</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          <strong>Frontend:</strong> React, Tailwind CSS, React Hook Form  
          <br />
          <strong>State:</strong> Redux Toolkit, Redux Thunk  
          <br />
          <strong>Backend:</strong> JSON Server  
          <br />
          <strong>Storage:</strong> localStorage
        </p>
      </div>

      {/* Developer Info */}
      <div className="text-center text-gray-600">
        Developed with ❤️ by <span className="font-semibold text-black">Dhiraj Kumar Singh</span>
        <br />
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          className="text-blue-600 underline hover:text-blue-800 mt-2 inline-block"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default About;

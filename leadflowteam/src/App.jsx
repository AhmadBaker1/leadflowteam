import React from 'react';
import './App.css';
import './index.css';

const teamMembers = [
  {
    name: "Ahmad Baker",
    linkedin: "https://linkedin.com/in/ahmad",
    image: "/ahmadresized.jpg",
  },
  {
    name: "Zaid Ahmad",
    linkedin: "https://linkedin.com/in/zaid",
    image: "/zaidsresized.jpg",
  },
  {
    name: "Rameez Ahmed",
    linkedin: "https://linkedin.com/in/rameez",
    image: "/rameezresized.jpg",
  },
  {
    name: "Samuel Anowai",
    linkedin: "https://linkedin.com/in/samuel",
    image: "/sammresized.jpg",
  },
  {
    name: "Aisha Naeem",
    linkedin: "https://linkedin.com/in/aisha",
    image: "/aisharesized.jpg",
  },
  {
    name: "Reanna Bari",
    linkedin: "https://linkedin.com/in/reanna",
    image: "/uknownresized.jpg",
  },
];

const TeamCard = ({ name, linkedin, image }) => (
  <div className="bg-white text-green-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-full max-w-xs text-center animate-fade-in">
    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-700 mx-auto mb-4 shadow-inner">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:brightness-110 transition duration-300"
      />
    </div>
    <h2 className="text-xl font-semibold mb-1">{name}</h2>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 bg-green-700 text-white px-5 py-2 rounded-full text-sm hover:bg-green-800 transition"
    >
      Connect on LinkedIn
    </a>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-green-900 text-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-green-100">
            Meet the passionate team behind <span className="font-semibold">LeadFlow Manager</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

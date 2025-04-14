import React from 'react';
import './App.css';

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
  <div className="bg-white text-green-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 w-64">
    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-700 shadow-inner mx-auto mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition duration-300"
      />
    </div>
    <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
    <div className="text-center">
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition"
      >
        Connect on LinkedIn
      </a>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-green-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-green-100 text-lg">
            Meet the passionate team behind <span className="font-semibold">LeadFlow Manager</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

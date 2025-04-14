import React from 'react';
import './App.css';
import './index.css';

const teamMembers = [
  {
    name: "Ahmad Baker",
    linkedin: "https://www.linkedin.com/in/ahmadbaker/",
    image: "/ahmadresized4.png",
  },
  {
    name: "Zaid Ahmad",
    linkedin: "https://www.linkedin.com/in/zaidahmad25/",
    image: "/zaidsresized.jpg",
  },
  {
    name: "Rameez Ahmed",
    linkedin: "https://www.linkedin.com/in/rameez-ahmed-3a4462286/?originalSubdomain=ca",
    image: "/rameezresized.jpg",
  },
  {
    name: "Samuel Anowai",
    linkedin: "https://www.linkedin.com/in/s-anowai/",
    image: "/sammresized.jpg",
  },
  {
    name: "Aisha Naeem",
    linkedin: "https://ca.linkedin.com/in/aisha-naeem-67b2922a3",
    image: "/aisharesized.jpg",
  },
  {
    name: "Reanna Bari",
    linkedin: "https://ca.linkedin.com/in/reanna-bari-5a0344233",
    image: "/uknownresized.jpg",
  },
];

const TeamCard = ({ name, linkedin, image }) => (
  <div className="bg-gradient-to-br from-green-50 to-green-100 text-green-900 p-6 rounded-[60%_40%_60%_40%/50%_60%_40%_50%] shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs text-center transform hover:-translate-y-1 hover:rotate-1">
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-2 relative">
          <h1 className="text-5xl font-bold">Our Team</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 mb-12 text-center sm:text-left sm:relative">
          <p className="text-lg text-green-100 sm:text-center sm:mx-auto">
            Meet the passionate team behind <span className="font-semibold">LeadFlow Manager</span>.
          </p>
          <div className="sm:absolute sm:right-0 sm:top-0">
            <a
              href="https://www.leadflowmanager.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-900 font-semibold px-6 py-2 rounded-full shadow hover:shadow-lg hover:bg-green-100 transition text-sm"
            >
              Visit LeadFlowManager.com
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

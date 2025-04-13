import React  from 'react'
import './App.css'

const teamMembers = [
  {
    name: "Ahmad Baker",
    linkedin: "https://linkedin.com/in/ahmad",
    image: "/WhatsApp%20Image%202025-04-11%20at%2000.27.28_393fbb87.jpg",
  },
  {
    name: "Zaid Ahmad",
    linkedin: "https://linkedin.com/in/zaid",
    image: "/zaids.jpg",
  },
  {
    name: "Rameez Ahmed",
    linkedin: "https://linkedin.com/in/rameez",
    image: "/rameez.jpg",
  },
  {
    name: "Reanna Bari",
    linkedin: "https://linkedin.com/in/reanna",
    image: "/uknown.jpg",
  },
  {
    name: "Aisha Naeem",
    linkedin: "https://linkedin.com/in/aisha",
    image: "/aisha.jpg",
  },
  {
    name: "Samuel Anowai",
    linkedin: "https://linkedin.com/in/samuel",
    image: "/samm.jpg",
  },
];

const TeamCard = ({ name, title, linkedin, image }) => (
  <div className="bg-white text-green-900 p-6 rounded-2xl shadow-md flex flex-col items-center transition transform hover:scale-105">
    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-800 shadow-md mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-lg font-semibold mb-1 text-center">{name}</h2>
    <p className="text-sm text-green-700 mb-3 text-center">{title}</p>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
    >
      Connect on LinkedIn
    </a>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-green-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-2">Our Team</h1>
        <p className="text-center text-green-100 mb-10">
          Meet the passionate team behind LeadFlow Manager.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;



import React from "react";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    description: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "example@example.com",
    image: "/team/gautam.jpeg",
  },
  {
    name: "Mike Ross",
    role: "Art Director",
    description: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "example@example.com",
    image: "/w3images/team2.jpg",
  },
  {
    name: "John Doe",
    role: "Designer",
    description: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "example@example.com",
    image: "/w3images/team3.jpg",
  },
  // Add more team members here
];

const IndexPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Responsive "Meet The Team" Section</h2>
      <p>Resize the browser window to see the effect.</p>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={member.image} alt={member.name} className="w-full" />
            <div className="container">
              <h2 className="text-lg font-bold">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm">{member.description}</p>
              <p className="text-sm">{member.email}</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

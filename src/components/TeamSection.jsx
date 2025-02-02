import React from "react";
import "./TeamSection.css";
import Meredith from "../assets/images/Group 2368.png";
import Thomas from "../assets/images/Group 2369.png";
import Wade from "../assets/images/Group 2370.png";
import Yahir from "../assets/images/Group 2371.png";





const teamMembers = [
  { name: "Meredith Allen", role: "CEO", imgSrc: Meredith },
  { name: "Thomas Woodward", role: "COO", imgSrc: Thomas },
  { name: "Wade Barton", role: "Business Analyst", imgSrc: Wade },
  { name: "Yahir Marquez", role: "Marketing Executive", imgSrc: Yahir },
];




function TeamSection() {
  return (
 
    <section className="team-section">
      <h2>Our Team</h2>
      <p>
        We believe that great ideas come to life through collaboration and innovation.Our team is a diverse group of passionate professionals, each bringing unique skills and 
        experiences to the table. From creative designers and strategic thinkers to technical experts and problem-solvers, we are united by a shared vision of delivering excellence 
        in everything we do.
      </p>

      <p>
        Our mission is to empower businesses and individuals by creating innovative, sustainable, and user-friendly designs. With a culture that values integrity, growth, and teamwork, we 
        are committed to creating meaningful solutions that make a difference. Whether it's crafting cutting-edge designs, developing user-centered interfaces 
        or building sustainable solutions, our team thrives on turning challenfes into opportunities.
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imgSrc} alt={member.name} className="team-member-img" />
          </div>
        ))}
      </div>
    </section>
  
  );
}

export default TeamSection;

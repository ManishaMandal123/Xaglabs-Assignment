import React from "react";
import "./PersonalDetails.css"; 
import { FaUser, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function PersonalDetails () {
  return (

      <section className="personal-details">
        {/* <h2>Personal Details</h2>
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Mobile Number" />
        <input type="text" placeholder="Enter Your Address" /> */}



      

      <div className="form-container" id="personal-details">
        <h2>Personal Details</h2>
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="input-group">
          <FaPhone />
          <input type="text" placeholder="Enter Your Mobile Number" />
        </div>
        <div className="input-group">
          <FaMapMarkerAlt />
          <textarea placeholder="Enter Your Address"></textarea>
        </div>
        </div>
      </section>
   
  );
};

export default PersonalDetails;

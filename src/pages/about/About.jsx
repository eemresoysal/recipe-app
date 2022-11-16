import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./about.style.scss";
const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <center>
          <img
            className="aboutImg"
            src="https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Software-Developer-Flat-Icon-Graphics-13375448-1.jpg"
            alt=""
          />
          <h2>I'm Full Stack Developer</h2>
        </center>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./about.css";
import picture1 from "../../assets/Picture1.JPG";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={picture1} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I am a forestry engineer with experience in golf course management.
            Recently, I have been expanding my skill set by completing a
            frontend React course. I am excited to transition into a career in
            IT, utilizing my problem-solving skills and attention to detail to
            create innovative solutions. My unique background in both forestry
            and golf course management has given me a unique perspective, and I
            am eager to bring my diverse experience and to continue learning and
            growing in this field.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

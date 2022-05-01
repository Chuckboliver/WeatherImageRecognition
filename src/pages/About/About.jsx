import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main_contain">
      <div className="top_contain">
        <div className="info">
          <img src="/about_tum.jpg" alt="tum" className="display_image_info" />
          <p className="info_text">นายฉัตรดนัย สิงห์โต</p>
          <p className="info_text">รหัส 62010142</p>
        </div>
        <div className="info">
          <img src="/about_pat.jpg" alt="pat" className="display_image_info" />
          <p className="info_text">นายพัฒน์ภูมิ หาแก้ว</p>
          <p className="info_text">รหัส 62010615</p>
        </div>
      </div>
      <div className="bottom_contain">
        <img
          src="/github_logo"
          alt="logoGitHub"
          className="display_image_logo"
        />
        <br />
        <br />
        <a
          className="github-link"
          href="https://www.github.com/Chuckboliver/WeatherImageRecognition"
          target="_blank"
          rel="noreferrer"
        >
          Github Repository
        </a>
      </div>
    </div>
  );
};

export default About;

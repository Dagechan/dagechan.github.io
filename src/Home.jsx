import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaJava, FaPython, FaCuttlefish } from 'react-icons/fa';
// import { SiCplusplus } from 'react-icons/si';
import Icon from '../src/assets/images/snow-man.jpg';

function Home() {
  return (
    <div className="container animate">
      <div className="header-container text-center">
        <h4>Welcome to Dagechan's room!</h4>
        <div>
          <img src={Icon} alt="Round Icon" className="img-fluid rounded-circle mb-3" />
        </div>
      </div>
      <div className="about-me mt-4">
        <h5 className="self-intro">About Me</h5>
        <p>Hello! My name is Dagechan. I am passionate about learning and exploring new things. Here are a few things about me:</p>
        <ul className="list-unstyled">
          <li>
            <h5 className="pre-title">Background</h5>
            <p>I am a university student majoring in Information Science.</p>
          </li>
          <li>
            <h5 className="pre-title">Interests</h5>
            <p>Recently, I have been enjoying talking to foreigners to improve my English skills. I also like creating cool desktop environments on Unix-based operating systems.</p>
          </li>
          <li>
            {/* <h5 className="pre-title">Contact</h5>
            <p>You can reach me at takebose5 at gmail.com or connect with me on my social Media.</p> */}
            <br></br><br></br>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

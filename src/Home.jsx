import React from 'react';
import Image from 'react-bootstrap/Image';
import Icon from '../src/assets/images/snow-man.jpg';

function Home() {
  return (
    <div className="header-container">
      <h4 className='animate'>Welcome to Dagechan's room!</h4>
      <div>
        <img src={Icon} alt="Round Icon" className="round-image" />
      </div>
      <p>Dagechan</p>
    </div>
  );
}

export default Home;
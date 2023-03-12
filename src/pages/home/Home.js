import React from "react";
import Profile from './profile.png'
import './home.css'

function Home() {
  return (
    <div className="home-section">
      <div className="greeting-section">      
        <p>Hi There, I'm Jon Green, a Front-End Web Developer</p>
        <button>About me</button>
      </div>   
      <img src={Profile} style={{maxHeight: "300px"}} alt="profile" />
    </div>
      
     
  );
}

export default Home;
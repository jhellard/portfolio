import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace, faBars } from '@fortawesome/free-solid-svg-icons'
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <header>
        <FontAwesomeIcon className='hamburger' icon={faBars} />
      </header>
      <div className="landing">
        <span className="landing__text">
          <h1>Hello {<FontAwesomeIcon icon={faHandPeace} />}</h1>
          
          <h3>I'm Joshua Hellard // Full Stack Developer</h3>
        </span>
        <span className="landing__image">
          <img
            src="https://pbs.twimg.com/profile_images/1455256619768446977/BrJfRIoG_400x400.jpg"
            alt="Landing"
          />
        </span>
      </div>
      <footer className="footer">
        <p className="port-ver">portfolio v0.1.0 // Joshua Hellard</p>
      </footer>
    </div>
  );
};

export default App;

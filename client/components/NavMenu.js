import React from 'react';
import { connect } from 'react-redux';


const NavMenu = () => (
  <header>
    <nav>
      <div className="logo">
        <img alt="logo" src="icon.png" />
        <div id="nav-name">Patrick Gund </div>
      </div>
      <div className="nav-item">
        <a href="/home">Home</a>
      </div>
      <div className="nav-item">
        <a href="/about">About Me</a>
      </div>
      <div className="nav-item">
        <a href="/projects">My Projects</a>
      </div>
      <div className="nav-item">
        <a href="/resume">Resume</a>
      </div>
    </nav>
  </header>
);


const mapState = ({ navbar }) => ({ navbar });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(NavMenu);


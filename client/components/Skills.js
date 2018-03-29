import React from 'react';
import { connect } from 'react-redux';

const Skills = () => (
  <div id="skillsSection">
    <h1 id="skillsTitle"> My Skills</h1>
    <div id="skills">
      <div className="skillsFlex">
        <img className="skillsImg" src="007-java-script-hand-drawn-file.png" alt="JS" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
        </p>
      </div>
      <div className="skillsFlex">
        <img className="skillsImg" src="001-graphic-design.png" alt="FE" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
        </p>
      </div>
      <div className="skillsFlex">
        <img className="skillsImg" src="002-coding-1.png" alt="BE" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
        </p>
      </div>
      <div className="skillsFlex">
        <img className="skillsImg" src="006-technology.png" alt="DB" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
        </p>
      </div>
    </div>
  </div>
);
const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Skills);

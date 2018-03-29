import React from 'react';
import { connect } from 'react-redux';

const AboutMe = () => (
  <div id="amSection">
    <div id="amTandP">
      <h1 id="amTitle"> About Me </h1>
      <img src="patrick.png" id="amImg" alt="MyPicture" />
    </div>
    <div className="amFlex">
      <div id="amText">
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus sollicitudin sodales ornare. Nullam ac pulvinar erat,
       ut tincidunt eros. Phasellus ac ornare dui. Curabitur et.
        </p>
      </div>
    </div>
  </div>
);

const mapState = null;
const mapDispatch = null;
export default connect(mapState, mapDispatch)(AboutMe);


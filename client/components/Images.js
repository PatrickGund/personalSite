import React from 'react';
import { connect } from 'react-redux';


const Images = props => (
  <section id="carousel">
    <div id="carousel-text">
      <h1 id="imageTitle" >Patrick Gund</h1>
      <h2>Full-Stack Software Engineer</h2>
    </div>
    <img className="carousel-image" src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
  </section>
);


const mapState = ({ navbar }) => ({ navbar });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Images);


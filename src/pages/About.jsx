import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="about-section"></section>
      <main className="about-main">
        <section className="content-container">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </p>
        </section>
        <div className="post-container">
          <section className="about-container">
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <Link to="/vans">
              <div className="about-button-container">
                <button>Explore our vans</button>
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;

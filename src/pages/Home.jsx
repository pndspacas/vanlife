import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <main className="home-main">
        <section className="home-section">
          <h2>You got the travel plans, we got the travel vans.</h2>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="/vans">
            <div className="button-container">
              <button>Find your van</button>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;

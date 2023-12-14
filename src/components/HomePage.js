// src/components/HomePage.js

// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Food Waste Management System</h1>
      </header>
      <section>
        <p>
          Welcome to our Food Waste Management System. We aim to reduce food waste
          and promote sustainable practices.
        </p>
        <p>
          Learn how you can contribute and make a positive impact on the environment.
        </p>
      </section>
      <section>
        <h2>Key Features:</h2>
        <ul>
          <li>Track and reduce food waste</li>
          <li>Connect with local communities</li>
          <li>Discover sustainable recipes</li>
        </ul>
      </section>
      <section>
        <Link to="/about">Learn More</Link>
        <Link to="/contact">Contact Us</Link>
      </section>
      <footer>
        <p>&copy; 2023 Food Waste Management System</p>
      </footer>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <h2>Home</h2>
      <Link to="/registration">Register</Link>
    </div>
  );
};

export default Home;

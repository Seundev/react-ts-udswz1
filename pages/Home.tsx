import * as React from 'react';

import { Link } from 'react-router-dom';

import '../style.css';

function Home() {
  return (
    <div>
      <div className="home-page-container">
        <h1>A pagination page</h1>
        <br />
        <Link to="/users">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import * as React from 'react';

import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>This is Error page</h1>
    </div>
  );
};

export default ErrorPage;

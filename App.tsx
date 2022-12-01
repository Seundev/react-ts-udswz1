import * as React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/users/Users';
import Use from './pages/users/user';
import ErrorPage from './pages/error';
import './App.css';

const RandomAPI = 'https://randomuser.me/api/?results=50';

const App = () => {
  const [resultFromApi, setResultFromApi] = useState([]);

  const FetchAPIFromServer = async () => {
    const response = await fetch(RandomAPI);
    const result = await response.json();
    setResultFromApi(result.results);
  };

  useEffect(() => {
    FetchAPIFromServer();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={<Users resultFromApi={resultFromApi} />}
          />
          <Route path="/use/:id" element={<Use resultFromApi={resultFromApi} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

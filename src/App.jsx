import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //setData(houses); Static data
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/Houses`)
      .then((res) => {
        const sortedData = res.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setData(sortedData);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        setError(error);
      });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* WIP Data is not kept between the contact and home page, if the data is in a global state this will be fixed */}
          <Route path='/' element={<Home data={data} error={error} />} />
          <Route
            path='/contact'
            element={<Contact data={data} error={error} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

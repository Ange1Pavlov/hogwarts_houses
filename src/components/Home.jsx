import { useState, useEffect } from 'react';
import axios from 'axios';
import HouseCard from './houses/HouseCard';

const baseURL = 'https://wizard-world-api.herokuapp.com';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/Houses`)
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(`Error: ${error}`);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  if (!data && !error) {
    return <div>Loading</div>;
  }

  return (
    <main className='container grid'>
      {data.map((item) => (
        <HouseCard key={item.id} data={item} />
      ))}
    </main>
  );
};

export default Home;

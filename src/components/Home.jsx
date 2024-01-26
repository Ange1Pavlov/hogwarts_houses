import { useState, useEffect } from 'react';
import { houses } from '../fakeData/res';
import Loader from './Loader';

import HouseCard from './houses/HouseCard';
import HousesTable from './table/HousesTable';
import RegisterHouse from './register/RegisterHouse';

import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    setData(houses);
    // axios
    //   .get(`${process.env.REACT_APP_API_BASE_URL}/Houses`)
    //   .then((res) => {
    //     const sortedData = res.data.sort((a, b) =>
    //       a.name.localeCompare(b.name)
    //     );
    //     setData(sortedData);
    //   })
    //   .catch((error) => {
    //     console.log(`Error: ${error}`);
    //     setError(error);
    //   });
  }, []);

  if (error) {
    return (
      <div className='flex justify-center items-center py-64 text-red-500'>{`Error: ${error}`}</div>
    );
  }

  if (!data && !error) {
    return <Loader />;
  }

  const handleUpdateTable = (data) => {
    setFormData(data);
  };

  return (
    <main className='container my-5'>
      <div className='mx-auto grid grid-cols-2 md:grid-cols-4'>
        {data.map((item) => (
          <HouseCard key={item.id} data={item} />
        ))}
      </div>
      <HousesTable data={data} formData={formData} />
      <RegisterHouse updateTable={handleUpdateTable} />
    </main>
  );
};

export default Home;

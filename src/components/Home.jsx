import { useState, useEffect } from 'react';
import { houses } from '../fakeData/res';
import Loader from './Loader';

import HousesTable from './table/HousesTable';
import RegisterHouse from './register/RegisterHouse';

const Home = ({ data, error }) => {
  const [formData, setFormData] = useState(null);

  const handleUpdateTable = (data) => {
    setFormData(data);
  };

  if (error) {
    return (
      <div className='flex justify-center items-center py-64 text-red-500'>{`Error: ${error}`}</div>
    );
  }

  if (!data && !error) {
    return (
      <div className='flex w-full py-64 justify-center items-center'>
        <Loader />
      </div>
    );
  }

  return (
    <main className='container my-5 md:max-w-screen-xl'>
      <HousesTable data={data} formData={formData} />
      <RegisterHouse updateTable={handleUpdateTable} />
    </main>
  );
};

export default Home;

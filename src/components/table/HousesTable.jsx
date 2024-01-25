import { useState, useEffect } from 'react';
import Titles from './Titles';

const HousesTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    setSort((prevState) => !prevState);
  }, [tableData]);

  const sortTableData = () => {
    const sortedTableData = [...data].sort((a, b) =>
      sort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );

    setTableData(sortedTableData);
  };

  const handleClick = () => {
    sortTableData();
  };

  return (
    <table className='w-full text-sm text-left text-white my-5 rounded-md overflow-hidden'>
      <thead className='uppercase bg-main text-white'>
        {/* Wanted to do it with Object.keys(data[0]).map but there is no point.
        Even if i filter out the unnecessarily data, upon update of the API more parameters may appear.
        If I filter only the needed data it's the same as using it hardcoded */}
        <tr>
          <Titles label='Name' onClick={handleClick} />
          <Titles label='Animal' />
          <Titles label='Ghost' />
          <Titles label='Common Room' />
        </tr>
      </thead>
      <tbody>
        {tableData.map((house) => (
          <tr key={house.id} className='bg-white border-b text-main'>
            <td className='px-6 py-4'>{house.name}</td>
            <td className='px-6 py-4'>{house.animal}</td>
            <td className='px-6 py-4'>{house.ghost}</td>
            <td className='px-6 py-4'>{house.commonRoom}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HousesTable;

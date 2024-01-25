import { useState, useEffect } from 'react';
import ThTitle from './ThTitle';
import FilterTable from './FilterTable';

const HousesTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [sort, setSort] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const sortTableData = () => {
    const sortedTableData = [...data].sort((a, b) =>
      sort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );

    setTableData(sortedTableData);
  };

  const handleClick = () => {
    sortTableData();
    setSort((prevState) => !prevState);
    setSearchValue('');
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilter = (value) => {
    const filteredData = data.filter((house) =>
      house.animal.toLowerCase().includes(value.toLowerCase())
    );
    setTableData(filteredData);
  };

  return (
    <div className=' my-5 '>
      <FilterTable
        searchValue={searchValue}
        onChange={handleChange}
        onFilter={handleFilter}
      />
      <table className='w-full text-sm text-left text-white rounded-b-xl overflow-hidden'>
        <thead className='uppercase bg-main text-white'>
          {/* Wanted to do it with Object.keys(data[0]).map but there is no point.
        Even if i filter out the unnecessarily data, upon update of the API more parameters may appear.
        If I filter only the needed data it's the same as using it hardcoded */}
          <tr>
            <ThTitle label='Name' onClick={handleClick} />
            <ThTitle label='Animal' />
            <ThTitle label='Ghost' />
            <ThTitle label='Common Room' />
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
    </div>
  );
};

export default HousesTable;

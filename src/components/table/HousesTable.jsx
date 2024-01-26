import { useState, useEffect } from 'react';
import ThTitle from './ThTitle';
import FilterInput from './FilterInput';

const HousesTable = ({ data, formData }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [newData, setNewData] = useState([]);

  const [sort, setSort] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const essentialData = data.map(({ name, animal, ghost, commonRoom }) => ({
      name,
      animal,
      ghost,
      commonRoom,
    }));

    setFetchedData(essentialData);
    setNewData(essentialData);
  }, [data]);

  useEffect(() => {
    if (formData) {
      setFetchedData((prevState) => [...prevState, formData]);
      setNewData((prevState) => [...prevState, formData]);
    }
  }, [formData]);

  const sortTableData = () => {
    const sortedTableData = [...newData].sort((a, b) =>
      sort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
    setNewData(sortedTableData);
  };

  const handleClick = () => {
    sortTableData();
    setSort((prevState) => !prevState);
    setSearchValue('');
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (value) => {
    const newFilteredData = fetchedData.filter((house) =>
      house.animal.toLowerCase().includes(value.toLowerCase())
    );
    setNewData(newFilteredData);
  };

  return (
    <div className='my-5 overflow-x-auto'>
      <FilterInput
        searchValue={searchValue}
        onChange={handleChange}
        onFilter={filterData}
      />
      <table className='w-full text-sm md:text-base text-left text-white rounded-b-xl overflow-hidden'>
        <thead className='uppercase bg-main text-white'>
          <tr>
            {newData[0] &&
              Object.keys(newData[0]).map((label, index) => {
                return (
                  <ThTitle
                    key={index}
                    label={label}
                    onClick={label === 'name' && handleClick}
                  />
                );
              })}
          </tr>
        </thead>
        <tbody>
          {newData &&
            newData.map((house, index) => (
              <tr
                key={index}
                className='bg-white border-b text-main capitalize'
              >
                <td className='px-2 sm:px-4 md:px-6 py-2 md:py-4'>
                  <strong className='text-[1.1rem] md:text-n'>
                    <span className='md:hidden'>House name: </span>
                    {house.name}
                  </strong>
                  <div className='mt-2 md:hidden'>
                    <p className='pt-2 p-2 mb-2'>
                      <strong>Ghost:</strong> <br /> {house.ghost}
                    </p>
                    <p className='pt-2 p-2 mb-2'>
                      <strong>Common Room:</strong> <br /> {house.commonRoom}
                    </p>
                  </div>
                </td>
                <td className='px-6 py-2 md:py-4'>
                  <p className='text-[1.1rem] md:text-n'>{house.animal}</p>
                </td>
                <td className='hidden md:table-cell px-6 py-2 md:py-4'>
                  {house.ghost}
                </td>
                <td className='hidden md:table-cell px-6 py-2 md:py-4'>
                  {house.commonRoom}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HousesTable;

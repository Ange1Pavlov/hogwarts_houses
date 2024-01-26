import { useEffect } from 'react';

const FilterInput = ({ searchValue, onChange, onFilter }) => {
  useEffect(() => {
    onFilter(searchValue);
  }, [searchValue]);

  return (
    <input
      type='text'
      placeholder='Search by house animal'
      value={searchValue}
      onChange={onChange}
      className='rounded-t-xl overflow-hidden w-full p-2'
    />
  );
};

export default FilterInput;

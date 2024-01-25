import { useState, useEffect } from 'react';

const FilterTable = ({ searchValue, onChange, onFilter }) => {
  useEffect(() => {
    onFilter(searchValue);
  }, [searchValue]);

  return (
    <input
      type='text'
      placeholder='Search by house animals'
      value={searchValue}
      onChange={onChange}
      className='rounded-t-xl overflow-hidden w-full p-2'
    />
  );
};

export default FilterTable;

import React from 'react';

const ListWrapper = ({ title, children }) => {
  return (
    <div className='py-2 text-sm md:text-n'>
      {title && <h3 className='font-700'>{title}:</h3>}
      <div className='pl-2'>{children}</div>
    </div>
  );
};

export default ListWrapper;

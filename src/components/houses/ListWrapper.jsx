import React from 'react';

const ListWrapper = ({ title, children }) => {
  return (
    <div className='py-2'>
      {title && <h3>{title}:</h3>}
      {children}
    </div>
  );
};

export default ListWrapper;

import React from 'react';

const ListWrapper = ({ title, children }) => {
  return (
    <div className='list-wrapper'>
      {title && <h3>{title}:</h3>}
      {children}
    </div>
  );
};

export default ListWrapper;

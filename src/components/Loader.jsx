import React, { Fragment } from 'react';
import { ProgressBarRound } from '@carbon/icons-react';

const Loader = () => {
  return (
    <div className='flex justify-center items-center py-64'>
      <ProgressBarRound
        className='animate-spin'
        width={50}
        height={50}
        color={'var(--loader)'}
      />
    </div>
  );
};

export default Loader;

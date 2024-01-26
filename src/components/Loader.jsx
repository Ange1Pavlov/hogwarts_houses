import React, { Fragment } from 'react';
import { ProgressBarRound } from '@carbon/icons-react';

const Loader = ({ size }) => {
  return (
    <ProgressBarRound
      className='animate-spin'
      width={size || 50}
      height={size || 50}
      color={'var(--loader)'}
    />
  );
};

export default Loader;

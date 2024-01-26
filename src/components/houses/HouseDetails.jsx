import React from 'react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';

const HouseDetails = ({
  data: { name, animal, element, founder, ghost, houseColours, commonRoom },
}) => {
  return (
    <>
      <h3 className='text-h5 lg:text-h3 text-center pt-3'>
        <strong>{name}</strong>
      </h3>
      <ListWrapper>
        <ul className='text-sm md:text-n text-center'>
          <ListItem label='Founder' value={founder} />
          {/* <ListItem label='Animal' value={animal} />
        <ListItem label='Element' value={element} />
        <ListItem label='Ghost' value={ghost} />
        <ListItem label='House Colours' value={houseColours} />
        <ListItem label='Common Room' value={commonRoom} /> */}
        </ul>
      </ListWrapper>
    </>
  );
};

export default HouseDetails;

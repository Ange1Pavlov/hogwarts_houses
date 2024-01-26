import React from 'react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';

const HouseDetails = ({
  data: { name, animal, element, founder, ghost, houseColours, commonRoom },
}) => {
  return (
    <ListWrapper>
      <h2>
        <strong>{name}</strong>
      </h2>
      {/* <ul>
        <ListItem label='Animal' value={animal} />
        <ListItem label='Element' value={element} />
        <ListItem label='Founder' value={founder} />
        <ListItem label='Ghost' value={ghost} />
        <ListItem label='House Colours' value={houseColours} />
        <ListItem label='Common Room' value={commonRoom} />
      </ul> */}
    </ListWrapper>
  );
};

export default HouseDetails;

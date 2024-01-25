import HeadsList from './HeadsList';
import TraitList from './TraitList';
import HouseDetails from './HouseDetails';

const HouseCard = ({ data }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <HouseDetails title='Details' data={data} />
      <HeadsList title='Heads' data={data.heads} />
      <TraitList title='Traits' data={data.traits} />
    </div>
  );
};

export default HouseCard;

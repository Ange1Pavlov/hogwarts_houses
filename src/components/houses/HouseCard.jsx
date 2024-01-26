import HeadsList from './HeadsList';
import TraitList from './TraitList';
import HouseDetails from './HouseDetails';

const HouseCard = ({ data }) => {
  return (
    <div className='bg-gradient-to-b from-gray-950 to-gray-900  text-white m-2 p-5 rounded-xl'>
      <HouseDetails title='Details' data={data} />
      <HeadsList title='Heads' data={data.heads} />
      <TraitList title='Traits' data={data.traits} />
    </div>
  );
};

export default HouseCard;

import ListWrapper from './ListWrapper';

const TraitCard = ({ title, data }) => {
  return (
    <ListWrapper title={title}>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default TraitCard;

import ListWrapper from './ListWrapper';

const HeadsList = ({ title, data }) => {
  return (
    <ListWrapper title={title}>
      {data.map((item) => (
        <div key={item.id}>
          {item.firstName} {item.lastName}
        </div>
      ))}
    </ListWrapper>
  );
};

export default HeadsList;

import ListWrapper from './ListWrapper';

const HeadsList = ({ title, data }) => {
  return (
    <ListWrapper title={title}>
      {data.map((item) => (
        <div key={item.id}>
          <strong>
            {item.firstName} {item.lastName}
          </strong>
        </div>
      ))}
    </ListWrapper>
  );
};

export default HeadsList;

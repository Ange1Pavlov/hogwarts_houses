import SortButton from '../SortButton';

const ThTitle = ({ label, onClick }) => {
  return (
    <th scope='col' className='px-6 py-3'>
      <div className='flex items-center'>
        {label}
        {onClick && <SortButton onClick={onClick} />}
      </div>
    </th>
  );
};

export default ThTitle;

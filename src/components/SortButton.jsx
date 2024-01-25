import { ChevronSort } from '@carbon/icons-react';

const SortButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='px-1'>
      <ChevronSort width={15} height={15} />
    </button>
  );
};

export default SortButton;

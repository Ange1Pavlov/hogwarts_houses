import SortButton from '../SortButton';

const ThTitle = ({ label, onClick }) => {
  const excludeForMobile = label === 'ghost' || label === 'commonRoom';
  const hasUppercase = /[A-Z]/.test(label);
  const newLabel = hasUppercase ? label.split(/(?=[A-Z])/).join(' ') : label;

  return (
    <th
      scope='col'
      className={`${excludeForMobile && 'hidden md:table-cell'} px-6 py-3`}
    >
      <div className='flex items-center'>
        {/* WIP: May use some device detection library to change the string for mobile */}
        <span className='md:hidden'>
          {label === 'name' ? <span>House Info</span> : <span>{newLabel}</span>}
        </span>
        <span className='hidden md:inline-block'>{newLabel}</span>
        {onClick && <SortButton onClick={onClick} />}
      </div>
    </th>
  );
};

export default ThTitle;

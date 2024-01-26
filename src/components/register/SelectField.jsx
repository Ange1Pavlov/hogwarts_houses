import { ChevronDown } from '@carbon/icons-react';

const options = [
  { value: '', label: 'Select an animal' },
  { value: 'giraffe', label: 'Giraffe' },
  { value: 'dolphin', label: 'Dolphin' },
  { value: 'armadillo', label: 'Armadillo' },
  { value: 'unicorn', label: 'Unicorn' },
];

const SelectField = ({ label, name, updateChange, error }) => {
  const handleChange = (e) => {
    updateChange(name, e.target.value);
  };

  return (
    <div className='md:col-span-6'>
      <label htmlFor={name} className='block font-600 leading-6 text-main'>
        {label}
      </label>
      <div className='mt-2'>
        <div className='flex rounded-xl shadow-sm relative'>
          <select
            name={name}
            onChange={handleChange}
            className='block flex-1 border-0 py-2 pl-2 pr-8 focus:ring-0 leading-6 rounded-xl appearance-none'
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <ChevronDown />
          </div>
        </div>
        {error && <div className='text-sm text-red-500 mt-2'>{error}</div>}
      </div>
    </div>
  );
};

export default SelectField;

const InputField = ({ label, name, updateChange, error }) => {
  const handleChange = (e) => {
    updateChange(name, e.target.value);
  };

  return (
    <div className='md:col-span-6'>
      <label htmlFor={name} className='block font-600 leading-6 text-main'>
        {label}
      </label>
      <div className='mt-2'>
        <div className='flex rounded-xl shadow-sm'>
          <input
            type='text'
            name={name}
            className='block flex-1 border-0 py-2 focus:ring-0 leading-6 px-2 rounded-xl'
            onChange={handleChange}
            maxLength={49}
          />
        </div>
        {error && <div className='text-sm text-red-500 mt-2'>{error}</div>}
      </div>
    </div>
  );
};

export default InputField;

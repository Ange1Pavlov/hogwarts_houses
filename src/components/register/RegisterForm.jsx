import { useState, useEffect } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import FormValidator from './FormValidator';
import Loader from '../Loader';

const RegisterForm = ({ updateTable, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    animal: '',
    ghost: '',
    commonRoom: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      const timer = setTimeout(() => {
        setErrors({});
        setSubmitting(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [submitting]);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const formErrors = FormValidator({ formData });
    setSubmitting(true);

    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
      return;
    }

    // WIP: May use global stage and not pass data around the components
    updateTable(formData);
    handleClose();
    setSubmitting(false);
  };

  return (
    <>
      <h4 className='text-h5 md:text-h4 font-700 my-2'>New Hogwarts House</h4>
      <small className='text-sm font-600 block'>
        (All fields with * are required)
      </small>
      <form>
        <div className='space-y-12'>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6'>
            <InputField
              label='Name *'
              name='name'
              error={errors.name}
              updateChange={handleChange}
            />
            <SelectField
              label='Animal *'
              name='animal'
              error={errors.animal}
              updateChange={handleChange}
            />
            <InputField
              label='Ghost *'
              name='ghost'
              error={errors.ghost}
              updateChange={handleChange}
            />
            <InputField
              label='Common Room'
              name='commonRoom'
              error={errors.commonRoom}
              updateChange={handleChange}
            />
          </div>
          <div className='flex items-center justify-center'>
            {submitting ? (
              <Loader size={25} />
            ) : (
              <button
                type='button'
                onClick={handleSubmit}
                className='text-md font-700 text-white bg-blue-500 hover:bg-blue-700 rounded-xl px-10 py-2'
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

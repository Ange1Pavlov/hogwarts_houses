const FormValidator = ({ formData }) => {
  const validate = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'The field is required!';
    } else if (/^(.{0,4}|.{21,})$/.test(formData.name)) {
      errors.name = 'Enter a name between 5 and 20 symbosl.';
    }

    if (!formData.animal) {
      errors.animal = 'Please select an option!';
    }

    if (!formData.ghost) {
      errors.ghost = 'The field is required!';
    } else if (/arnold/i.test(formData.ghost)) {
      errors.ghost = 'Cannot contain the name Arnold!';
    } else if (formData.commonRoom.length > 40) {
      errors.commonRoom = 'The text is too long!';
    }

    return errors;
  };

  return validate();
};

export default FormValidator;

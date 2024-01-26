import { useState } from 'react';
import RegisterForm from './RegisterForm';
import Modal from '../Modal';

const RegisterHouse = ({ updateTable }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='flex justify-center'>
      <div className='text-center'>
        <h4 className='text-h5 md:text-h4 font-700 mb-2'>
          Add a new Hogwarts house:
        </h4>
        <button
          className='text-md font-700 text-white bg-blue-500 hover:bg-blue-700 rounded-xl px-10 py-2'
          onClick={handleOpen}
        >
          Add
        </button>
        <Modal isOpen={modalOpen} onClose={handleClose}>
          <RegisterForm updateTable={updateTable} handleClose={handleClose} />
        </Modal>
      </div>
    </div>
  );
};

export default RegisterHouse;

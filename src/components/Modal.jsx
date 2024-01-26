import { Close } from '@carbon/icons-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 inset-y-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-semigray text-left'>
      <div className='fixed inset-0 bg-black opacity-50'></div>
      <div className='relative z-50 w-full max-w-screen-md p-8 overflow-hidden bg-white rounded-xl shadow-sm'>
        <button
          className='absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800 focus:outline-none'
          onClick={onClose}
        >
          <Close width={30} height={30} />
        </button>
        <div className='mt-8'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

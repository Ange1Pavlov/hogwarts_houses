import { useRef, useEffect } from 'react';
import { Close } from '@carbon/icons-react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) =>
      modalRef.current && !modalRef.current.contains(e.target) && onClose();

    const handleEscape = (e) => e.key === 'Escape' && onClose();

    if (isOpen && document) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      if (document) {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('keydown', handleEscape);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 inset-y-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-semigray text-left'>
      <div
        ref={modalRef}
        className='relative z-50 w-full max-w-screen-md p-8 overflow-hidden bg-white rounded-xl shadow-sm'
      >
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

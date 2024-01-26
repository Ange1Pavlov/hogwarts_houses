const Button = ({ type, label, onClick }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className='text-md font-700 text-white bg-blue-800 hover:bg-blue-700 rounded-xl px-10 py-2'
  >
    {label}
  </button>
);

export default Button;

import NavLink from './NavLink';

const Navbar = ({ title }) => {
  return (
    <nav className='flex flex-col md:flex-row items-center'>
      <div className='flex'>
        <img
          src='./logo192.png'
          alt='Cornelius Hogwarts'
          className='rounded-xl h-20 w-20 md:mr-5'
        />
        <h1 className='text-h5 md:text-h2 font-bold hidden md:block'>
          {title}
        </h1>
      </div>
      <ul className='md:ml-auto flex items-center'>
        <NavLink url='/' title='Home' />
        <NavLink url='/contact' title='Contact' />
      </ul>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: 'Hogwarts Houses',
};

import NavLink from './NavLink';

const Navbar = ({ title }) => {
  return (
    <nav className='flex flex-col md:flex-row items-center'>
      <h1 className='text-h4 md:text-h2 font-bold'>{title}</h1>
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

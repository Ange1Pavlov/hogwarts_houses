import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar = ({ title }) => {
  return (
    <nav className='flex flex-col md:flex-row items-center'>
      <Link to='/'>
        <div className='flex items-center'>
          <img
            src='./logo192.png'
            alt='Cornelius Hogwarts'
            className='rounded-xl h-20 w-20 md:mr-5'
          />
          <h1 className='md:text-[3rem] font-900 hidden md:block dancing-font'>
            {title}
          </h1>
        </div>
      </Link>
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

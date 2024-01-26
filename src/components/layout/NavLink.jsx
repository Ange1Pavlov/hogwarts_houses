import { Link } from 'react-router-dom';

const NavLink = ({ url, title }) => {
  return (
    <li className='p-5 text-xl'>
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default NavLink;

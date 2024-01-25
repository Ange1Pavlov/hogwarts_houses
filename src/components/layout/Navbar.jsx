const Navbar = ({ title }) => {
  return (
    <nav>
      <h1 className='text-3xl font-bold'>{title}</h1>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: 'Hogwarts Houses',
};

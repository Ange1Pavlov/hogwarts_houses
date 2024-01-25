const Navbar = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: 'Hogwarts Houses',
};
